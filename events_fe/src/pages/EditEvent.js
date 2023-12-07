import EventForm from "../components/EventForm";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
    const data=useRouteLoaderData("event-detail")
    // {console.log("danjel halili"+data)}
    return <h1><EventForm event={data}/></h1>;

}

export default EditEventPage;
