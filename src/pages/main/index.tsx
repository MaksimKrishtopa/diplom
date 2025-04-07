import {ReactNode} from 'react';
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";

const MainPage = (): ReactNode => {
    return (
        <div className="flex flex-col">
            <CompassTrailTalesIcon/>
            <h1 className="text-title font-bold">Hello!</h1>
        </div>
    );
};

export default MainPage;
