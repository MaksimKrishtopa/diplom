import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { style } from '@/features/posts/form/post-preview/style';
import useUserInfoPresenter from "@/entities/case/user/personal-acoount/get-info/presenter";
import { BACKEND_IMAGE_URL } from "@/shared/api/backend-image.ts";
import avatarUserDefault from "@/assets/avatar.png";
import Button from '@/shared/components/button';

const PostPreview: React.FC<{ data: { text: string; images: File[]; location: string; themes: string[] } }> = ({ data }) => {
  const { text, images, location, themes } = data;

  return (
    <div className={style.wrapper}>
      <h2 className={style.subtitle}>Отображение в ленте</h2>
      
      <Button type="button" className={style.primaryButton}>
        Назад
      </Button>

      <div className={style.containerUser}>
        <img src={avatarUserDefault} className={style.avatarUser} alt="avatar" />
        <div className={style.containerUserInfo}>
          <p>User</p>
        </div>
      </div>

      <div className={style.imagePreviewList}>
        {images && images.length > 0 ? (
          images.map((img: File, idx: number) => (
            <img key={idx} src={URL.createObjectURL(img)} alt={`preview-${idx}`} className={style.imagePreview} />
          ))
        ) : (
          <p>Нет изображений для отображения</p>
        )}
      </div>

      {text && <p className={style.previewText}>{text}</p>}

      {location && (
        <p className={style.previewLocation}><strong>Локация:</strong> {location}</p>
      )}

      {themes?.length > 0 && (
        <div className={style.themeWrapper}>
          <label className={style.themeLabel}>Темы:</label>
          <div className={style.themeList}>
            {themes.map((t: string) => (
              <button key={t} type="button" className={`${style.themeButton} ${style.themeButtonSelected}`} disabled>
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={style.footerButtons}>
        <Button type="button" className={style.moderationButton}>
          На модерацию
        </Button>
        <Button type="button" className={style.draftButton}>
          В черновик
        </Button>
      </div>
    </div>
  );
};

export default PostPreview;