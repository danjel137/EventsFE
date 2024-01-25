import { Outlet } from 'react-router-dom';

import PhotosNavigation from '../components/PhotosNavigation';

function PhotosRootLayout() {
    return (
        <>
            <PhotosNavigation />
            <Outlet />
        </>
    );
}

export default PhotosRootLayout;