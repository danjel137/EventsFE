import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg'

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/getPhotoList/');
                setPhotos(response.data); // Assuming the response data is an array of photo objects
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Photo List</h1>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={`data:image/png;base64,${photo.image_base64}`} alt={"img kot"}/> {/* Assuming 'image' holds the image URL */}
                        <p>{photo.title}</p>
                        {/* Render other properties of the photo as needed */}
                    </li>
                ))
            }
            </ul>

        </div>
    );
    // return (
    //     <div>
    //         <h1>Photo List</h1>
    //         <ul style={{ listStyle: 'none', padding: 0 }}>
    //             {photos.map((photo) => (
    //                 <li key={photo.id} style={{ width: '50%', height: '25%', float: 'left' }}>
    //                     <img
    //                         src={`data:image/png;base64,${photo.image_base64}`}
    //                         alt={"img kot"}
    //                         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    //                     />
    //                     <p>{photo.title}</p>
    //                     {/* Render other properties of the photo as needed */}
    //                 </li>
    //             ))}
    //         </ul>
    //         <div style={{ clear: 'both' }}></div>
    //     </div>
    // );
};

export default PhotoList;
