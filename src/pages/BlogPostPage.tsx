import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { fetchBlogPost, formatDate } from '../utils/blogUtils';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No blog post specified');
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const fetchedPost = await fetchBlogPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center py-20">
            <h2 className="text-2xl font-display font-medium mb-4 text-primary-900">
              {error || 'Blog post not found'}
            </h2>
            <p className="text-neutral-600 mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blog')} 
          className="inline-flex items-center text-neutral-600 hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </button>

        {/* Article Header */}
        <header className="mb-8">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4 text-primary-900 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-600 mb-6 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-neutral-200">
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-neutral-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                aria-label="Share article"
              >
                <Share2 size={18} />
              </button>
              <button
                className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Like article"
              >
                <Heart size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-neutral max-w-none">
          <div 
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-neutral-600 mb-2">Written by</p>
              <p className="font-medium text-primary-800">{post.author}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="btn btn-outline flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share Article
              </button>
              <Link to="/blog" className="btn btn-primary">
                More Articles
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostPage;