export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  date: string;
  content: string;
  readTime?: string;
  tags?: string[];
}

export interface BlogPostMatter {
  title: string;
  description: string;
  coverImage: string;
  author: string;
  date: string;
  readTime?: string;
  tags?: string[];
}