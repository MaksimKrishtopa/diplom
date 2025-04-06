import React, { useState } from 'react';
import Button from '@/shared/components/button';
import Input from '@/shared/components/inputs/input';
import { style } from '@/features/posts/form/post-form/style';

const CreatePostForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'preview'>('form');

  const [text, setText] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [themes, setThemes] = useState<string[]>([]);

  const availableThemes = [
    'Отдых на пляже', 'Приключения', 'Походы в горы', 'Дикая природа',
    'Культурный туризм', 'Гастрономический туризм', 'Семейный отдых',
    'Романтическое путешествие', 'Шоппинг-туризм', 'Оздоровительный туризм',
    'Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка',
    'Австралия', 'Антарктида'
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages([...images, ...Array.from(files)]);
    }
  };

  const handleThemeSelection = (theme: string) => {
    setThemes((prevThemes) =>
      prevThemes.includes(theme)
        ? prevThemes.filter(t => t !== theme)
        : prevThemes.length < 5
          ? [...prevThemes, theme]
          : prevThemes
    );
  };

  return (
    <div className={style.wrapper}>
      {step === 'form' && (
        <>
          <h2 className={style.title}>Создайте свой пост</h2>

          <div className={style.fieldWrapper}>
            <Input
              type="file"
              label="Изображение *"
              multiple
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              className={style.input}
            />
            {images.length === 0 && (
              <p className={style.error}>Добавьте изображение или видео</p>
            )}
            {images.length > 0 && (
              <ul className={style.imageList}>
                {images.map((img, idx) => (
                  <li key={idx} className={style.imageName}>{img.name}</li>
                ))}
              </ul>
            )}
          </div>

          <textarea
            className={style.textarea}
            placeholder="Напишите что-нибудь"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Input
            type="text"
            label="Геопозиция"
            placeholder="Например, Париж"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={style.input}
          />

          <div className={style.themeWrapper}>
            <label className={style.themeLabel}>Темы:</label>
            <div className={style.themeList}>
              {availableThemes.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  className={`${style.themeButton} ${themes.includes(theme) ? style.themeButtonSelected : ''}`}
                  onClick={() => handleThemeSelection(theme)}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div className={style.footerButtons}>
            <div onClick={() => images.length > 0 && setStep('preview')}>
              <Button type="button" className={style.primaryButton}>
                Далее
              </Button>
            </div>
          </div>
        </>
      )}

      {step === 'preview' && (
        <>

          <h2 className={style.subtitle}>Отображение в ленте</h2>
          <div className={style.containerAvatarStyles}>
                            <img
                                src={user_image ? `${BACKEND_IMAGE_URL + user_image}` : avatarUserDefault}
                                alt="Аватар пользователя"
                                className={style.avatarStyles}
                            />
                        </div>
          <div onClick={() => setStep('form')}>
              <Button type="button" className={style.primaryButton}>
                Назад
              </Button>
            </div>

          <div className={style.imagePreviewList}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt={`preview-${idx}`}
                className={style.imagePreview}
                // размеры!!!!
              />
            ))}
          </div>

          {text && <p className={style.previewText}>{text}</p>}

          {location && (
            <p className={style.previewLocation}><strong>Локация:</strong> {location}</p>
          )}

          {themes.length > 0 && (
            <div className={style.previewThemes}>
              <strong>Темы:</strong>
              <ul className={style.previewThemeList}>
                {themes.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
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
        </>
      )}
    </div>
  );
};

export default CreatePostForm;
