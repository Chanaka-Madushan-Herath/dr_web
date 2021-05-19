import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../logo/Logo.js';
import { Button, Image} from 'react-bootstrap'
import './Navbar.css'
import fire from '../../config/Fire';
import profile from '../../Assests/user_profile.png'

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

const logout = () => {
  fire.auth().signOut();
}

export default function Navbar(props) {
  const [url, setUrl] = useState("");
  const  currentUser=fire.auth().currentUser
  const downloadLink = fire.storage().ref("images/").child(currentUser.uid).getDownloadURL()
  downloadLink.then(url => setUrl(url)).catch((error) => {
    setUrl(null)
  });
  return (
    <div>
    <AppBar position="static">
      <Toolbar  className="root">
        <Logo/>
        <Typography variant="h2" className="title">
          E-DOC
        </Typography>
        <Tooltip title="Profile">
          {props.link == null ?
              <Link to ="/Profile"> <Image src={profile }  height="50px"  width ="50px"alt="profile" roundedCircle /></Link>
              :
              <Link to ="/Profile"><Image src={url} height="50px"  width ="50px"alt="profile" roundedCircle /></Link>
          }</Tooltip>

        <Tooltip title="Home">
        <Link to ="/" refresh="true"><Button variant="secondary" >Home</Button></Link>
        </Tooltip>
        <Tooltip title="My Bookings">
        <Link to ="/Bookings"><Button variant="secondary" >My Bookings</Button></Link>
        </Tooltip>
        <Tooltip title="Sign out">
        <Button variant="danger" onClick={logout}>Sign out</Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  </div>
  );
}
