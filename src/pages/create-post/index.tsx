import { useRef } from "react";
import CreatePostForm from "@/features/post/form/create-post/CreatePostForm";
import { useAuth } from "@/shared/hooks/auth";
import { Navigate } from "react-router-dom";
import Button from "@/shared/components/button";
import style from "./style";

const CreatePostPage = () => {
  const { session, isLoading } = useAuth();
  const formRef = useRef<{ submit: () => void }>(null);

  if (isLoading) return <div>Загрузка...</div>;
  if (!session) return <Navigate to="/login" />;

  const handleNextClick = () => {
    formRef.current?.submit();
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Создать публикацию</h2>

      <div className={style.headerInfoWrapper}>
        <p className={style.subtitle}>Пост (текст и изображение/видео)</p>
        <h3 className={style.sectionTitle}>Пост</h3>
      </div>

      <div className={style.divider} />

      <CreatePostForm ref={formRef} userId={session.user.id} />

      <div className={style.buttonWrapper}>
        <Button className="w-28 h-10" variant="primary" onClick={handleNextClick}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default CreatePostPage;
