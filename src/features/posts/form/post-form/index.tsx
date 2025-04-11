import { useState } from "react";
import Input from "@/shared/components/inputs/input";
import ErrorMessage from "@/shared/components/error-message";
import useCreatePostPresenter from "@/entities/case/post/create/presenter";

interface CreatePostFormProps {
  onNext: React.Dispatch<React.SetStateAction<{
    text: string;
    images: File[];
    location: string;
    themes: string[];
  }>>;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onNext }) => {
  const {
    register, handleSubmit, errors, onSubmit, themes, isThemesLoading, setValue
  } = useCreatePostPresenter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<number[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file);
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTheme(selected.map(Number));
    setValue("theme_ids", selected.map(Number));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label>Изображение (обязательно)</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <ErrorMessage message={errors.image?.message} />
        {imagePreview && (
          <div style={{ marginTop: "10px" }}>
            <img src={imagePreview} alt="Предпросмотр" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        )}
      </div>

      <div>
        <Input
          label="Текст поста"
          placeholder="Введите текст"
          {...register("text")}
        />
        <ErrorMessage message={errors.text?.message} />
      </div>

      <div>
        <Input
          label="Местоположение"
          placeholder="Введите место"
          {...register("location")}
        />
        <ErrorMessage message={errors.location?.message} />
      </div>

      <div>
    <label>Темы (не более 5):</label>
    {isThemesLoading ? (
        <p>Загрузка тем...</p>
    ) : (
        <select
        multiple
        value={selectedTheme.map(String)}
        onChange={(e) => {
            const options = Array.from(e.target.selectedOptions).map(o => Number(o.value));
            if (options.length <= 5) {
            setSelectedTheme(options);
            setValue("theme_ids", options);
            }
        }}
        >
        {themes?.map((theme) => (
            <option key={theme.id} value={theme.id}>
            {theme.title}
            </option>
        ))}
        </select>
    )}
    <ErrorMessage message={errors.theme_ids?.message} />
    </div>
    </form>
  );
};

export default CreatePostForm;
