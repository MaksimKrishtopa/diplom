import React, { useState } from 'react';
import Input from '@/shared/components/inputs/input';
import Button from '@/shared/components/button';
import { useNavigate } from 'react-router-dom';
import {style} from "@/features/posts/form/post-form/style";

const availableThemes = [
  'Отдых на пляже', 'Приключения', 'Походы в горы', 'Дикая природа',
  'Культурный туризм', 'Гастрономический туризм', 'Семейный отдых',
  'Романтическое путешествие', 'Шоппинг-туризм', 'Оздоровительный туризм',
  'Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка',
  'Австралия', 'Антарктида'
];

const CreatePostForm: React.FC = () => {
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [themes, setThemes] = useState<string[]>([]);

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

  const handleNext = () => {
    if (images.length === 0) return;
    navigate('/posts/preview', {
      state: {
        text,
        images,
        location,
        themes,
      }
    });
  };

  return (
    <div className={style.wrapper}>
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
        <Button type="button" className={style.primaryButton} onClick={handleNext}>
          Далее
        </Button>
      </div>
    </div>
  );
};

export default CreatePostForm;
