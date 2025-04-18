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
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

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
    
    if (sortOrder === 'desc') {
      return dateB - dateA;
    }
    return dateA - dateB;
  });

  if (loading) return <p className="text-center">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="desc">Сортировать по дате (Сначала новые)</option>
          <option value="asc">Сортировать по дате (Сначала старые)</option>
        </select>
      </div>

      {sortedPosts.map((post) => (
        <PostCard key={post.created_at + post.creator_id} post={post} themes={themes} />
      ))}
    </div>
  );
};

export default PostFeed;
