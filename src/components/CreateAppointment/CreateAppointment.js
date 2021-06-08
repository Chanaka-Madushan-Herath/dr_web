import React, {Component, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import doctorimg from '../../Assests/doctor.png';
import './CreateAppointment.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {BookDoctor, selectItem} from "../../Action/BookAction";


const CreateAppointment =(props)=> {
    const [loading, setLoading] = useState(false);
    const [session, setSessions] = useState([]);

    const fetchSessions = async () => {
        const docRef = fire.firestore().collection("doctors").doc(props.selectedItem.id).collection("Times").get()
            .then(response => {
                const Sessions = [];
                response.forEach(document => {
                    const session = {
                        id: document.id,
                        ...document.data()
                    };
                    Sessions.push(session);
                });

                setSessions(Sessions)
            });
    }
    useEffect(() => {
        fetchSessions();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    if (!props.selectedItem) {
        return (<h2>Select a doctor ....</h2>);
    }
    return (
        <div>
            {loading ?
                <Loader load={loading}/>
                :
                <div className={"createAppointment"}>
                    <img src={doctorimg} height="200px" width="200px"/>
                    <h1>Dr.{props.selectedItem.Name}</h1>
                    <h2>({props.selectedItem.Specialization})</h2>
                    <h2>{props.selectedItem.Hospital}</h2>
                    <br/>
                    <hr/>
                    <br/>
                    {session.map((item =>
                            <Link to={"/dr_web/Book"}>
                                <div className="item" onClick={() => props.BookDoctor(item)}>

                                    <div
                                        key={item.id}>{new Date(item.Time.seconds * 1000).toLocaleDateString("en-US")}</div>
                                    <div
                                        key={item.id}>{new Date(item.Time.seconds * 1000).toLocaleTimeString("en-US")}</div>
                                    <Button variant="danger">Book</Button>

                                </div>
                            </Link>

                    ))}

                </div>
            }
        </div>
    )
}


function mapStateToProps(state){
    return{
        selectedItem:state.selectedItem
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {BookDoctor:BookDoctor},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateAppointment)