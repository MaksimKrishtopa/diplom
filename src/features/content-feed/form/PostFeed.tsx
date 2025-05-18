import { useEffect, useState } from "react";
import { fetchPostsWithThemes, fetchThemes } from "@/entities/repository/postRepository";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";
import PostCard from "@/features/post/form/post-card/PostCard";
import style from "@/features/content-feed/form/style";

const PostFeed = () => {
  const [posts, setPosts] = useState<PostPayload[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleDeletePost = (postId: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

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

  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;

    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  if (loading) return <p className={style.loading}>Загрузка...</p>;
  if (error) return <p className={style.error}>{error}</p>;

  return (
    <div className={style.container}>
      <div className={style.sortWrapper}>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className={style.select}
        >
          <option value="desc">Сортировать по дате (Сначала новые)</option>
          <option value="asc">Сортировать по дате (Сначала старые)</option>
        </select>
      </div>

      {sortedPosts.map((post) => (
        <PostCard
          key={post.created_at + post.creator_id}
          post={post}
          themes={themes}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
};

export default PostFeed;
