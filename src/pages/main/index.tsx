import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold underline">Hello!</h1>
            <Link to="/recovery" className="text-[#5687BB] text-[16px] font-[400]">
                Забыли пароль?
            </Link>
        </div>
    );
};

export default MainPage;
