import React, {useEffect, useState} from 'react';
import './SearchResults.css';
import Loader from "../Loader/Loader";
import {Button, Image} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectItem} from "../../Action/BookAction";
import doctorimg from '../../Assests/doctor.png';
import { RiCloseCircleFill } from 'react-icons/fa';


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
                    <Button className="btn"variant="danger"  onClick={cancel}><RiCloseCircleFill/> </Button>
                    <Link to={"/dr_web/Create Appointment"}>

                    {props.Results.map((item =>

                       <div className="item"  onClick={() => props.selectItem(item)}>
                           <Image src={doctorimg}height="50px" width="50px"/>
                           <div clasename="details">
                               <div className="doctorName">Dr.{item.Name}</div>
                               <div className="hospital"> {item.Hospital}</div>
                       </div>
                           <Button  variant="danger"> Chanel </Button>
                       </div>

                    ))}
                    </Link>


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