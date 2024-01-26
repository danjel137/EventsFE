import classes from './MainNavigation.module.css';
import {Form, Link, NavLink, redirect} from "react-router-dom";
import {getAuthToken} from "../util/util";
import {actionLogout} from "../util/logout";
import SearchPage from "./search/SearchBar";
import LogoHome from "./Home/LogoHome";
import SearchBar from "./search/SearchBar";
import NotificationPage from "./notification/NotificationPage";
import NotificationBar from "./notification/LogoNotification";

function MainNavigation() {
    const isLogin=getAuthToken()

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {isLogin &&<li>
                        <NavLink to={"home"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><LogoHome/></NavLink>
                    </li>}
                    {isLogin &&<li>
                        <NavLink to={"search"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><SearchBar/></NavLink>

                    </li>}
                    {isLogin &&<li>
                        <NavLink to={"notification"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        ><NotificationBar/></NavLink>
                    </li>}
                    {isLogin && <li>
                        <Link to={"photos"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                        >Profile</Link>
                    </li>}
                    {!isLogin && <li>
                        <Link to={"auth"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                        >LogIn
                        </Link>
                    </li>}
                    {isLogin &&
                        <li>
                        <Form action="/events_fe/src/util/logout" method="post">
                            <button>Logout</button>
                        </Form>
                    </li>}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
