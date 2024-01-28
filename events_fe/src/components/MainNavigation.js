import classes from './MainNavigation.module.css';
import {Form, Link, NavLink, redirect} from "react-router-dom";
import {getAuthToken} from "../util/util";
import {actionLogout} from "../util/logout";
import SearchPage from "./search/SearchBar";
import LogoHome from "./Home/LogoHome";
import SearchBar from "./search/SearchBar";
import NotificationPage from "./notification/NotificationPage";
import NotificationBar from "./notification/LogoNotification";
import React from "react";
import UserProfile from "./Profile/UserProfile";
import SelectProfile from "./Profile/SelectProfile";
import LogoExplore from "./explore/LogoExplore";
import NameAppPage from "./appName/NameAppPage";


function MainNavigation() {
    const isLogin = getAuthToken()

    return (
        <header className={classes.header}>

                <div className={classes.NameAppSearch}>
                    {isLogin && <li>
                        <NavLink to={"home"}
                        ><NameAppPage/></NavLink>
                    </li>}

                    {isLogin && <li>
                        <NavLink to={"search"}
                        ><SearchBar/></NavLink>
                    </li>}
                </div>
                <ul className={classes.list}>

                    {isLogin && <li>
                        <NavLink to={"home"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><LogoHome/></NavLink>
                    </li>}
                    {isLogin && <li>
                        <NavLink to={"explore"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><LogoExplore/></NavLink>
                    </li>}
                    {isLogin && <li>
                        <NavLink to={"notification"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><NotificationBar/></NavLink>
                    </li>}

                </ul>
                    {!isLogin && <li>
                        <NavLink to={"auth"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                        >LogIn
                        </NavLink>
                    </li>}
            <div >
                {isLogin && (
                        <SelectProfile />
                )}
            </div>


        </header>

    );
}

export default MainNavigation;
