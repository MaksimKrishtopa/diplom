import {ReactNode} from 'react';
import backgroundShapes from '@/assets/backgroundShapes.png'
import {background} from "@/widget/background-login/style.ts";


const BackgroundLogin = (): ReactNode => {
    return (
        <div className={background.backgroundSectionStyles}>
            <img className={background.sizeBackgroundStyles}
                 src={backgroundShapes} alt="фон"/>
        </div>
    );
};

export default BackgroundLogin;