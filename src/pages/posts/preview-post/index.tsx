import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PostPreview from '@/features/posts/form/post-preview';
import Button from '@/shared/components/button';
import { style } from '@/pages/posts/create-post/style';

const PreviewPostPage: React.FC = () => {
  const location = useLocation();
  const formState = location.state;

  return (
    <div className={style.page}>
      <h2 className={style.title}>Создание публикации</h2>

      <div className={style.tabsContainer}>
        <h3 className={style.tabContent}>Пост (текст и изображение/видео)</h3>
        <h3 className={style.activeTab}>Пост</h3>
      </div>

      <div className={style.formWrapper}>
        <PostPreview data={formState} />
      </div>

    </div>
  );
};

export default PreviewPostPage;