import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import HomePage from "./components/Home/Home";
import PhotosPage, {loaderrr} from "./components/Profile/pages/Photos";
import PhotosDetailPage, {deletePhotosAction, loaderForPhotosDetail} from "./components/Profile/pages/PhotosDetails";
import NewPhotosPage, {newPhotoAction} from "./components/Profile/NewPhotos";
import EditPhotosPage from "./components/Profile/pages/EditPhotos";
import RootLayout from "./components/Profile/pages/Root";
import PhotosRootLayout from "./components/Profile/pages/PhotosRoot";
import ImageUploadForm from "./components/Profile/pages/ImageUploadForm";
import ImageFromLocal from "./components/Profile/pages/ImageFromLocal";
import PhotoList from "./components/Profile/pages/ImageUploadForm";
import YourComponent from "./components/Profile/pages/ImageFromLocal";
import ErrorPage from "./util/Error";
import AuthenticationPage, {authAction} from "./util/AuthenticationPage";
import {actionLogOut} from "./util/logout";
import MainNavigation from "./components/MainNavigation";

import NotificationPage from "./components/notification/NotificationPage";
import SearchPage from "./components/search/SearchPage";
import SelectProfile from "./components/Profile/SelectProfile";
import ExplorePage from "./components/explore/ExplorePage";
import GroupsPage from "./components/groups/GroupsPage";
import FriendsPage from "./components/friends/FriendsPage";
import SignupForm from "./components/SignupForm";
import LogInForm from "./components/LogInForm";
import DataAdminContext from "./store/DataAdminContext";
import {useContext} from "react";
import DataAdminProvider from "./store/DataAdminProvider";
import ProfilePicture from "./components/Profile/header/ProfilePicture";
import PortalExample from "./components/Profile/AddPhoto";
import PhotosNavigation from "./components/Profile/PhotosNavigation";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: "home", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "notification", element: <NotificationPage/>},
            {path: "groups", element: <GroupsPage/>},
            {path: "friends", element: <FriendsPage/>},
            {path: "explore", element: <ExplorePage/>},
            // {path: "profile", element: <SelectProfile/>},
            {
                path: "photos",
                element: <PhotosRootLayout/>,
                children: [
                    {path: '', element: <PhotosPage/>, loader: loaderrr},
                    {
                        path: ":photosId", id: "photos-detail", loader: loaderForPhotosDetail, children: [
                            {path: '', element: <PhotosDetailPage/>},
                            {path: 'edit', element: <EditPhotosPage/>},
                        ]
                    },
                    // {path: 'new', element: <NewPhotosPage/>},
                    {path: 'ProfilePicture', element: <ProfilePicture/>},
                ]
            },
            {
                path: "auth",
                element: <AuthenticationPage/>,
                action: authAction,

            },
            {
                path: 'logout',
                loader: actionLogOut,
            },
        ]
    }
])

function App() {
    const { username, first_name, last_name } = useContext(DataAdminContext);

    return (
        <DataAdminProvider username={username} first_name={first_name} last_name={last_name}>
            <RouterProvider router={router}>
                {/*<RootLayout/>*/}
                {/*<PortalExample />*/}
            </RouterProvider>
        </DataAdminProvider>
        // <PhotosNavigation/>
    );

}

export default App