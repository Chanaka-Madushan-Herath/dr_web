import React, {useEffect, useState} from 'react';
import './Bookings.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";
import {connect} from "react-redux";
import {viewBooking} from "../../Action/ViewBookings";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";

const Bookings =(props)=> {
    const currentUser = fire.auth().currentUser;
    const [loading,setloading]= useState(false);
    const [booking, setBooking] = useState([]);
    const [bookingDetails,setBookingDetails]=useState([])


    const fetchBookings=async ()=>{
        fire.firestore().collection("users").doc(currentUser.uid).collection("bookings").get()
            .then(response => {
                const Bookings = [];
                response.forEach(document => {
                    const Booking = {
                        id: document.id,
                        ...document.data()
                    };

                    fire.firestore().collection("Reservations").doc(Booking.Reservation_ID).get()
                        .then(response => {
                            const detail={
                                id: response.id,
                                ...response.data()
                            };
                            Bookings.push(detail);
                        })
                });

                setBooking(Bookings)
        });



    }

    useEffect(()=>{
        fetchBookings();
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000);
    },[]);

    return(
        <div >
            {loading?
                <Loader load={loading}/>
                :
                <div className="bookings">
                    <table >
                        <tr>
                            <th>Reference Number</th>
                            <th>Doctor's Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        <tbody>
                        {booking.map((item =>

                                <tr onClick={() => props.viewBooking(item)}>
                                    <td  ><Link to={"/dr-web/View details"}>{item.id}</Link></td>
                                    <td ><Link to={"/dr-web/View details"}>{item.Doctor}</Link></td>
                                    <td ><Link to={"/dr-web/View details"}>{new Date(item.Time.seconds * 1000).toLocaleDateString("en-US")} </Link></td>
                                    <td > <Link to={"/dr-web/View details"}>{new Date(item.Time.seconds * 1000).toLocaleTimeString("en-US")}</Link></td>
                                </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            }
        </div>

    );
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {viewBooking:viewBooking},dispatch)
}

export default connect(null, matchDispatchToProps)(Bookings);