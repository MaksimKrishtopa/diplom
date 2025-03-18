import React from 'react';
import { useNavigate } from 'react-router-dom';
import ERouterPath from '@/shared/common/enum/router';
import BackArrow from '@/assets/icons/back-arrow';

interface IBackButtonProps {
  to?: ERouterPath;
  label?: string;
  className?: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ to = ERouterPath.MAIN_PAGE, label = 'Вернуться назад', className }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(to);
    }
  };

  return (
    <button onClick={handleNavigate} className={`flex items-center text-blue-500 text-sm font-medium mb-6 cursor-pointer ${className}`}>
      <BackArrow className="mr-2" />
      {label}
    </button>
  );
};

export default BackButton;
