export interface IPost {
  id: number;
  html: string;
  excerpt: string;
  frontmatter: {
    date: string;
    path: string;
    title: string;
    tags: string[];
  };
  node?: {
    id: number;
    html: string;
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
      tags: string[];
    };
  };
}
