import { supabase } from "@/shared/config/supabaseClient";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";


export const createPost = async (post: PostPayload) => {
  const { data: postData, error: postError } = await supabase.from("posts").insert([{
    creator_id: post.creator_id,
    text: post.text,
    location: post.location,
    status: post.status,
    image: post.image,
    created_at: post.created_at,
  }]).select("id").single();

  if (postError) throw postError;


  const postThemes = post.theme_ids.map((themeId) => ({
    post_id: postData.id,
    theme_id: themeId,
  }));

  const { error: themeError } = await supabase.from("post_themes").insert(postThemes);

  if (themeError) throw themeError;

  return postData;
};


export const fetchThemes = async (): Promise<Theme[]> => {
  const { data, error } = await supabase.from("themes").select("*");

  if (error) throw error;
  return data as Theme[];
};


type RawPostFromDb = Omit<PostPayload, "theme_ids"> & {
  post_themes: { theme_id: number }[];
};


type PostWithThemes = PostPayload;

export const fetchPostsWithThemes = async (): Promise<PostWithThemes[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, post_themes(theme_id)")
    .eq("status", "moderation")
    .order("created_at", { ascending: false });

  if (error) throw error;

  const typedData = data as RawPostFromDb[];


  const postsWithThemeIds: PostWithThemes[] = typedData.map((post) => ({
    ...post,
    theme_ids: post.post_themes?.map((pt) => pt.theme_id) || [],
  }));

  return postsWithThemeIds;
};
