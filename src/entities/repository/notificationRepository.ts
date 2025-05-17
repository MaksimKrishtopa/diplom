import { supabase } from "@/shared/config/supabaseClient";
import { Notification } from "@/shared/interface/enitites/notifications";

export const getNotifications = async (userId: string): Promise<Notification[]> => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
};

export const markAsRead = async (id: string) => {
  const { error } = await supabase
    .from("notifications")
    .update({ is_read: true })
    .eq("id", id);
  if (error) throw new Error(error.message);
};

export const deleteNotification = async (id: string) => {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
};
