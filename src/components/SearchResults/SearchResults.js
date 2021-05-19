import React, {useEffect, useState} from 'react';
import './SearchResults.css';
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";
import  {Button} from 'react-bootstrap'

const SearchResults =(props)=> {
    const currentUser = fire.auth().currentUser;
    const [loading, setloading] = useState(false);
    const [results, setResults] = useState([]);


    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);


    const cancel =()=>{
        window.location.reload();
    }


    return (
        <div>
            {loading ?
                <Loader load={loading}/>
                :
                <div className="bookings">
                    {props.Results.map((item =>
                            <tr>
                                <td key={item.id}>{item.Name}</td>
                                <td key={item.id}>{item.Hospital}</td>
                            </tr>
                    ))}
                    <div>
                    <Button onClick={cancel} >Cancel </Button>
                    </div>
                </div>

            }
        </div>
    );
}

export default SearchResults ;