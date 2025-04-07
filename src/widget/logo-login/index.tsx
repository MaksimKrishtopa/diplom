import {ReactNode} from 'react';
import {logoContainerStyles} from "@/widget/logo-login/style.ts";
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";


const LogoForm = (): ReactNode => {
    return (
        <div className={logoContainerStyles.container}>
            <CompassTrailTalesIcon/>
            <h4 className={logoContainerStyles.paragraph}>
                Вход в систему
            </h4>
        </div>
    );
};

export default LogoForm;