import classes from './PhotosNavigation.module.css';
import {NavLink} from "react-router-dom";

function PhotosNavigation() {
  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                  to=""
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
                  end
              >
                All Photos
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="new"
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
              >
                Add Photo
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default PhotosNavigation;
