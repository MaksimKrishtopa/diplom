import { supabase } from "@/shared/config/supabaseClient";

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    throw new Error("Неверный логин или пароль");
  }

  return data.user;
};
