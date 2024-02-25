import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import "./AddPhoto.css"
import NewPhotosPage from "./NewPhotos";
import NewPhotos from "./NewPhotos";

const AddPhoto = () => {
    const [showPortal, setShowPortal] = useState(false);

    const togglePortal = () => {
        {console.log(showPortal)}
        setShowPortal(!showPortal);
    };

    return (
        <Fragment>
            <button className={"addPhotoButton"} onClick={togglePortal}>ADD PHOTO</button>
            {showPortal && (
                ReactDOM.createPortal(
                    <div className="portal-container">
                        <div className="portal-content">
                            <NewPhotos/>
                            <button onClick={togglePortal}>Close</button>
                        </div>
                    </div>,
                    document.getElementById('portal-root')
                )
            )}
        </Fragment>
    );
};

export default AddPhoto;
