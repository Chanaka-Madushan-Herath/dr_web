import React from 'react';
import './Bookings.css';
import fire from '../../config/Fire';

const Bookings =()=> {
    var currentUser = fire.auth().currentUser;
       
        return(
            <div className="bookings">
                <h1>Bookings</h1>
                <h1>{currentUser.displayName}</h1>
                <h1>{currentUser.uid}</h1>
            </div>

);
}

export default Bookings ;