import React  from 'react';
import './Profile.css';
import fire from '../../config/Fire';


const Profile =()=> {
    var currentUser = fire.auth().currentUser;
       
    return(
        <div className="profile">
            <h1>Profile</h1>
            <h1>{currentUser.displayName}</h1>
            <h1>{currentUser.uid}</h1>
        </div>

);
}

export default Profile ;