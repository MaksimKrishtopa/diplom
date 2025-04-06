import React from 'react';
import CreatePostForm from '@/features/posts/form/post-form';
import { style } from '@/pages/posts/create-post/style';

const CreatePostPage: React.FC = () => (
  <div className={style.page}>
    <h2 className={style.title}>Создать публикацию</h2>
    <div className={style.formWrapper}>
      <CreatePostForm />
    </div>
  </div>
);

export default CreatePostPage;
