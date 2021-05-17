import React  from 'react';
import './Profile.css';
import fire from '../../config/Fire';
import {Image} from "react-bootstrap";
import profile from '../../Assests/user_profile.png'


const Profile =(props)=> {
    var currentUser = fire.auth().currentUser;
       
    return(
        <div className="profile">
            {props.link == null ?
                <Image src={profile }  height="250px"  width ="250px"alt="profile" roundedCircle />
                :
                <Image src={props.link} height="250px"  width ="250px"alt="profile" roundedCircle />
            }
            <h1>Profile</h1>
            <h1>{props.user.Name}</h1>
            <h1>{props.user.Email}</h1>
            <h1>{props.user.Address}</h1>
            <h1>{props.user.Tp}</h1>
        </div>

);
}

export default Profile ;