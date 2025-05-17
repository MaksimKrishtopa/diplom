import { supabase } from "@/shared/config/supabaseClient";

const convertDateToISO = (dateStr: string): string => {
  const [day, month, year] = dateStr.split(".");
  return `${year}-${month}-${day}`;
};

export const registerUser = async (userData: {
  email: string;
  password: string;
  user_name: string;
  real_name: string;
  birth_date: string;
}) => {
  const { email, password, user_name, real_name, birth_date } = userData;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const user = data.user;
  if (!user) throw new Error("Ошибка регистрации");

  // Конвертируем дату в ISO перед вставкой
  const birthDateISO = convertDateToISO(birth_date);

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: user.id,
      email,
      user_name,
      real_name,
      birth_date: birthDateISO, // тут ISO формат
      password,
    },
  ]);

  if (insertError) throw new Error(insertError.message);
};