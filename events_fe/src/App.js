import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import PhotosPage, {loaderrr} from "./pages/Photos";
import PhotosDetailPage, {deletePhotosAction, loaderForPhotosDetail} from "./pages/PhotosDetails";
import NewPhotosPage, {newPhotoAction} from "./pages/NewPhotos";
import EditPhotosPage from "./pages/EditPhotos";
import RootLayout from "./pagesProv/Root";
import PhotosRootLayout from "./pages/PhotosRoot";
import ImageUploadForm from "./pages/ImageUploadForm";
import ImageFromLocal from "./pages/ImageFromLocal";
import PhotoList from "./pages/ImageUploadForm";
import YourComponent from "./pages/ImageFromLocal";
import ErrorPage from "./pages/Error";
import AuthenticationPage, {authAction} from "./pages/AuthenticationPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
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
                    {path: 'new', element: <NewPhotosPage/>},
                ]
            },
            {
                path: "auth",
                element: <AuthenticationPage/>,
                action: authAction
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>;
    // return <YourComponent/>
    // return <PhotoList/>
}

export default App