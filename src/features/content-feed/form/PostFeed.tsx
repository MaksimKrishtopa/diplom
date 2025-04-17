import { useEffect, useState } from "react";
import { fetchPostsWithThemes } from "@/entities/repository/postRepository";
import { fetchThemes } from "@/entities/repository/postRepository";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";
import PostCard from "@/features/post/form/post-card/PostCard";

const PostFeed = () => {
  const [posts, setPosts] = useState<PostPayload[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [postsData, themesData] = await Promise.all([
          fetchPostsWithThemes(),
          fetchThemes(),
        ]);
        setPosts(postsData);
        setThemes(themesData);
      } catch (e) {
        console.error(e);
        setError("Ошибка загрузки постов.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p className="text-center">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {posts.map((post) => (
        <PostCard key={post.created_at + post.creator_id} post={post} themes={themes} />
      ))}
    </div>
  );
};

export default PostFeed;
