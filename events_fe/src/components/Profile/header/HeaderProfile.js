import React, {useContext} from 'react';
import './HeaderProfile.css';
import DataAdminContext from "../../../store/DataAdminContext";

import profilePicture from "../../../util/profilePicture.png";
import {Link} from "react-router-dom";
import PhotosNavigation from "../PhotosNavigation";


function HeaderProfile() {
    const { first_name, last_name } = useContext(DataAdminContext);
    return (
        // <div className="wrap">
            <div className="container">
                {/*<header>*/}
                {/*    <i className="fa fa-bars" aria-hidden="true"></i>*/}
                {/*</header>*/}
                <main className={"main"}>
                    {/*<div className="row">*/}
                        <div className="left col-lg-4">
                            <div className="photo-left">
                              <Link to={""}>  <img className="photo" src={profilePicture} alt={""}/></Link>

                            </div>
                            <h4 className="name">{first_name} {last_name}</h4>
                            <p className="info">UI/UX Designer</p>
                            <p className="info">jane.doe@gmail.com</p>
                            <div className="stats row">
                                <div className="stat col-xs-4" style={{ paddingRight: '50px' }}>
                                    <p className="number-stat">3,619</p>
                                    <p className="desc-stat">Followers</p>
                                </div>
                                <div className="stat col-xs-4">
                                    <p className="number-stat">42</p>
                                    <p className="desc-stat">Following</p>
                                </div>
                                <div className="stat col-xs-4" style={{ paddingLeft: '50px' }}>
                                    <p className="number-stat">38</p>
                                    <p className="desc-stat">Uploads</p>
                                </div>

                            </div>
                            <p className="desc">Hi! My name is Jane Doe. I'm a UI/UX Designer from Paris, France. I really enjoy photography and mountains.</p>
                            {/*<div className="social">*/}
                            {/*    <i className="fa fa-facebook-square" aria-hidden="true"></i>*/}
                            {/*    <i className="fa fa-twitter-square" aria-hidden="true"></i>*/}
                            {/*    <i className="fa fa-pinterest-square" aria-hidden="true"></i>*/}
                            {/*    <i className="fa fa-tumblr-square" aria-hidden="true"></i>*/}
                            {/*</div>*/}
                        </div>
                        <div className="right col-lg-8">
                            <ul className="nav">
                                <li>Gallery</li>
                                <li>Friends</li>
                                <li>Groups</li>
                                <li>About</li>
                                <PhotosNavigation/>
                            </ul>

                        </div>
                    {/*</div>*/}
                </main>
            </div>
        // </div>
    );
}

export default HeaderProfile;
