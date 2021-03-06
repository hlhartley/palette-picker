import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="Header">
            <div className="title-container">
                <FontAwesomeIcon icon={faFire} className="fire-icon"/>
                <h1 className="title">pa<span className="title-em">Lit</span></h1>
            </div>
        </header>
    )
}

export default Header;