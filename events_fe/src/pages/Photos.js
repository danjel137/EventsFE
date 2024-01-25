import {useEffect, useState} from 'react';

import PhotosList from '../components/PhotosList';
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import {getAuthToken} from "../util/util";
import PhotoList from "./ImageUploadForm";

function PhotosPage() {
    const photos = useLoaderData()

    return (
        <PhotosList photos={photos}/>
    );
}

export default PhotosPage;

export async function loaderrr() {
    try {
        const authToken = getAuthToken()

        const response = await axios.get('http://127.0.0.1:8000/getPhotoList/', {
            headers: {
                'Authorization': `Token ${authToken}`,
                // 'Content-Type': 'application/json', // Content-Type header
            }
        });

        return response.data;
    } catch (error) {
        throw new Response(JSON.stringify({message: 'Pati nje problem ne marrjen e fotove.'}), {
            status: 500,
        });
    }
}

// export async function loaderrr() {
//     try {
//         const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your actual authentication token
//
//         const response = await axios.get('http://127.0.0.1:8000/getPhotoList/', {
//             headers: {
//                 'Authorization': `Token ${authToken}`,
//                 'Content-Type': 'application/json',
//             },
//         });
//
//         return response.data;
//     } catch (error) {
//         throw new Error(JSON.stringify({ message: 'There was a problem fetching photos.' }));
//     }
// }

