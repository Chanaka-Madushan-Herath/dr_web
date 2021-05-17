import React, {useEffect, useState} from 'react';
import './Profile.css';
import {Alert, Image} from "react-bootstrap";
import profile from '../../Assests/user_profile.png'
import fire from "../../config/Fire";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";



const Profile =()=> {
    const currentUser = fire.auth().currentUser;
    const [loading,setloading]= useState(false);
    const [url, setUrl] = useState("");
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Address: '',
        Tp: '',
        Password: '',
        fireErrors:''
    });
    

    const fetchUser=async ()=>{
        const docRef = fire.firestore().collection("users").doc(currentUser.uid).get()
        docRef.then((snapshot)=>{
            setUser(snapshot.data())
        });
    }
    const fetchUrl=async ()=>{
        const downloadLink = fire.storage().ref("images/").child(currentUser.uid).getDownloadURL()
        downloadLink.then(url => setUrl(url)).catch((error) => {
            setUrl(null)
        });
    }

    useEffect(()=>{
        fetchUser();
        fetchUrl();
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000);
    },[]);
    const handleChange = e => {

        setUser({...user, [e.target.name]: e.target.value})
    }
    const update = e =>{
        e.preventDefault();
        const ref=fire.firestore().collection('users')
        currentUser.updateProfile({
            displayName: user.Name,
            address: user.Address,
            tp: user.Tp
        })
        ref.doc(currentUser.uid).set({
            Name: user.Name,
            Email: user.Email,
            Address: user.Address,
            Tp: user.Tp,
            Password: user.Password

        }).catch((error)=>{
            console.log(error.message)
        })
    }
    let errorNotification = user.fireErrors ?
        (   <Alert variant="danger"> {user.fireErrors} </Alert> ) : null;
    return(
        <div >
            {loading?
               <Loader load={loading}/>
                :
                <div className="profile">
                    <form >
                        {errorNotification}
                        {url == null ?
                            <Image src={profile }  height="250px"  width ="250px"alt="profile" roundedCircle />
                            :
                            <Image src={url} height="250px"  width ="250px"alt="profile" roundedCircle />
                        }
                        <input type="text"
                               className="regField"
                               placeholder="Your Name"
                               value={user.Name}
                               onChange={handleChange}
                               name="Name"
                        />
                        <input type="text"
                               className="regField"
                               placeholder="Email"
                               value={user.Email}
                               onChange={handleChange}
                               name="Email"
                        />
                        <input type="text"
                               className="regField"
                               placeholder="Your Address"
                               value={user.Address}
                               onChange={handleChange}
                               name="Address"
                        />
                        <input type="text"
                               className="regField"
                               placeholder="Your Phone Number"
                               value={user.Tp}
                               onChange={handleChange}
                               name="Tp"
                        />
                        <Link to="/"><input className="submitBtn" type="submit" onClick={update} value="Save Changes" /></Link>
                    </form>
                </div>
            }
        </div>

);
}

export default Profile ;