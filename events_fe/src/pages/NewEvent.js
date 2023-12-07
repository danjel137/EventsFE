import EventForm from "../components/EventForm";
import {redirect} from "react-router-dom";
import axios from "axios";

function NewEventPage() {
    return <h1><EventForm/> </h1>;
}

export default NewEventPage;

