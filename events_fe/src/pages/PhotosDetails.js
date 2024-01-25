import {useLoaderData, useParams, useRouteLoaderData} from "react-router-dom";
import axios from "axios";
import PhotosItem from "../components/PhotosItem";
import {getAuthToken} from "../util/util";

function PhotosDetailPage() {
    const data=useRouteLoaderData("photos-detail")
     const params = useParams();

    return (
        <>
            {/*<h1>EventDetailPage</h1>*/}
            {/*<p>Event ID: {params.eventId}</p>*/}
            <PhotosItem photos={data}/>
        </>
    );
}

export default PhotosDetailPage;

export async function loaderForPhotosDetail({ request, params }) {
    const id = params.photosId;
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


export async function deletePhotosAction({ params, request }) {
    const photosId = params.photosId;
    try {console.log("--------",photosId)
        const response = await axios.delete(" http://127.0.0.1:8000/deletePhoto/"+photosId,{
            method: "DELETE",
        });
        console.log("--------",photosId)
        if (response.status !== 200) {
            throw new Error('Could not delete photo.');
        }

        // If the deletion is successful, you can perform the redirect here or handle it as needed
        return '/photos'; // Return the path to redirect to '/photos' after successful deletion
    } catch (error) {
        // Handle errors or throw them to be caught by the caller
        throw error;
    }
}
