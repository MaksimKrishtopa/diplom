import React from 'react';
import CreatePostForm from '@/features/posts/form/post-form';
import { style } from '@/pages/posts/style';

const CreatePostPage: React.FC = () => {
  return (
    <div className={style.containerStyles}>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
