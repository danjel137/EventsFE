import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

const NotificationBar = () => {
    return (
        <div className="logo">
            <FontAwesomeIcon icon={faBell} size="2x" /> Notification
        </div>
    );
};

export default NotificationBar;
