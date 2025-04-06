import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { style } from '@/features/posts/form//post-preview/style';
import useUserInfoPresenter from "@/entities/case/user/personal-acoount/get-info/presenter";
import { BACKEND_IMAGE_URL } from "@/shared/api/backend-image.ts";
import avatarUserDefault from "@/assets/avatar.png";
import Button from '@/shared/components/button';

const PostPreview: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { text, images, location, themes } = state ?? {};

  const { data } = useUserInfoPresenter();

  return (
    <div className={style.wrapper}>
      <h2 className={style.subtitle}>Отображение в ленте</h2>

      <div className={style.containerUser}>
        <img
          src={data?.user_image ? `${BACKEND_IMAGE_URL + data.user_image}` : avatarUserDefault}
          className={style.avatarUser}
          alt="avatar"
        />
        <div className={style.containerUserInfo}>
          <p>{data?.user_name ?? 'User'}</p>
        </div>
      </div>

      <div className={style.imagePreviewList}>
        {images.map((img: File, idx: number) => (
          <img
            key={idx}
            src={URL.createObjectURL(img)}
            alt={`preview-${idx}`}
            className={style.imagePreview}
          />
        ))}
      </div>

      {text && <p className={style.previewText}>{text}</p>}

      {location && (
        <p className={style.previewLocation}><strong>Локация:</strong> {location}</p>
      )}

      {themes?.length > 0 && (
        <div className={style.previewThemes}>
          <strong>Темы:</strong>
          <ul className={style.previewThemeList}>
            {themes.map((t: string) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={style.footerButtons}>
        <Button type="button" className={style.primaryButton} onClick={() => navigate(-1)}>
          Назад
        </Button>
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
