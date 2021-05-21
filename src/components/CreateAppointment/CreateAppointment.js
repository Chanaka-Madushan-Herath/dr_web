import React, {Component, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import doctorimg from '../../Assests/doctor.png';
import './CreateAppointment.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";
import {Button} from "react-bootstrap";


const CreateAppointment =(props)=> {
    const [loading,setLoading]= useState(false);
    const [session, setSessions] = useState([]);

    const fetchSessions=async ()=>{
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
                console.log(Sessions);
            });
    }
    useEffect(()=>{
        fetchSessions();
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);


    if(!props.selectedItem){
            return (<h2>Select a doctor ....</h2>);
        }
        return (
            <div>
            {loading?
                    <Loader load={loading}/>
                    :
            <div className="createAppointment">
               <img  src={doctorimg} height="200px" width="200px"/>
                <h1 >Dr.{props.selectedItem.Name}</h1>
                <h2>({props.selectedItem.Specialization})</h2>
                <h2>{props.selectedItem.Hospital}</h2>
                {session.map((item =>
                        <tr>
                            <td key={item.id}>{new Date(item.Time.seconds * 1000).toLocaleDateString("en-US")}</td>
                            <td key={item.id}>{new Date(item.Time.seconds * 1000).toLocaleTimeString("en-US")}</td>
                            <td><Button variant="danger">Book</Button></td>
                        </tr>
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

export default connect(mapStateToProps)(CreateAppointment)