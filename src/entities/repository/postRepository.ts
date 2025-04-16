import { supabase } from "@/shared/config/supabaseClient";
import { PostPayload } from "@/shared/interface/enitites/posts";

export const createPost = async (post: PostPayload) => {
  const { data, error } = await supabase.from("posts").insert([post]);

  if (error) throw error;
  return data;
};

export const fetchThemes = async () => {
  const { data, error } = await supabase.from("themes").select("*");

  if (error) throw error;
  return data;
};
