import {Link} from "react-router-dom";
import {useState} from "react";
import ERouterPath from "@/shared/common/enum/router";

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    return (
        <div className=" ">
            <button
                type="button"
                onClick={toggleMenu}
                className="p-2 text-white rounded z-10"
            >=
            </button>

            {isMenuVisible && (
                <nav className="h-screen w-[194px] p-4 overflow-y-auto bg-blue">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="p-2 text-white rounded"
                    >=
                    </button>
                    <ul className="">
                        <li>
                            <Link
                                to={ERouterPath.HOME_PAGE}
                                className="">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ERouterPath.HOME_PAGE}
                                className="">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ERouterPath.HOME_PAGE}
                                className="">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Menu;