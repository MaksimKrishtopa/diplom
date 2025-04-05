import React, { useState } from 'react';
import Button from '@/shared/components/button';
import Input from '@/shared/components/inputs/input';
import { style } from '@/features/posts/form/post-form/style';

const CreatePostForm: React.FC = () => {
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
    <div className={style.containerStyles}>
      <h2>Создать пост</h2>

      <Input
        type="file"
        label="Изображения *"
        multiple
        accept="image/jpeg, image/png"
        onChange={handleImageUpload}
        className={style.imageUploadContainerStyles}
      />
      {images.length === 0 && (
        <p className={style.errorMessageStyles}>Добавьте хотя бы одно изображение</p>
      )}
      {images.length > 0 && (
        <ul className="mb-4">
          {images.map((img, idx) => (
            <li key={idx} className="text-sm">{img.name}</li>
          ))}
        </ul>
      )}

      <textarea
        className={style.textAreaStyles}
        placeholder="Напишите что-нибудь"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Input
        type="text"
        label="Локация"
        placeholder="Например, Бали"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={style.inputFieldStyles}
      />

      <div className={style.themeSelectorStyles}>
        <label className="block font-semibold mb-2">Темы (до 5):</label>
        <div className="flex flex-wrap gap-2">
          {availableThemes.map((theme) => (
            <button
              key={theme}
              type="button"
              className={`${style.themeButtonStyles} ${themes.includes(theme) ? 'bg-blue-300' : ''}`}
              onClick={() => handleThemeSelection(theme)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className={style.finalButtonsContainer}>
        <Button
          type="submit"
          className={style.moderationButtonStyles}
        >
          На модерацию
        </Button>
        <Button
          type="submit"
          className={style.draftButtonStyles}
        >
          В черновик
        </Button>
      </div>
    </div>
  );
};

export default CreatePostForm;
