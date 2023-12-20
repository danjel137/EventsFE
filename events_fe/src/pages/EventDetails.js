import {useLoaderData, useParams, useRouteLoaderData} from "react-router-dom";
import axios from "axios";
import EventItem from "../components/EventItem";
import {getAuthToken} from "../util/util";

function EventDetailPage() {
    const data=useRouteLoaderData("event-detail")
     const params = useParams();

    return (
        <>
            {/*<h1>EventDetailPage</h1>*/}
            {/*<p>Event ID: {params.eventId}</p>*/}
            <EventItem  event={data}/>
        </>
    );
}

export default EventDetailPage;

export async function loaderForEventDetail({ request, params }) {
    const id = params.eventId;
    console.log("iddddddddddd",id)
    const authToken=getAuthToken()
    console.log("toooooooooooooken",authToken)
    try {
        const response = await axios.get('http://127.0.0.1:8000/getPhotoById/'+id
            ,{
                headers:{
                    'Authorization': `Token ${authToken}`,
                    // 'Content-Type': 'application/json', // Content-Type header
                }
            }
        );
        console.log("danjel halii"+response.data)
        return response.data;

    } catch (error) {
        throw new Response(JSON.stringify({ message: 'Pati nje problem ne marrjen e fotove.' }), {
            status: 500,
        });
    }
}


export async function deleteEventAction({ params, request }) {
    const eventId = params.eventId;
    try {console.log("--------",eventId)
        const response = await axios.delete(" http://127.0.0.1:8000/deletePhoto/"+eventId,{
            method: "DELETE",
        });
        console.log("--------",eventId)
        if (response.status !== 200) {
            throw new Error('Could not delete event.');
        }

        // If the deletion is successful, you can perform the redirect here or handle it as needed
        return '/events'; // Return the path to redirect to '/events' after successful deletion
    } catch (error) {
        // Handle errors or throw them to be caught by the caller
        throw error;
    }
}
