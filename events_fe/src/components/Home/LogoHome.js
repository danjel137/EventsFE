
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Home from "./Home";

const LogoHome = () => {
    return (
        <div className="logo">
            <FontAwesomeIcon icon={faHome} size="2x" /> Home
        </div>
    );
};

export default LogoHome;