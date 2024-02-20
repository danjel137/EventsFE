import React, { useState } from 'react';
import './ProfilePicture.css';
import {Link} from "react-router-dom";

const ProfilePicture = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOverlayClick = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    const editProfile = () => {
        // Implement logic to edit profile
        console.log("Editing profile picture");
        handleCloseOverlay();
    };

    const deleteProfile = () => {
        // Implement logic to delete profile
        console.log("Deleting profile picture");
        handleCloseOverlay();
    };

    const changeProfile = () => {
        // Implement logic to change profile
        console.log("Changing profile picture");
        handleCloseOverlay();
    };

    return (
        <div >
            {/*<Link to={"newProfilePhoto"} className="profile-picture-circle" onClick={handleOverlayClick}></Link>*/}
            {/*{showOverlay && (*/}
                <div className="overlay">
                    <div className="overlay-content">
                        <button onClick={editProfile}>Edit</button>
                        <button onClick={deleteProfile}>Delete</button>
                        <button onClick={changeProfile}>Change</button>
                        <button onClick={handleCloseOverlay}>Close</button>
                    </div>
                </div>
            {/*)}*/}
        </div>
    );
};

export default ProfilePicture;