export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  content: string; // Will store HTML or Markdown
  author: BlogAuthor;
  publishDate: string; // ISO 8601 format (e.g., "2026-02-18T10:00:00Z")
  category: BlogCategory;
  tags: BlogTag[];
  readingTime: number; // In minutes
}

// DTO (Data Transfer Object) for paginated responses (future-proofing for the API)
export interface PaginatedBlogResponse {
  data: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}