import {ReactNode, useEffect} from 'react';
import {recoveryPagesStyles} from "@/pages/recovery/style.ts";
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

const RecoverySuccessPage = (): ReactNode => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(ERouterPath.MAIN_PAGE)
        }, 10000)
    }, []);

    return (
        <div className={recoveryPagesStyles.successPageContainer}>
            <CompassTrailTalesIcon/>
            <h1 className={recoveryPagesStyles.title}>Пароль успешно изменён!</h1>
        </div>
    );
};

export default RecoverySuccessPage;
