import React from 'react';
import backgroundShapes from '@/assets/backgroundShapes.png'
import {backgroundSectionStyles} from "@/widget/background-login/style.ts";


const BackgroundLogin:React.FC = () => {
    return (
        <div className={backgroundSectionStyles()}>
            <img className="w-[408px] h-[622px] rounded-2xl object-cover bg-cover bg-[center_top] bg-no-repeat" src={backgroundShapes} alt="фон"/>
        </div>
    );
};

export default BackgroundLogin;