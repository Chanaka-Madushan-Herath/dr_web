import React, {useEffect, useState} from 'react';
import './Search.css';
import SearchResults from "../SearchResults/SearchResults";
import {Link} from "react-router-dom";
import fire from "../../config/Fire";



const Search =()=> {

    const [specialization,setSpecialization]=useState('');
    const [component,setComponent]=useState(false);
    const [result, setResult] = useState([]);

    const  specializationHandleChange =e =>{
        setSpecialization(e.target.value.toLowerCase())
    }
    const search=e=>{
        e.preventDefault();
        fire.firestore().collection("doctors").orderBy('Specialization')
            .startAt(specialization)
            .endAt(specialization + '\uf8ff')
            .get().then(response => {
            const Results = [];
            response.forEach(document => {
                const Result = {
                    id: document.id,
                    ...document.data()
                };
                Results.push(Result);
            });
            setResult(Results)
            console.log(Results);
        })
        setComponent(true);
    }

    return(
        <div >
            {component ?
                <div>
                    <SearchResults  Results={result}/>
                </div>
                :
                <div className="search">
                    <form >
                        <input type="text"
                               className="regField"
                               placeholder="Specialization"
                               value={specialization}
                               onChange={specializationHandleChange}
                               name="specialization"
                        />
                        <Link to="/SearchResults"><input className="submitBtn" type="submit" onClick={search} value="Search" />
                        </Link>
                    </form>
                </div>
                }
            }

        </div>

    );
}

export default Search ;