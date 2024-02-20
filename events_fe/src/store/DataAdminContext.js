import {createContext} from "react";

const DataAdminContext = createContext({
    username: "",
    first_name: "",
    last_name: ""
});

export default DataAdminContext