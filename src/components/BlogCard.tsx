import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/blogUtils';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                {post.tags[0]}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-neutral-500 mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h2 className="text-xl font-display font-medium mb-3 text-primary-900 group-hover:text-primary-700 transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-neutral-500">
              <User size={14} className="mr-1" />
              <span>{post.author}</span>
            </div>
            
            <span className="text-primary-500 font-medium text-sm group-hover:text-primary-600 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;