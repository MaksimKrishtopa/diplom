import {ReactNode} from 'react';
import {background} from "@/widget/background-login/style.ts";


const BackgroundLogin = (): ReactNode => {
    return (
        <div className={background.backgroundSectionStyles}>
            <img className={background.sizeBackgroundStyles}
                 src={'/images/guest-bg.png'} alt="фон"/>
        </div>
    );
};

export default BackgroundLogin;