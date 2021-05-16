import React from 'react';
import './Search.css';
import fire from '../../config/Fire';

const Search =()=> {
    var currentUser = fire.auth().currentUser;
       
    return(
        <div className="search">
            <h1>Search</h1>
            <h1>{currentUser.displayName}</h1>
            <h1>{currentUser.uid}</h1>
        </div>

);
}

export default Search ;