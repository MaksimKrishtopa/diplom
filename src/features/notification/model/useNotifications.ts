import { useEffect, useState } from "react";
import { getNotifications, markAsRead, deleteNotification } from "@/entities/repository/notificationRepository";
import { Notification } from "@/shared/interface/enitites/notifications";

export const useNotifications = (userId?: string) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(false);
  
    const fetchNotifications = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const data = await getNotifications(userId);
        setNotifications(data);
      } catch (error) {
        console.error("Ошибка загрузки уведомлений:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchNotifications();
    }, [userId]);
  
    const handleMarkAsRead = async (id: string) => {
      await markAsRead(id);
      fetchNotifications();
    };
  
    const handleDelete = async (id: string) => {
      await deleteNotification(id);
      fetchNotifications();
    };
  
    return {
      notifications,
      loading,
      handleMarkAsRead,
      handleDelete,
    };
  };
  
