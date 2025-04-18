import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostPayload, Theme, Comment } from "@/shared/interface/enitites/posts";
import { getUserById } from "@/entities/repository/userRepository";
import { supabase } from "@/shared/config/supabaseClient";
import { useAuth } from "@/shared/hooks/auth";
import style from "@/features/post/form/post-card/style";
import LikeIcon from "@/shared/components/icons/like";
import BookmarkIcon from "@/shared/components/icons/bookmark";
import CommentIcon from "@/shared/components/icons/comment";
import ShareIcon from "@/shared/components/icons/share";
import {
  checkIfUserFavoritedPost,
  toggleFavorite,
  toggleLike,
  fetchCommentsForPost,
  createComment,
} from "@/entities/repository/postRepository";

interface Props {
  post: PostPayload;
  themes: Theme[];
}

const PostCard = ({ post, themes }: Props) => {
  const { session } = useAuth();
  const userId = session?.user.id;
  const navigate = useNavigate();

  const [authorName, setAuthorName] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [commentInputVisible, setCommentInputVisible] = useState(false);

  useEffect(() => {
    getUserById(post.creator_id)
      .then((u) => setAuthorName(u?.user_name || "Неизвестный автор"))
      .catch(() => setAuthorName("Ошибка при загрузке"));

    supabase
      .from("post_likes")
      .select("*", { count: "exact" })
      .eq("post_id", post.id)
      .then(({ data, count }) => {
        if (data) {
          setLikeCount(count || 0);
          if (userId) {
            setLiked(data.some((l) => l.user_id === userId));
          }
        }
      });

    if (userId) {
      checkIfUserFavoritedPost(post.id, userId)
        .then(setFavorited)
        .catch(console.error);
    }

    fetchCommentsForPost(post.id).then(setComments).catch(console.error);
  }, [post.creator_id, post.id, userId]);

  const handleToggleLike = async () => {
    if (!userId) return navigate("/login");
    const newState = await toggleLike(post.id, userId);
    setLiked(newState);
    setLikeCount((c) => c + (newState ? 1 : -1));
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/posts/${post.id}`;
    const title = "Посмотри, что я нашёл!";
    const text = post.text?.slice(0, 80) + "...";
  
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
      } catch (err) {
        console.error(err);
      }
    } else {
    }
  };

  const handleViewPost = () => {
    navigate(`/posts/${post.id}`);
  };

  const handleToggleFavorite = async () => {
    if (!userId) return navigate("/login");
    const newState = await toggleFavorite(post.id, userId);
    setFavorited(newState);
  };

  const handleAddComment = async () => {
    if (!userId) return navigate("/login");
    if (newComment.trim() === "") return;

    await createComment(post.id, userId, newComment);
    setNewComment("");
    fetchCommentsForPost(post.id).then(setComments).catch(console.error);
  };

  const selectedThemes = post.theme_ids
    .map((id) => themes.find((t) => t.id === id)?.title)
    .filter(Boolean);

  return (
    <div className={style.card}>
      <div className={style.header}>
        <p className={style.author}>{authorName}</p>
        <p className={style.date}>
          {new Date(post.created_at || "").toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <p className={style.location}>{post.location}</p>

      <div className={style.themesWrapper}>
        {selectedThemes.map((title, i) => (
          <span key={i} className={style.theme}>
            {title}
          </span>
        ))}
      </div>

      
      <div onClick={handleViewPost}>
        {post.image && <img src={post.image} alt="Пост" className={style.image} />}
      </div>

      <p className={style.text}>{post.text}</p>

      <div className={style.actionsWrapper}>
        <div className={style.leftActions}>
          <button onClick={handleToggleLike} className={style.iconButton}>
            <LikeIcon
              fill={liked ? "#ef4444" : "none"}
              stroke={liked ? "#ef4444" : "#4b5563"}
              width="24"
              height="24"
            />
            <span className={style.iconText}>{likeCount}</span>
          </button>

          <button
            onClick={() => setCommentsVisible((prev) => !prev)}
            className={style.iconButton}
          >
            <CommentIcon width="24" height="24" />
            <span className={style.iconText}>{comments.length}</span>
          </button>

          <button onClick={handleShare} className={style.iconButton}>
            <ShareIcon width="24" height="26" />
          </button>
        </div>

        <div className={style.rightActions}>
          <button onClick={handleToggleFavorite} className={style.iconButton}>
            <BookmarkIcon
              fill={favorited ? "#facc15" : "none"}
              stroke={favorited ? "#facc15" : "#4b5563"}
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>

      {commentsVisible && comments.length > 0 && (
        <div className={style.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} className={style.commentItem}>
              <img
                src={comment.avatar_url || "/default-avatar.png"}
                alt="Avatar"
                className={style.avatar}
              />
              <div>
                <p className={style.commentAuthor}>
                  {comment.user_name || "Аноним"}
                </p>
                <p className={style.commentContent}>{comment.content}</p>
                <span className={style.commentDate}>
                  {new Date(comment.created_at).toLocaleString("ru-RU")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {commentsVisible && userId && (
        <div className={style.commentInputBlock}>
          {commentInputVisible ? (
            <div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Напишите комментарий..."
                className={style.textarea}
              />
              <button onClick={handleAddComment} className={style.sendButton}>
                Добавить комментарий
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCommentInputVisible(true)}
              className={style.sendButton}
            >
              Написать комментарий
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
