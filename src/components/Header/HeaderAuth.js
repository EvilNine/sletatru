import React from "react";
import './header.scss';

const HeaderAuth = () => {
    return (
        <button className="header__btn-auth">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.0417H2.66671V9.20834H8.16671V2.79168H2.66671V0.958344H10V11.0417ZM4.50004 4.16668V5.08334H0.833374V6.91668H4.50004V7.83334L7.25004 6.00001L4.50004 4.16668Z" fill="#F7A813"/>
            </svg>
            Войти
        </button>

    )
}

export default HeaderAuth;