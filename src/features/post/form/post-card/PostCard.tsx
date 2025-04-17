import { useEffect, useState } from "react";
import { PostPayload, Theme } from "@/shared/interface/enitites/posts";
import { getUserById } from "@/entities/repository/userRepository";
import style from "@/features/post/form/post-card/style";

interface Props {
  post: PostPayload;
  themes: Theme[];
}

const PostCard = ({ post, themes }: Props) => {
  const [authorName, setAuthorName] = useState<string>("");

  useEffect(() => {
    getUserById(post.creator_id)
      .then((user) => setAuthorName(user?.user_name || "Неизвестный автор"))
      .catch(() => setAuthorName("Ошибка при загрузке"));
  }, [post.creator_id]);

  const selectedThemeTitles = post.theme_ids
    .map((id) => themes.find((theme) => theme.id === id)?.title)
    .filter(Boolean);

  return (
    <div className={style.card}>
      <p className={style.author}>{authorName}</p>
      <p className={style.location}>{post.location}</p>

      <div className={style.themesWrapper}>
        {selectedThemeTitles.map((title, index) => (
          <span key={index} className={style.theme}>
            {title}
          </span>
        ))}
      </div>

      <p className={style.text}>{post.text}</p>

      {post.image && (
        <img src={post.image} alt="Пост" className={style.image} />
      )}

      <p className={style.date}>
        {new Date(post.created_at || "").toLocaleString()}
      </p>
    </div>
  );
};

export default PostCard;
