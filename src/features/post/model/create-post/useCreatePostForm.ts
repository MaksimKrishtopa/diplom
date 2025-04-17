import { useState, useEffect } from "react";
import { fetchThemes } from "@/entities/repository/postRepository";
import { Theme } from "@/shared/interface/enitites/posts";

export const useCreatePostForm = () => {
  const [form, setForm] = useState({
    text: "",
    location: "",
    theme_ids: [] as string[],
    image: null as File | null,
  });
  
  const [themes, setThemes] = useState<Theme[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  useEffect(() => {
    fetchThemes()
      .then((data) => setThemes(data))
      .catch(() => setError("Ошибка загрузки тем."));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "theme_ids") {
      const selectElement = e.target as HTMLSelectElement;
      const selectedThemes = Array.from(
        selectElement.selectedOptions,
        (option) => option.value
      );
      setForm((prev) => ({ ...prev, theme_ids: selectedThemes }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleThemeSelect = (e: React.ChangeEvent<HTMLInputElement>, themeId: string) => {
    const isChecked = e.target.checked;
    setForm((prevForm) => {
      const selectedThemes = prevForm.theme_ids;

      if (isChecked) {
        if (selectedThemes.length >= 5) return prevForm;
        return {
          ...prevForm,
          theme_ids: [...selectedThemes, themeId],
        };
      } else {
        return {
          ...prevForm,
          theme_ids: selectedThemes.filter((id) => id !== themeId),
        };
      }
    });
  };

  return {
    form,
    themes,
    error,
    isThemeDropdownOpen,
    handleChange,
    handleFileChange,
    handleThemeSelect,
    setIsThemeDropdownOpen,
  };
};
