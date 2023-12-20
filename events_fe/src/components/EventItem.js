import classes from './EventItem.module.css';
import {Link, redirect, useParams, useSubmit} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {getAuthToken} from "../util/util";

function EventItem({event}) {
    // const submit = useSubmit();
    const params = useParams();
    const eventId = params.eventId;
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false)


    async function startDeleteHandler() {
        const proceed = window.confirm("a je i sigurt")
        const authToken=getAuthToken()
        if (proceed) {
            // submit(null, { method: 'delete' });
            try {
                console.log("--------", eventId)
                const response = await axios.delete(" http://127.0.0.1:8000/deletePhoto/" + eventId, {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Token ${authToken}`,
                        // 'Content-Type': 'application/json', // Content-Type header
                    }
                });
                console.log("--------", eventId)
                setIsDeletedSuccessfully(true)
                if (response.status !== 200) {
                    throw new Error('Could not delete event.');
                }

            } catch (error) {
                throw error;
            }
        }
    }

    return (
        <article className={classes.event}>
            <img src={event.image_base64} alt={event.title}/>
            {!isDeletedSuccessfully &&
                <>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                    <menu className={classes.actions}>
                        <Link to={"edit"}>Edit</Link>
                        <button onClick={startDeleteHandler}>Delete</button>
                    </menu>
                </>
            }
            {
                isDeletedSuccessfully &&
                <>
                    <p>this photo is deleted successfully</p>
                    <Link to={".."}>click here to go to the photos </Link>
                </>
            }
        </article>
    );
}

export default EventItem;
