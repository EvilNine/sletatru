import React from "react";
import HeaderAuth from "./HeaderAuth";
import HeaderPhone from "./HeaderPhone";
import './header.scss';

const HeaderColRight = () => {
    return (
        <div className="header__col-right">
            <HeaderPhone />
            <HeaderAuth />
        </div>
    )
}

export default HeaderColRight;