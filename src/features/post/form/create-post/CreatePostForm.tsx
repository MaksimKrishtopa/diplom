import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "@/features/post/form/create-post/style";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useCreatePostForm } from "@/features/post/model/create-post/useCreatePostForm";
import UploadIcon from "@/shared/components/icons/upload";
import Input from "@/shared/components/inputs/input";
import Button from "@/shared/components/button";

const CreatePostForm = forwardRef(({ userId }: { userId: string }, ref) => {
  const {
    form,
    themes,
    error,
    isThemeDropdownOpen,
    handleChange,
    handleFileChange,
    handleThemeSelect,
    setIsThemeDropdownOpen,
  } = useCreatePostForm();

  const navigate = useNavigate();

  const handlePreview = async () => {
    if (!form.image) {
      alert("Изображение обязательно для загрузки.");
      return;
    }

    navigate("/preview-post", {
      state: {
        ...form,
        userId,
      },
    });
  };

  useImperativeHandle(ref, () => ({
    submit: handlePreview,
  }));

  return (
    <form className={style.formWrapper}>
      {error && <p className={style.errorText}>{error}</p>}

      <textarea
        name="text"
        placeholder="Текст поста"
        onChange={handleChange}
        className={style.textarea}
        rows={4}
      />

      <div className={style.fileUploadWrapper}>
        <div className={style.fileLabel}>
          <UploadIcon width="34" height="34" className={style.uploadIcon} />
          <span className={style.uploadText}>Изображение не выбрано</span>
        </div>

        <Input
          type="file"
          label=""
          onChange={handleFileChange}
          required
          className={style.hiddenFileInput}
          id="fileInput"
        />

        <Button
          type="button"
          variant="primary"
          onClick={() => document.getElementById("fileInput")?.click()}
          className={style.fileInput}
        >
          Добавить изображение
        </Button>
      </div>

      <div className={style.locationThemeWrapper}>
        <Input
          name="location"
          label=""
          placeholder="Локация"
          onChange={handleChange}
          className={style.locationInput}
        />

        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            className={`${style.themeSelect} flex justify-between items-center w-full`}
          >
            <span>
              {form.theme_ids.length > 0
                ? `Выбрано тем: ${form.theme_ids.length}`
                : "Выберите темы"}
            </span>
            {isThemeDropdownOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {isThemeDropdownOpen && (
              <div className={style.themeDropdown}>
                <p className={style.themeDropdownTitle}>Выберите до 5 тем:</p>
                {themes.map((theme) => (
                  <label key={theme.id} className={style.themeItemLabel}>
                    <Input
                      label=""
                      type="checkbox"
                      value={String(theme.id)}  
                      checked={form.theme_ids.includes(String(theme.id))}  
                      onChange={(e) => handleThemeSelect(e, String(theme.id))} 
                      className={style.themeItemCheckbox}
                    />
                    <span>{theme.title}</span>
                  </label>
                ))}
              </div>
            )}
        </div>
      </div>
    </form>
  );
});

export default CreatePostForm;
