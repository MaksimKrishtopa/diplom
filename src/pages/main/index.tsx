import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/auth";
import { supabase } from "@/shared/config/supabaseClient";
import Button from "@/shared/components/button";
import EditIcon from "@/shared/components/icons/create";
import PostFeed from "@/features/content-feed/form/PostFeed";
import { Notification } from "@/features/notification/form/Notification";
import style from "@/pages/main/style";

const MainPage = () => {
  const { session, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleCreatePostClick = () => {
    if (session) {
      navigate("/create-post");
    } else {
      navigate("/login");
    }
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={style.wrapper}>
      <div className={style.topRightControls}>
        <Notification />
        {session && (
          <button onClick={handleCreatePostClick} title="Создать пост">
            <EditIcon width="24px" height="24px" className={style.editIconButton} />
          </button>
        )}
        {!session ? (
          <>
            <Button className={style.buttonLogin} onClick={() => navigate("/login")}>
              Войти
            </Button>
            <Button className={style.buttonRegister} variant="primary" onClick={() => navigate("/register")}>
              Регистрация
            </Button>
          </>
        ) : (
          <Button className={style.buttonLogout} variant="primary" onClick={handleLogout}>
            Выйти
          </Button>
        )}
      </div>

      <PostFeed />
    </div>
  );
};

export default MainPage;