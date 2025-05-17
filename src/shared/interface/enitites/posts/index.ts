export interface PostPayload {
  id: string;
  creator_id: string;
  text?: string | null;
  location?: string | null;
  status: "draft" | "moderation";
  theme_ids: number[];
  image: string;
  created_at?: string;
  updated_at?: string;
  is_deleted?: boolean;
  deleted_at?: string | null;
  liked_by_user?: boolean;
  favorited_by_user?: boolean;
}

export interface CreatePostPayload extends Omit<PostPayload, 'id'> {
  id?: string;
}



export interface Theme {
  id: number;
  title: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
  user_name: string;
  avatar_url: string;
}
