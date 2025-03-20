import {ReactNode} from 'react';
import {logoContainerStyles} from "@/widget/logo-login/style.ts";
import Logo from "@/shared/components/icons/logo";


const LogoForm = (): ReactNode => {
    return (
        <div className={logoContainerStyles.container}>
            <Logo width={'50px'} height={'50px'}/>
            <h4 className={logoContainerStyles.paragraph}>
                Вход в систему
            </h4>
        </div>
    );
};

export default LogoForm;