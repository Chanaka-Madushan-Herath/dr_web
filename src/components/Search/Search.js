import React, {useEffect, useState} from 'react';
import './Search.css';
import SearchResults from "../SearchResults/SearchResults";
import {Link} from "react-router-dom";
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";



const Search =()=> {

    const [doctor,setDoctor]=useState('');
    const [component,setComponent]=useState(false);
    const [result, setResult] = useState([]);
    const [option,setOption]=useState([]);
    const [loading,setloading]= useState(false);

    const  doctorHandleChange =e =>{
        setDoctor(e.target.value)
    }

    const fetchDoctors =async ()=>{
        fire.firestore().collection("doctors").orderBy('Name').get()
            .then(response => {
                const options = [];
                response.forEach(document => {
                    const option = {
                        Name: document.data().Name
                    };
                    options.push(option);
                });
                setOption(options);
            })
    }

    const search=e=> {

        fire.firestore().collection("doctors").orderBy('Name')
            .startAt(doctor)
            .endAt(doctor + '\uf8ff')
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
        })
        setComponent(true);
        e.preventDefault();
    }

    useEffect(()=>{
        fetchDoctors();
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

            <div>{component ?
                <div>
                    <SearchResults  Results={result}/>
                </div>
                :
                    <form className="search" >

                        <label>
                            Pick your doctor :
                            <select value={doctor} onChange={doctorHandleChange} >
                                <option value="">Show all doctors</option>
                                {option.map((item =>
                                    <option value={item.Name}>{item.Name}</option>

                                ))}
                            </select>
                        </label>
                        <Link to="/dr_web/SearchResults"><input className="submitBtn" type="submit" onClick={search} value="Search" />
                        </Link>
                    </form>

            }
            

        </div>
            }
        </div>
    );
}

export default Search ;