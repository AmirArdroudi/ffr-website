import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types/blog';
import { fetchAllBlogPosts } from '../utils/blogUtils';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await fetchAllBlogPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (err) {
        console.error("Error loading blog posts:", err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags?.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedTag]);

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

  if (loading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="text-center py-20">
            <h2 className="text-2xl font-display font-medium mb-4 text-primary-900">
              Unable to Load Blog Posts
            </h2>
            <p className="text-neutral-600 mb-8">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4 text-primary-900">
            Beauty & Wellness Blog
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover expert skincare tips, ingredient insights, and the latest in clean beauty trends.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            {/* Tag Filter */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTag === ''
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  All Topics
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-4 text-neutral-700">
              {searchTerm || selectedTag ? 'No articles found' : 'No blog posts available'}
            </h3>
            <p className="text-neutral-500">
              {searchTerm || selectedTag 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Check back soon for new content!'
              }
            </p>
            {(searchTerm || selectedTag) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
                className="btn btn-outline mt-4"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Results Count */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-neutral-500">
              Showing {filteredPosts.length} of {posts.length} article{posts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;