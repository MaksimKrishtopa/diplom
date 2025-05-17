import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/features/auth/model/auth/loginUser";
import style from "@/features/auth/form/login/style";

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
    <form onSubmit={handleSubmit} className={style.form}>
      <h2 className={style.title}>Авторизация</h2>
      {message && <p className={style.message}>{message}</p>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className={style.input}
      />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={handleChange}
        required
        className={style.input}
      />
      <button type="submit" className={style.button}>Войти</button>
    </form>
  );
};

export default LoginForm;
