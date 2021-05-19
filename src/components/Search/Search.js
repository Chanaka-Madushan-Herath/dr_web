import React, {useEffect, useState} from 'react';
import './Search.css';
import SearchResults from "../SearchResults/SearchResults";
import {Link} from "react-router-dom";
import fire from "../../config/Fire";
import Loader from "../Loader/Loader";



const Search =()=> {

    const [specialization,setSpecialization]=useState('');
    const [component,setComponent]=useState(false);
    const [result, setResult] = useState([]);
    const [option,setOption]=useState([]);
    const [loading,setloading]= useState(false);

    const  specializationHandleChange =e =>{
        setSpecialization(e.target.value.toLowerCase())
    }

    const fetchSpecializations =()=>{
        fire.firestore().collection("doctors").orderBy('Specialization').get()
            .then(response => {
                const options = [];
                response.forEach(document => {
                    const option = {
                        Specialization: document.data().Specialization
                    };
                    options.push(option);
                });
                setOption(options);
                console.log(options)
            })
    }

    const search=e=> {

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
        })
        setComponent(true);
        e.preventDefault();
    }

    useEffect(()=>{
        fetchSpecializations();
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
                <div className="search">
                    <form >

                        <label>
                            Pick your doctor Specialization:
                            <select value={specialization} onChange={specializationHandleChange} >
                                {option.map((item =>
                                    <option value={item.Specialization}>{item.Specialization}</option>

                                ))}
                            </select>
                        </label>
                        <Link to="/SearchResults"><input className="submitBtn" type="submit" onClick={search} value="Search" />
                        </Link>
                    </form>
                </div>

            }
            }

        </div>
            }
        </div>
    );
}

export default Search ;