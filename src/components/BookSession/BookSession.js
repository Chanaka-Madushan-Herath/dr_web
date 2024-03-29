import React, {Component, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import doctorimg from '../../Assests/doctor.png';
import Loader from "../Loader/Loader";
import fire from "../../config/Fire";
import './BookSession.css';
import {Link} from "react-router-dom";

const BookSession =(props)=> {
    const currentUser = fire.auth().currentUser;
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Address: '',
        Tp: ''
    });


    const fetchUser = async () => {
        const docRef = fire.firestore().collection("users").doc(currentUser.uid).get()
        docRef.then((snapshot) => {
            setUser(snapshot.data())
        });
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    if (!props.selectedItem) {
        return (
            <Link to={"/dr_web"}><h2>Select a doctor ....</h2></Link>

        );
    }

    const detailsHandleChange = (event) => {

        event.target.value == "Myself" ?
            fetchUser()

            :
            setUser({
                Name: '',
                Email: '',
                Address: '',
                Tp: ''
            })


    }
    const handleChange = e => {

        setUser({...user, [e.target.name]: e.target.value})
    }

    const book = async (e) => {
        const ref = await fire.firestore().collection('Reservations').doc()
        ref.set({
            Name: user.Name,
            Email: user.Email,
            Address: user.Address,
            Tp: user.Tp,
            Doctor: props.selectedItem.Name,
            Specialization: props.selectedItem.Specialization,
            Hospital: props.selectedItem.Hospital,
            Time: props.BookDoctor.Time

        });
        const docRef = fire.firestore().collection("users").doc(currentUser.uid).collection("bookings").doc()
        docRef.set({
            Reservation_ID: ref.id
        })


    }

    return (
        <div>
            {loading ?
                <Loader load={loading}/>
                :
                <div className={"BookSession"}>
                    <div>
                        <img src={doctorimg} height="200px" width="200px"/>
                        <h1>Dr.{props.selectedItem.Name}</h1>
                        <h2>({props.selectedItem.Specialization})</h2>
                        <h2>{props.selectedItem.Hospital}</h2>
                        <h2>{new Date(props.BookDoctor.Time.seconds * 1000).toLocaleDateString("en-US")} {new Date(props.BookDoctor.Time.seconds * 1000).toLocaleTimeString("en-US")}</h2>

                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div>
                        <form>

                            <label className={"label"}>
                                Appointment for:
                                <select onChange={detailsHandleChange}>
                                    <option value="Other">Other</option>
                                    <option value="Myself">Myself</option>
                                </select>
                            </label>
                            <input type="text"
                                   className="regField"
                                   placeholder="Your Name"
                                   value={user.Name}
                                   onChange={handleChange}
                                   name="Name"/>
                            <input type="text"
                                   className="regField"
                                   placeholder="Email"
                                   value={user.Email}
                                   onChange={handleChange}
                                   name="Email"/>
                            <input type="text"
                                   className="regField"
                                   placeholder="Your Address"
                                   value={user.Address}
                                   onChange={handleChange}
                                   name="Address"/>

                            <input type="text"
                                   className="regField"
                                   placeholder="Your Phone Number"
                                   value={user.Tp}
                                   onChange={handleChange}
                                   name="Tp"
                            />
                            <Link to={"/dr_web"}><input className="submitBtn" type="submit" onClick={book}
                                                        value="BOOK"/></Link>
                        </form>
                    </div>
                </div>

            }
        </div>
    )
}


function mapStateToProps(state) {
    return {
        selectedItem: state.selectedItem,
        BookDoctor: state.BookDoctor
    }
}

export default connect(mapStateToProps)(BookSession)
