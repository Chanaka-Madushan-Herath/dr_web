import React, {useEffect, useState} from 'react';
import './SearchResults.css';
import Loader from "../Loader/Loader";
import {Button, Image} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectItem} from "../../Action/BookAction";
import doctorimg from '../../Assests/doctor.png'

const SearchResults =(props)=> {
    const [loading, setloading] = useState(false);
    const [id, setId] = useState('');


    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);


    const cancel = () => {
        window.location.reload();
    }


    return (
        <div>
            {loading ?
                <Loader load={loading}/>
                :
                <div className="searchResult">
                    <Link to={"/Create Appointment"}>

                    {props.Results.map((item =>

                       <button className="item"  onClick={() => props.selectItem(item)}>
                           <Image src={doctorimg}height="50px" width="50px"/>
                           <div clasename="details">
                               <div className="doctorName">Dr.{item.Name}</div>
                               <div className="hospital"> {item.Hospital}</div>
                       </div>
                           <Button  variant="danger"> Chanel </Button>
                       </button>

                    ))}
                    </Link>
                        <Button className="btn"variant="danger"  onClick={cancel}>Cancel </Button>

                </div>

            }
        </div>
    );
}



function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {selectItem:selectItem},dispatch)
}

export default connect(null,matchDispatchToProps)(SearchResults);