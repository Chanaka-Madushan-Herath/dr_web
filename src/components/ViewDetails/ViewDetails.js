import React, {Component, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import doctorimg from '../../Assests/doctor.png';
import Loader from "../Loader/Loader";
import './ViewDetails.css';
import {Link} from "react-router-dom";
import {Button, Nav} from "react-bootstrap";
import Tooltip from "@material-ui/core/Tooltip";

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

                    <Link to={"/dr_web/Bookings"}>   <Tooltip title="Close"><Button className="close" variant="danger" > <span aria-hidden="true">&times;</span></Button></Tooltip></Link>

                        <h2 className={"description"}>Doctor's Information:</h2><br/><br/>
                    <div className={"Detail"}>
                        <img src={doctorimg} height="200px" width="200px"/>
                        <h1 className={"docName"}>Dr.{props.viewBooking.Doctor}</h1>
                        <h2>({props.viewBooking.Specialization})</h2>
                        <h2>{props.viewBooking.Hospital}</h2>
                        <h2>{new Date(props.viewBooking.Time.seconds * 1000).toLocaleDateString("en-US")} {new Date(props.viewBooking.Time.seconds * 1000).toLocaleTimeString("en-US")}</h2>

                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <h2 className={"description"}>Patient's Information:</h2><br/><br/>
                    <div className={"Detail"}>
                        <h1 className={"Name"}>{props.viewBooking.Name}</h1><br/>
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
        viewBooking: state.viewBooking
    }
}

export default connect(mapStateToProps)(ViewDetails)
