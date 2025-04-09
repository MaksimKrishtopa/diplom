import React, { useState, useEffect, useRef } from 'react';
import Input from '@/shared/components/inputs/input';
import { style } from "@/features/posts/form/post-form/style";
import UploadIcon from '@/shared/components/icons/upload';

type CreatePostFormProps = {
  onNext: (formState: {
    text: string;
    images: File[];
    location: string;
    themes: string[];
  }) => void;
};

const availableThemes = [
  'Отдых на пляже', 'Приключения', 'Походы в горы', 'Дикая природа',
  'Культурный туризм', 'Гастрономический туризм', 'Семейный отдых',
  'Романтическое путешествие', 'Шоппинг-туризм', 'Оздоровительный туризм',
  'Европа', 'Азия', 'Африка', 'Северная Америка', 'Южная Америка',
  'Австралия', 'Антарктида'
];

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onNext }) => {
  const [text, setText] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [themes, setThemes] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    onNext({ text, images, location, themes });
  }, [text, images, location, themes]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = [...images, ...Array.from(files)];
      setImages(newImages);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const newImages = [...images, ...Array.from(files)];
      setImages(newImages);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
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
      <h2 className={style.title}>Создайте свой пост</h2>

      <div className={style.fieldWrapper}>
        <label 
          className={style.inputWrapper}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div>
            <UploadIcon width={'34px'} height={'34px'} />
          </div>
          <Input
            type="file"
            label=""
            multiple
            accept="image/jpeg, image/png"
            onChange={handleImageUpload}
            className={style.input}
            ref={inputRef}
          />
          <span className={style.inputText}>Вставьте фото</span>
        </label>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={style.primaryButton}
        >
          Выберите файл
        </button>

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
    </div>
  );
};

export default CreatePostForm;
