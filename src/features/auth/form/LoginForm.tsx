import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/features/auth/model/auth/loginUser";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      const user = await loginUser(form.email, form.password);
      setMessage(`Добро пожаловать!`);
      navigate("/");
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      {message && <p>{message}</p>}
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} required />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
