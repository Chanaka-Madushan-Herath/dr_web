import React, {Component, useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Search from '../Search/Search';
import { BrowserRouter, Route } from 'react-router-dom';
import Bookings from '../Bookings/Bookings';
import Profile from '../Profile/Profile';
import Message from "./Alert";
import fire from '../../config/Fire';
import FadeLoader from "react-spinners/FadeLoader";




const  Home=()=> {
    const [loading,setloading]= useState(false);
    useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },10000);
    },[]);

    const currentUser = fire.auth().currentUser;

        return(
            <div className="home">
                {loading?
                    <div className="loader">
                    <FadeLoader color={'#36D7B7'} loading={loading} size={50} />
                    <h1>Please Wait...!</h1>
                    </div>
                    :
                    <BrowserRouter>
                        <Navbar/>
                        <Message name={currentUser.displayName}/>
                        <Route path="/" exact render={Search  }/>
                        <Route path="/Profile" exact render={Profile}/>
                        <Route path="/Bookings" exact render={Bookings}/>

                    </BrowserRouter>
                }
                </div>
        );
}

export default Home ;