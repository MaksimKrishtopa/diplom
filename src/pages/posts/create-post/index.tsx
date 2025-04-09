import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePostForm from '@/features/posts/form/post-form';
import { style } from '@/pages/posts/create-post/style';
import Button from '@/shared/components/button'

const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<{
    text: string;
    images: File[];
    location: string;
    themes: string[];
  }>({
    text: '',
    images: [],
    location: '',
    themes: [],
  });

  const handleNext = () => {
    if (formState.images.length === 0) {
      return;
    }

    navigate('/preview-post', {
      state: formState,
    });
  };

  return (
    <div className={style.page}>
      <h2 className={style.title}>Создать публикацию</h2>

      <div className={style.tabsContainer}>
        <h3 className={style.tabContent}>Пост (текст и изображение/видео)</h3>
        <h3 className={style.activeTab}>Пост</h3>
      </div>

      <div className={style.formWrapper}>
        <CreatePostForm onNext={setFormState} />
      </div>

      <div className={style.footerButtons} onClick={handleNext}>
        <Button type="submit" className={style.primaryButton}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default CreatePostPage;