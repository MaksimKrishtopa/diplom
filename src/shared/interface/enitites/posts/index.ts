export interface PostPayload {
    creator_id: string;
    text?: string | null;
    location?: string | null;
    status: "draft" | "moderation";
    theme_id: string | null;
    image: string;
    created_at?: string;
    updated_at?: string;
    is_deleted?: boolean;
    deleted_at?: string | null;
  }

  
  export interface Theme {
    id: string;
    title: string;
  }
  