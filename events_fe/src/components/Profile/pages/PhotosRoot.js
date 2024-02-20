import { Outlet } from 'react-router-dom';

import PhotosNavigation from '../PhotosNavigation';
import HeaderProfile from "../header/HeaderProfile";

function PhotosRootLayout() {
    return (
        <>
            <HeaderProfile/>
            {/*<PhotosNavigation />*/}
            <Outlet />
        </>
    );
}

export default PhotosRootLayout;