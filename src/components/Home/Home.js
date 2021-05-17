import React, { useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Search from '../Search/Search';
import { BrowserRouter, Route } from 'react-router-dom';
import Bookings from '../Bookings/Bookings';
import Profile from '../Profile/Profile';
import Message from "./Alert";
import fire from '../../config/Fire';
import Loader from "../Loader/Loader";




const  Home=()=> {
    const [loading,setloading]= useState(false);
    const [url, setUrl] = useState("");
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Address: '',
        Tp: '',
        Password: ''
    });
    const currentUser = fire.auth().currentUser;

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

    console.log(url)
    console.log(user.Name)

        return(
            <div className="home">
                {loading?
                    <Loader load={loading}/>
                    :
                    <BrowserRouter>
                        <Navbar link={url} />
                        <Message name={user.Name}/>
                        <div>
                        <Route path="/" exact render={Search  }/>
                        <Route path="/Profile" exact render={()=> <Profile />}/>
                        <Route path="/Bookings" exact render={()=><Bookings/>}/>
                        </div>
                    </BrowserRouter>
                }
                </div>
        );
}

export default Home ;