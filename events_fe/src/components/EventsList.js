import classes from './EventsList.module.css';
import {Link} from "react-router-dom";

function EventList({ events }) {
    return (
        <div className={classes.events}>
            <h1>All Photos</h1>
            <ul className={classes.list}>
                {Array.isArray(events) && events.length > 0 ? (
                    // If events is an array and has data, render the list
                    events.map((event) => (
                        <li key={event.id} className={classes.item}>
                            <Link to={`${event.id}`}>
                                <img src={event.image_base64} alt={event.title} />
                                <div className={classes.content}>
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    // If events is not an array or has no data, render a message
                    <p>No photos available. Please add photos here.</p>
                )}
            </ul>
        </div>
    );
}

export default EventList;
