import classes from './PhotosItem.module.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {getAuthToken} from "../../util/util";

function PhotosItem({photos}) {
    // const submit = useSubmit();
    const params = useParams();
    const photosId = params.photosId;
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false)


    async function startDeleteHandler() {
        const proceed = window.confirm("a je i sigurt")
        const authToken=getAuthToken()
        if (proceed) {
            // submit(null, { method: 'delete' });
            try {
                console.log("--------", photosId)
                const response = await axios.delete(" http://127.0.0.1:8000/deletePhoto/" + photosId, {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Token ${authToken}`,
                        // 'Content-Type': 'application/json', // Content-Type header
                    }
                });
                console.log("--------", photosId)
                setIsDeletedSuccessfully(true)
                if (response.status !== 200) {
                    throw new Error('Could not delete photos.');
                }

            } catch (error) {
                throw error;
            }
        }
    }

    return (
        <article className={classes.photos}>
            <img src={photos.image_base64} alt={photos.title}/>
            {!isDeletedSuccessfully &&
                <>
                    <h1>{photos.title}</h1>
                    <p>{photos.description}</p>
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

export default PhotosItem;
