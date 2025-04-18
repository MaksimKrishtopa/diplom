import { supabase } from "@/shared/config/supabaseClient";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";

export const createPost = async (post: PostPayload) => {
  const { data: postData, error: postError } = await supabase
    .from("posts")
    .insert([{
      creator_id: post.creator_id,
      text: post.text,
      location: post.location,
      status: post.status,
      image: post.image,
      created_at: post.created_at,
    }])
    .select("id")
    .single();

  if (postError) throw postError;

  const postThemes = post.theme_ids.map((themeId) => ({
    post_id: postData.id,
    theme_id: themeId,
  }));
  const { error: themeError } = await supabase
    .from("post_themes")
    .insert(postThemes);

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

export const fetchPostsWithThemes = async (): Promise<PostPayload[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, post_themes(theme_id)")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw error;

  const typed = data as RawPostFromDb[];
  return typed.map((post) => ({
    ...post,
    theme_ids: post.post_themes.map((pt) => pt.theme_id),
  }));
};

export const checkIfUserLikedPost = async (
  postId: string,
  userId: string
): Promise<boolean> => {
  const { data, error } = await supabase
    .from("post_likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return Boolean(data);
};

export const likePost = async (postId: string, userId: string) => {
  const { error } = await supabase
    .from("post_likes")
    .insert([{ post_id: postId, user_id: userId }]);
  if (error) throw error;
};

export const unlikePost = async (postId: string, userId: string) => {
  const { error } = await supabase
    .from("post_likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);
  if (error) throw error;
};

export const toggleLike = async (
  postId: string,
  userId: string
): Promise<boolean> => {
  const liked = await checkIfUserLikedPost(postId, userId);
  if (liked) {
    await unlikePost(postId, userId);
    return false;
  } else {
    await likePost(postId, userId);
    return true;
  }
};

export const checkIfUserFavoritedPost = async (
  postId: string,
  userId: string
): Promise<boolean> => {
  const { data, error } = await supabase
    .from("post_favorites")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return Boolean(data);
};

export const favoritePost = async (postId: string, userId: string) => {
  const { error } = await supabase
    .from("post_favorites")
    .insert([{ post_id: postId, user_id: userId }]);
  if (error) throw error;
};

export const unfavoritePost = async (postId: string, userId: string) => {
  const { error } = await supabase
    .from("post_favorites")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);
  if (error) throw error;
};

export const toggleFavorite = async (
  postId: string,
  userId: string
): Promise<boolean> => {
  const isFav = await checkIfUserFavoritedPost(postId, userId);
  if (isFav) {
    await unfavoritePost(postId, userId);
    return false;
  } else {
    await favoritePost(postId, userId);
    return true;
  }
};

export const fetchCommentsForPost = async (postId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .select("id, user_id, content, created_at, post_id, users(user_name, image)")
    .eq("post_id", postId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data.map((c: any) => ({
    id: c.id,
    user_id: c.user_id,
    content: c.content,
    created_at: c.created_at,
    post_id: c.post_id,
    user_name: c.users?.user_name || "Аноним",
    avatar_url: c.users?.image || "/default-avatar.png",
  }));
};



export const fetchPostById = async (postId: string): Promise<PostPayload> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (error) throw error;

  return data as PostPayload;
};


export const createComment = async (postId: string, userId: string, content: string) => {
  const { error } = await supabase
    .from("comments")
    .insert([{ post_id: postId, user_id: userId, content }]);

  if (error) throw error;
};


