import React, {Component, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import doctorimg from '../../Assests/doctor.png';
import Loader from "../Loader/Loader";
import './ViewDetails.css';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const ViewDetails =(props)=> {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    if (!props.viewBooking) {
        return (
            <Link to={"/dr_web"}><h2>Select a reservation ....</h2></Link>

        );
    }

    return (
        <div>
            {loading ?
                <Loader load={loading}/>
                :
                <div className={"BookSession"}>
                    <div>
                       <Link to={"/dr_web/Bookings"}> <Button className="close" variant="danger" > <span aria-hidden="true">&times;</span></Button></Link>
                        <img src={doctorimg} height="200px" width="200px"/>
                        <h1 className={"docName"}>Dr.{props.viewBooking.Doctor}</h1>
                        <h2>({props.viewBooking.Specialization})</h2>
                        <h2>{props.viewBooking.Hospital}</h2>
                        <h2>{new Date(props.viewBooking.Time.seconds * 1000).toLocaleDateString("en-US")} {new Date(props.viewBooking.Time.seconds * 1000).toLocaleTimeString("en-US")}</h2>

                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className={"yoursDetail"}>
                        <h1>{props.viewBooking.Name}</h1><br/>
                        <h3>{props.viewBooking.Email}</h3><br/>
                        <h3>{props.viewBooking.Tp}</h3><br/>
                        <h4>{props.viewBooking.Address}</h4><br/>
                    </div>
                </div>

            }
        </div>
    )
}


function mapStateToProps(state) {
    return {
        viewBooking:state.viewBooking
    }
}

export default connect(mapStateToProps)(ViewDetails)
