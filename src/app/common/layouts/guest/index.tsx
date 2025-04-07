import {ReactNode} from 'react';
import {Outlet} from "react-router-dom";
import {guestLayoutStyles} from "@/app/common/layouts/guest/style.ts";


const GuestLayout = (): ReactNode => {
    return (
        <div className={guestLayoutStyles.background}>
            <div className={guestLayoutStyles.container}>
                <img src={'/images/guest-bg.png'} alt="Recovery-bg" className={guestLayoutStyles.image}/>
                <div className={guestLayoutStyles.contentContainer}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default GuestLayout;