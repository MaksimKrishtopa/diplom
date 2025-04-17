import { useLocation } from "react-router-dom";
import PostPreviewForm from "@/features/post/form/preview-post/PostPreviewForm";
import { useCreatePost } from "@/features/post/model/preview-post/useCreatePost";
import Button from "@/shared/components/button";
import style from "@/pages/post-preview/style";

const PreviewPostPage = () => {
  const location = useLocation();
  const formData = location.state;

  const { handlePostSubmit, isLoading, error } = useCreatePost(formData);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Создать публикацию</h2>

      <div className={style.headerInfoWrapper}>
        <p className={style.subtitle}>Пост (текст и изображение/видео)</p>
        <h3 className={style.sectionTitle}>Пост</h3>
      </div>

      <div className={style.divider} />

      <PostPreviewForm formData={formData} isLoading={isLoading} error={error} />

      <div className={style.buttonWrapper}>
        <Button
          className="w-28 h-10"
          onClick={() => window.history.back()}
          variant="primary"
          disabled={isLoading}
        >
          Назад
        </Button>
        <Button
          onClick={() => handlePostSubmit("draft")}
          variant="secondary"
          disabled={isLoading}
        >
          В черновики
        </Button>
        <Button
          onClick={() => handlePostSubmit("moderation")}
          variant="primary"
          disabled={isLoading}
        >
          На модерацию
        </Button>
      </div>
    </div>
  );
};

export default PreviewPostPage;
