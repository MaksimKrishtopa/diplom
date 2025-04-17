// src/shared/interface/enitites/posts/index.ts

export interface PostPayload {
  creator_id: string;
  text?: string | null;
  location?: string | null;
  status: "draft" | "moderation";
  theme_ids: number[];  // изменено на number[]
  image: string;
  created_at?: string;
  updated_at?: string;
  is_deleted?: boolean;
  deleted_at?: string | null;
}

export interface Theme {
  id: number;  // изменено на number
  title: string;
}
