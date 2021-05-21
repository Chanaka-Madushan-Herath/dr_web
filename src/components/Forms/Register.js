import React, {useState} from 'react';
import fire from '../../config/Fire';
import './Login.css';
import {Alert, Image} from 'react-bootstrap'
import profile from "../../Assests/user_profile.png";

const Register =()=> {
    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
        displayName: '',
        tp: '',
        fireErrors: '',
        image:null,
        progress:0
    });

   const register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(allValues.email, allValues.password).then((user) => {

            const currentUser = fire.auth().currentUser;
            const image = allValues.image;

            fire.storage().ref('images/').child(currentUser.uid).put(image).then() .catch((error) => {

                setAllValues({...allValues, fireErrors: error.message})
                console.log("photo didnt save")

            });
            currentUser.updateProfile({
                displayName: allValues.displayName
            }) .catch((error) => {

                setAllValues({...allValues, fireErrors: error.message})

            });


            const ref=fire.firestore().collection('users')
                ref.doc(currentUser.uid).set({
                    Name: allValues.displayName,
                    Email: allValues.email,
                    Address: allValues.address,
                    Tp: allValues.tp,
                    Password: allValues.password
                })
        })
        .catch((error) => {

            setAllValues({...allValues, fireErrors: error.message})

        });
    }
    const handleChangeImage = e => {
        setAllValues({...allValues, image: e.target.files[0]})
    }

   const handleChange = e => {

       setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    let profilePic = allValues.image ? URL.createObjectURL(allValues.image) : profile ;
    let errorNotification = allValues.fireErrors ?
            (   <Alert variant="danger"> {allValues.fireErrors} </Alert> ) : null;


        return (
            <div className="container">

                {errorNotification}
                <form >

                    <Image src={ profilePic} alt="profile" width="150px" height="150px"roundedCircle />
                    <input type="file"
                           onChange={handleChangeImage}
                    />
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        value={allValues.displayName}
                        onChange={handleChange}
                        name="displayName"
                        />
                         <input type="text"
                        className="regField"
                        placeholder="Your Address"
                        value={allValues.address}
                        onChange={handleChange}
                        name="address"
                        />
                         <input type="text"
                        className="regField"
                        placeholder="Your Phone Number"
                        value={allValues.tp}
                        onChange={handleChange}
                        name="tp"
                        />
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        value={allValues.email}
                        onChange={handleChange}
                        name="email"
                        />
                    <input
                        className="regField"
                        placeholder="Pasword"
                        value={allValues.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                    />
                    <input className="submitBtn" type="submit" onClick={register} value="REGISTER" />
                </form>
            </div>
        );
    }
export default Register;