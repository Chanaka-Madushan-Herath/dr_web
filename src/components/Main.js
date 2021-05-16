import React, { Component } from 'react';
import './Main.css';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Spinner from '../Assests/loader.gif';
import Home from './Home/Home';
import FadeLoader from "react-spinners/FadeLoader";

export default class Main extends Component {
    state = {
        user: 1,
        loading: true
    }

    componentDidMount(){
      this.authListener();
    }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }

    formSwitcher = (action) => {
        this.setState({formSwitcher: action === 'register' ? true : false});
    }

    render() {
        const form = !this.state.formSwitcher ? <Login /> : <Register />;

        if (this.state.user === 1){
            return (
              <div>
                    <FadeLoader className="ImgSpinner"color={'#36D7B7'} size={50} />
                </div>
            );
        }

        return (
            <div className="main">
                {!this.state.user ? (
                    <div className="mainBlock">
                      {form}
                      {
                        !this.state.formSwitcher ?
                        (<span className="underLine">Not registered? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                          className="linkBtn">Create an account</button>
                        </span>) : (
                          <span className="underLine">Have an account already? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                          className="linkBtn">Sign in here</button>
                        </span>
                        )
                      }
                    </div>
                  ) : <Home/>}
            </div>
        );
    }
}