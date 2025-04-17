import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/components/button";
import { supabase } from "@/shared/config/supabaseClient";
import { useAuth } from "@/shared/hooks/auth";
import EditIcon from "@/shared/components/icons/create";
import PostFeed from "@/features/content-feed/form/PostFeed";

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
    <div className="flex flex-col gap-4 p-4">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button onClick={handleCreatePostClick} title="Создать пост">
          <EditIcon width="24px" height="24px" className="cursor-pointer transition-transform mr-8" />
        </button>

        {!session ? (
          <>
            <Button className="w-32 h-10" onClick={() => navigate("/login")}>
              Войти
            </Button>
            <Button className="w-36 h-10" variant="primary" onClick={() => navigate("/register")}>
              Регистрация
            </Button>
          </>
        ) : (
          <Button className="w-28 h-10" variant="primary" onClick={handleLogout}>
            Выйти
          </Button>
        )}
      </div>

      <div className="mt-20 text-center text-2xl font-bold">Добро пожаловать!</div>

      <PostFeed />
    </div>
  );
};

export default MainPage;
