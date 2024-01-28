import classes from './PhotosNavigation.module.css';
import {Form, Link, NavLink} from "react-router-dom";
import {getAuthToken} from "../../util/util";

function PhotosNavigation() {
    const isLogin=getAuthToken()
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
              {isLogin &&
                  <li>
                      <Form action="/logout" method="post">
                          <button>Logout</button>
                      </Form>
                  </li>}
          </ul>
        </nav>
      </header>
  );
}

export default PhotosNavigation;
