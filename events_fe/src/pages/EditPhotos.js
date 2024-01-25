import PhotosForm from "../components/PhotosForm";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

function EditPhotosPage() {
    const data=useRouteLoaderData("photos-detail")
    // {console.log("danjel halili"+data)}
    return <h1><PhotosForm photos={data}/></h1>;

}

export default EditPhotosPage;
