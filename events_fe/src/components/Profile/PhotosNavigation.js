import classes from './PhotosNavigation.module.css';
import {Form, Link, NavLink} from "react-router-dom";
import {getAuthToken} from "../../util/util";
import {useContext} from "react";
import DataAdminContext from "../../store/DataAdminContext";
import HeaderProfile from "./header/HeaderProfile";

function PhotosNavigation() {

    return (

                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="editProfile"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Edit Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="new"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Add Photo
                        </NavLink>
                    </li>
                </ul>

    );
}

export default PhotosNavigation;
