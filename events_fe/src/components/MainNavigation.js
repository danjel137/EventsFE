import classes from './MainNavigation.module.css';
import {Link, NavLink} from "react-router-dom";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to={""} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                                 end
                        >Home</NavLink>
                    </li>
                    <li>
                        <Link to={"events"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                        >Photos</Link>
                    </li>
                    <li>
                        <Link to={"auth"} className={({isActive}) =>
                            isActive ? classes.active : undefined}
                        >LogIn
                        </Link>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
