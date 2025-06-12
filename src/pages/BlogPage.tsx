import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string; // HTML content
}

// Corresponds to filenames in public/posts/ (without .md extension)
const postSlugs = ['first-post', 'second-post'];

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts: BlogPost[] = [];
        for (const slug of postSlugs) {
          const response = await fetch(`/posts/${slug}.md`);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${slug}.md (status: ${response.status})`);
          }
          const rawContent = await response.text();
          const { data, content: markdownContent } = matter(rawContent);

          const htmlContent = await marked.parse(markdownContent);

          fetchedPosts.push({
            slug: slug,
            title: data.title || 'Untitled Post',
            author: data.author || 'Unknown Author',
            date: data.date ? String(new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })) : 'No Date',
            content: htmlContent,
          });
        }
        // Sort posts by date, most recent first
        fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p className="text-center py-10">Loading posts...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error loading posts: {error}</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Blog</h1>
      {posts.length === 0 && !loading && (
        <p className="text-center text-gray-500">No posts found. Check back later!</p>
      )}
      <div className="space-y-12">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">{post.title}</h2>
            <div className="text-sm text-gray-500 mb-4">
              <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
            {/* Add prose class for Tailwind Typography if installed and configured */}
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
