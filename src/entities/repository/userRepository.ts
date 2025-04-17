import { supabase } from "@/shared/config/supabaseClient";

export const getUserById = async (userId: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, user_name")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
};
