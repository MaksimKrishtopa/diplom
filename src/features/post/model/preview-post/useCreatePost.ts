import { useState } from "react";
import { createPost } from "@/entities/repository/postRepository";
import { supabase } from "@/shared/config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { CreatePostPayload } from "@/shared/interface/enitites/posts"; 

export const useCreatePost = (formData: Omit<CreatePostPayload, "image" | "created_at"> & { image: File; userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePostSubmit = async (status: "draft" | "moderation") => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: uploadError } = await supabase.storage
        .from("posts-images")
        .upload(`post-${Date.now()}-${formData.image.name}`, formData.image);

      if (uploadError) throw new Error(uploadError.message);

      const imageUrl = supabase.storage
        .from("posts-images")
        .getPublicUrl(data.path).data.publicUrl;

      const payload: CreatePostPayload = {
        creator_id: formData.userId,
        text: formData.text || null,
        location: formData.location || null,
        status,
        theme_ids: formData.theme_ids || [],
        image: imageUrl,
        created_at: new Date().toISOString(),
        id: undefined,
      };

      await createPost(payload);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Ошибка при сохранении поста.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handlePostSubmit,
  };
};
