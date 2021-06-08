import React, {useEffect, useState} from 'react';
import './Bookings.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";

const Bookings =()=> {
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
                                <tr>
                                    <td >{item.id}</td>
                                    <td >{item.Doctor}</td>
                                    <td >{new Date(item.Time.seconds * 1000).toLocaleDateString("en-US")} </td>
                                    <td > {new Date(item.Time.seconds * 1000).toLocaleTimeString("en-US")}</td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>

    );
}

export default Bookings ;