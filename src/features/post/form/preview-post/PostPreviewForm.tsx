import { useEffect, useState } from "react";
import { fetchThemes } from "@/entities/repository/postRepository";
import { Theme } from "@/shared/interface/enitites/posts";
import style from "@/features/post/form/preview-post/style";

interface Props {
  formData: any;
  isLoading: boolean;
  error: string | null;
}

const PostPreviewForm = ({ formData, isLoading, error }: Props) => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    fetchThemes()
      .then((data) => setThemes(data))
      .catch(() => console.error("Ошибка загрузки тем."));
  }, []);

  if (!formData) {
    return <p className="text-center text-red-500">Нет данных для предпросмотра.</p>;
  }

  const selectedThemeTitles = formData.theme_ids?.map(
    (id: string) => themes.find((theme) => String(theme.id) === id)?.title
  ).filter(Boolean);

  return (
    <div className={style.previewCard}>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <p className={style.locationText}>{formData.location}</p>

      <div className={style.themesWrapper}>
        {selectedThemeTitles?.map((title: string, index: number) => (
          <span key={index} className={style.themeItem}>
            {title}
          </span>
        ))}
      </div>

      <p className={style.postText}>{formData.text}</p>

      <img
        src={URL.createObjectURL(formData.image)}
        alt="Preview"
        className={style.image}
      />
    </div>
  );
};

export default PostPreviewForm;
