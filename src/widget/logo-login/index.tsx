import {ReactNode} from 'react';
import logo from '@/assets/logo.svg'
import {logoContainerStyles, paragraphStyles} from "@/widget/logo-login/style.ts";


const LogoForm = (): ReactNode => {
    return (
        <div className={logoContainerStyles()}>
            <img alt="фон" src={logo}></img>
            <h4 className={paragraphStyles()}>
                Вход в систему
            </h4>
        </div>
    );
};

export default LogoForm;