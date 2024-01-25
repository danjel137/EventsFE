import {Form, Link, redirect, useNavigate, useNavigation} from 'react-router-dom';

import classes from './PhotosForm.module.css';
import {Fragment, useState} from "react";
import axios from "axios";
import PhotosRootLayout from "../pages/PhotosRoot";
import {getAuthToken} from "../util/util";
import jwt_decode from 'jwt-decode';

function PhotosForm({method, photos}) {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const [base64Image, setBase64Image] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitted,setIsSubmitted]=useState(false)
    const isSubmitting = navigation.state === 'submitting';

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Convert the image to a base64 string
                const base64String = reader.result;
                setBase64Image(base64String);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {

        setDescription(e.target.value)
    }


    function cancelHandler() {
        navigate('..');
    }

    async function handleFormSubmit(e) {
        e.preventDefault()
        const authToken=getAuthToken()
        // const decodedToken = jwt_decode(authToken);
        // console.log('Decoded token:', decodedToken);
        //
        //
        // const userId = decodedToken.userId; // Replace 'userId' with the actual field in your token payload
        // console.log('User IDddddddddddddddddd:', userId);
        const obj={
            title,
            description,
            image_base64:base64Image
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/addPhoto/', obj,{
                headers:{
                    'Authorization': `Token ${authToken}`,
                    // 'Content-Type': 'application/json', // Content-Type header
                }
            });

            console.log('Response from server:---------------------', obj,"---------------------");
            setIsSubmitted(true)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <Fragment>
        {!isSubmitted && <Form method="post" onSubmit={handleFormSubmit} className={classes.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    onChange={handleTitleChange}
                    // defaultValue={event ? event.description : ""}
                />
            </p>
            <input
                id="image"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
                required
                // defaultValue={event ? event.description : ""}
            />
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    onChange={handleDescriptionChange}
                    // defaultValue={event ? event.description : ""}
                />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Save'}
                </button>
            </div>
        </Form>}
            <>
                {isSubmitted && (
                    <>
                        <p>Submitted successfully</p>
                        <Link to="..">Click to view all photos</Link>
                    </>
                )}
            </>

        </Fragment>

    );
}

export default PhotosForm;
