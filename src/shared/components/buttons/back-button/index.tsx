import {ButtonHTMLAttributes, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import ERouterPath from '@/shared/common/enum/router';
import BackArrowIcon from "@/shared/components/icons/back-arrow";
import {makeClassname} from "@/shared/utils/functions/classname";
import {backButtonStyles} from "@/shared/components/buttons/back-button/style.ts";

interface IBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: ERouterPath;
    label?: string;
}

const BackButton = ({
                        to = ERouterPath.MAIN_PAGE,
                        label = 'Вернуться назад',
                        className
                    }: IBackButtonProps): ReactNode => {
    const navigate = useNavigate();

    const handleNavigate = () => window.history.length > 1 ? navigate(-1) : navigate(to);

    return (
        <button onClick={handleNavigate}
                className={makeClassname(backButtonStyles.button, className)}>
            <BackArrowIcon/>
            {label}
        </button>
    );
};

export default BackButton;
