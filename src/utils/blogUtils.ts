import { marked } from 'marked';
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

// Simple frontmatter parser that works in the browser
function parseFrontmatter(content: string): { data: BlogPostMatter; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {} as BlogPostMatter,
      content: content
    };
  }
  
  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  // Parse YAML-like frontmatter
  const data: any = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayContent = value.slice(1, -1);
        data[key] = arrayContent.split(',').map(item => 
          item.trim().replace(/^["']|["']$/g, '')
        ).filter(item => item.length > 0);
      } else {
        data[key] = value;
      }
    }
  }
  
  return {
    data: data as BlogPostMatter,
    content: markdownContent
  };
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    if (!response.ok) {
      console.error(`Failed to fetch ${slug}.md (status: ${response.status})`);
      return null;
    }
    
    const rawContent = await response.text();
    const { data, content: markdownContent } = parseFrontmatter(rawContent);
    
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