export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  thumbnail: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
