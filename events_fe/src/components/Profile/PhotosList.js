import classes from './PhotosList.module.css';
import {Link} from "react-router-dom";

function PhotosList({ photos }) {
    return (
        <div className={classes.photos}>
            <h1>All Photos</h1>
            <ul className={classes.list}>
                {Array.isArray(photos) && photos.length > 0 ? (
                    // If events is an array and has data, render the list
                    photos.map((photos) => (
                        <li key={photos.id} className={classes.item}>
                            <Link to={`${photos.id}`}>
                                <img src={photos.image_base64} alt={photos.title} />
                                <div className={classes.content}>
                                    <h2>{photos.title}</h2>
                                    <p>{photos.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No photos available. Please add photos here.</p>
                )}
            </ul>
        </div>
    );
}

export default PhotosList;
