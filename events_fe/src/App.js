import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, {loaderrr} from "./pages/Events";
import EventDetailPage, {deleteEventAction, loaderForEventDetail} from "./pages/EventDetails";
import NewEventPage, {newPhotoAction} from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pagesProv/Root";
import EventsRootLayout from "./pages/EventsRoot";
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
                path: "events",
                element: <EventsRootLayout/>,
                children: [
                    {path: '', element: <EventsPage/>, loader: loaderrr},
                    {
                        path: ":eventId", id: "event-detail", loader: loaderForEventDetail, children: [
                            {path: '', element: <EventDetailPage/>},
                            {path: 'edit', element: <EditEventPage/>},
                        ]
                    },
                    {path: 'new', element: <NewEventPage/>},
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