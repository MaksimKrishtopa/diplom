import { supabase } from "@/shared/config/supabaseClient";

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

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: user.id,
      email,
      user_name,
      real_name,
      birth_date,
      password
    },
  ]);

  if (insertError) throw new Error(insertError.message);
};
