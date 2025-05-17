import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/features/auth/model/auth/registerUser";
import { IMaskInput } from "react-imask";
import style from "@/features/auth/form/registration/style";

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
    <form onSubmit={handleSubmit} className={style.form}>
      <h2 className={style.title}>Регистрация</h2>
      {message && <p className={style.message}>{message}</p>}
      <input
        name="real_name"
        placeholder="ФИО"
        onChange={handleChange}
        required
        className={style.input}
      />
      <input
        name="user_name"
        placeholder="Логин"
        onChange={handleChange}
        required
        className={style.input}
      />
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
      <IMaskInput
        mask="00.00.0000"
        placeholder="Дата рождения (дд.мм.гггг)"
        value={form.birth_date}
        onAccept={(value: string) => setForm((prev) => ({ ...prev, birth_date: value }))}
        name="birth_date"
        required
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
