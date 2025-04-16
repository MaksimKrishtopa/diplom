import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost, fetchThemes } from "@/entities/repository/postRepository";
import { Theme } from "@/shared/interface/enitites/posts";
import { supabase } from "@/shared/config/supabaseClient";

const CreatePostForm = ({ userId }: { userId: string }) => {
  const [form, setForm] = useState({
    text: "",
    location: "",
    status: "draft",
    theme_id: "",
    image: null as File | null,
  });

  const [themes, setThemes] = useState<Theme[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchThemes()
      .then((data) => setThemes(data))
      .catch(() => setError("Ошибка загрузки тем."));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.image) {
      setError("Изображение обязательно для загрузки.");
      return;
    }

    let imageUrl = "";
    const { data, error: uploadError } = await supabase.storage
      .from("posts-images")
      .upload(`post-${Date.now()}-${form.image.name}`, form.image);

    if (uploadError) {
      setError(uploadError.message);
      return;
    }

    imageUrl = supabase.storage
      .from("posts-images")
      .getPublicUrl(data.path).data.publicUrl;

    try {
      await createPost({
        creator_id: userId,
        text: form.text || null,
        location: form.location || null,
        status: form.status as "draft" | "moderation",
        theme_id: form.theme_id || null,
        image: imageUrl,
        created_at: new Date().toISOString(),
      });

      navigate("/");
    } catch (err) {
      setError("Ошибка при создании поста.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Создать пост</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input
        name="text"
        placeholder="Текст поста (необязательно)"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Локация (необязательно)"
        onChange={handleChange}
      />

      <select name="status" onChange={handleChange} required>
        <option value="draft">Черновик</option>
        <option value="moderation">На модерации</option>
      </select>

      <select name="theme_id" onChange={handleChange}>
        <option value="">Выберите тему (необязательно)</option>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.title}
          </option>
        ))}
      </select>

      <input type="file" onChange={handleFileChange} required />

      <button type="submit">Создать пост</button>
    </form>
  );
};

export default CreatePostForm;
