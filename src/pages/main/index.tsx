import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/components/button";
import { supabase } from "@/shared/config/supabaseClient";
import { useAuth } from "@/shared/hooks/auth";

const MainPage = () => {
  const { session, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="absolute top-4 right-4 flex gap-2">
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
    </div>
  );
};

export default MainPage;
