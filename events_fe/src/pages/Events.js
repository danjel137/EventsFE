import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import axios from "axios";
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const events=useLoaderData()

    return (
           <EventsList events={events} />
    );
}

export default EventsPage;

export async function loaderrr(){
    try {
        const response = await axios.get('http://127.0.0.1:8000/getPhotoList/');
        return response.data;
    } catch (error) {
        throw new Response(JSON.stringify({ message: 'Pati nje problem ne marrjen e fotove.' }), {
            status: 500,
        });
    }
}

