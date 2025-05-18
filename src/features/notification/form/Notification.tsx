import { useNotifications } from "@/features/notification/model/useNotifications";
import { useAuth } from "@/shared/hooks/auth";
import { useState } from "react";
import BellIcon from "@/shared/components/icons/notifications";
import style from "@/features/notification/form/style";

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
    <div className={style.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={style.button}>
        <BellIcon width="24px" height="24px" />
        {notifications.some(n => !n.is_read) && (
          <span className={style.unreadDot} />
        )}
      </button>

      {isOpen && (
        <div className={style.dropdown}>
          {loading ? (
            <p className={style.statusMessage}>Загрузка уведомлений...</p>
          ) : notifications.length === 0 ? (
            <p className={style.statusMessage}>Нет уведомлений</p>
          ) : (
            <ul>
              {notifications.map(n => (
                <li key={n.id} className={style.notificationItem}>
                  <p>{n.content}</p>
                  <div className={style.actions}>
                    {!n.is_read && (
                      <button
                        onClick={() => handleMarkAsRead(n.id)}
                        className={style.markRead}
                      >
                        Пометить как прочитанное
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(n.id)}
                      className={style.delete}
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
