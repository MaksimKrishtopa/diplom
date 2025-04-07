import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import ERouterPath from '@/shared/common/enum/router';

const MainPage = (): ReactNode => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <h1 className="text-title font-bold">Hello!</h1>
      <button
        onClick={() => navigate(ERouterPath.RECOVERY)}
        className="text-primary text-[14px] font-normal cursor-pointer"
      >
        Забыли пароль?
      </button>
    </div>
  );
};

export default MainPage;
