import React from 'react';
import {Link} from "react-router-dom";
import profilePicture from "../../util/profilePicture.png"
import  "./UserProfile.css"

const UserProfile = () => {
    return (
        <header className="header">
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="profile-photo"
                    />
        </header>
    );
};

export default UserProfile;