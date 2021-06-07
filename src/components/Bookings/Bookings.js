import React, {useEffect, useState} from 'react';
import './Bookings.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";

const Bookings =()=> {
    const currentUser = fire.auth().currentUser;
    const [loading,setloading]= useState(false);
    const [booking, setBooking] = useState([]);


    const fetchBookings=async ()=>{
        const docRef = fire.firestore().collection("users").doc(currentUser.uid).collection("bookings").get()
            .then(response => {
                const Bookings = [];
                response.forEach(document => {
                    const Booking = {
                        id: document.id,
                        ...document.data()
                    };
                    Bookings.push(Booking);
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
                            <th>Date And Time</th>
                        </tr>
                        <tbody>
                        {booking.map((item =>
                                <tr>
                                    <td key={item.id}>{item.Reservation_ID}</td>

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