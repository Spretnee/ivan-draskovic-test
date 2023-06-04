export type GetUserResponse = {
  about_me: null | string;
  access_token: string;
  bundlr_email: string;
  email: string;
  first_name: string;
  id: number;
  image_url: null;
  is_active: boolean;
  last_login: null;
  last_name: string;
  phone: null;
  role: null;
  token_type: string;
  username: string;
};

export type GetUserProps = {
  username: string;
  password: string;
};

export type Episode = {
  id: string;
  ko_type: string;
  upvotes_count: number;
  downvotes_count: number;
  comments_count: number;
  shares_count: number;
  podcast_id: string;
  title: string;
  summary: string;
  image: string;
  link: string;
  mp3_url: string;
  author: string;
  publication_date: string;
  language: string;
  categories: string[];
  subcategories: string[];
};
