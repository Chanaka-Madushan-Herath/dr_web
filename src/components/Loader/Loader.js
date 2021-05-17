import FadeLoader from "react-spinners/FadeLoader";
import React from "react";
import  './Loader.css'

const Loader =(props)=>{
    return(
        <div className="loader">
        <div >
            <FadeLoader color={'#36D7B7'} loading={props.load} size={50} />
        </div>
        <div>
            <h1>Please Wait...!</h1>
        </div>
    </div>
    )
}
export default Loader;
