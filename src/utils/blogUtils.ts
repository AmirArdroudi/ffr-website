import { marked } from 'marked';
import matter from 'gray-matter';
import { BlogPost, BlogPostMatter } from '../types/blog';

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

// List of blog post slugs (add new posts here)
export const blogPostSlugs = [
  'welcome-to-fresh-face-roya',
  'the-science-of-clean-beauty',
  'skincare-routine-guide',
  'ingredient-spotlight-vitamin-c',
  'seasonal-skincare-tips'
];

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    if (!response.ok) {
      console.error(`Failed to fetch ${slug}.md (status: ${response.status})`);
      return null;
    }
    
    const rawContent = await response.text();
    const { data, content: markdownContent } = matter(rawContent);
    
    const frontMatter = data as BlogPostMatter;
    const htmlContent = await marked.parse(markdownContent);
    
    return {
      slug,
      title: frontMatter.title || 'Untitled Post',
      description: frontMatter.description || '',
      coverImage: frontMatter.coverImage || '',
      author: frontMatter.author || 'Fresh Face Roya Team',
      date: frontMatter.date || new Date().toISOString(),
      content: htmlContent,
      readTime: frontMatter.readTime || calculateReadTime(markdownContent),
      tags: frontMatter.tags || []
    };
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const slug of blogPostSlugs) {
    const post = await fetchBlogPost(slug);
    if (post) {
      posts.push(post);
    }
  }
  
  // Sort posts by date, most recent first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}