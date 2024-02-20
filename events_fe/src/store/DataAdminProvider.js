import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataAdminContext from './DataAdminContext';
import {getAuthToken} from "../util/util";

const DataAdminProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        username: "",
        first_name: "",
        last_name: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = getAuthToken(); // You need to define this function

                const response = await axios.get('http://127.0.0.1:8000/getUserData/', {
                    headers: {
                        'Authorization': `Token ${authToken}`,
                    }
                });

                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <DataAdminContext.Provider value={userData}>
            {children}
        </DataAdminContext.Provider>
    );
};

export default DataAdminProvider;