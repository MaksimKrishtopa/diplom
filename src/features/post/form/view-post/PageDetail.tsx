import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "@/features/post/form/post-card/PostCard";
import { fetchThemes } from "@/entities/repository/postRepository";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";
import { supabase } from "@/shared/config/supabaseClient";
import style from "@/features/post/form/view-post/style";

const PageDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostPayload | null>(null);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostAndThemes = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*, post_themes(theme_id)")
          .eq("id", postId)
          .single();

        if (error) throw error;

        const postWithThemes: PostPayload = {
          ...data,
          theme_ids: data.post_themes.map((pt: { theme_id: number }) => pt.theme_id),
        };

        setPost(postWithThemes);

        const themesData = await fetchThemes();
        setThemes(themesData);
      } catch (err) {
        console.error("Ошибка при загрузке поста:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndThemes();
  }, [postId]);

  if (loading) return <p className={style.loadingText}>Загрузка...</p>;
  if (!post) return <p className={style.errorText}>Пост не найден</p>;

  return (
    <div className={style.container}>
      <div className={style.postWrapper}>
        <PostCard post={post} themes={themes} />
      </div>
    </div>
  );
};

export default PageDetail;
