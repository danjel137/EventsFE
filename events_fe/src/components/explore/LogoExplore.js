import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const LogoExplore = () => {
    return (
        <div className="logo">
            <FontAwesomeIcon icon={faCompass} size="2x" /> Explore
        </div>
    );
};

export default LogoExplore;