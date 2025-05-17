import { useNotifications } from "@/features/notification/model/useNotifications";
import { useAuth } from "@/shared/hooks/auth";
import { useState } from "react";
import BellIcon from "@/shared/components/icons/notifications";

export const Notification = () => {
  const { session, isLoading: authLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const userId = session?.user.id;

  const {
    notifications,
    loading,
    handleMarkAsRead,
    handleDelete
  } = useNotifications(userId);

  if (authLoading || !userId) return null;

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative pt-1 cursor-pointer">
        <BellIcon width="24px" height="24px" />
        {notifications.some(n => !n.is_read) && (
          <span className="absolute top-0 right-0 bg-blue-500 w-2 h-2 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded">
          {loading ? (
            <p className="p-2 text-sm text-gray-500">Загрузка уведомлений...</p>
          ) : notifications.length === 0 ? (
            <p className="p-2 text-sm text-gray-500">Нет уведомлений</p>
          ) : (
            <ul>
              {notifications.map(n => (
                <li key={n.id} className="p-2 text-sm">
                  <p>{n.content}</p>
                  <div className="flex justify-between mt-1">
                    {!n.is_read && (
                      <button
                        onClick={() => handleMarkAsRead(n.id)}
                        className="text-blue-500 text-xs cursor-pointer"
                      >
                        Пометить как прочитанное
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(n.id)}
                      className="text-red-500 text-xs cursor-pointer"
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
