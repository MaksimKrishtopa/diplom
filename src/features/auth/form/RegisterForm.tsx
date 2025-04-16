import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/features/auth/model/auth/registerUser";

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    user_name: "",
    real_name: "",
    birth_date: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      await registerUser(form);
      setMessage("Успешно зарегистрировано!");
      navigate("/");
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      {message && <p>{message}</p>}
      <input name="real_name" placeholder="Имя" onChange={handleChange} required />
      <input name="user_name" placeholder="Никнейм" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} required />
      <input name="birth_date" type="date" onChange={handleChange} required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
