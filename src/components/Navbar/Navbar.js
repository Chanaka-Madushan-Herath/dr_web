import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../logo/Logo.js';
import { Button, Image, Nav,Navbar } from 'react-bootstrap'
import './Navbar.css'
import fire from '../../config/Fire';
import profile from '../../Assests/user_profile.png'

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

const logout = () => {
  fire.auth().signOut();
}

export default function Navibar(props) {
  const [url, setUrl] = useState("");
  const  currentUser=fire.auth().currentUser
  const downloadLink = fire.storage().ref("images/").child(currentUser.uid).getDownloadURL()
  downloadLink.then(url => setUrl(url)).catch((error) => {
    setUrl(null)
  });
  return (
    <div >
    <Navbar className="Navbar" 
    collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand className="logo">  <Logo/></Navbar.Brand>

  <Navbar.Brand className="tittle">
        <Typography variant="h2" className="title">
          E-DOC
        </Typography>
    </Navbar.Brand>

   
    <Nav.Link >
      <Tooltip title="Profile">
          {props.link == null ?
              <Link to ="/dr_web/Profile"> <Image src={profile }  height="50px"  width ="50px"alt="profile" roundedCircle /></Link>
              :
              <Link to ="/dr_web/Profile"><Image src={url} height="50px"  width ="50px"alt="profile" roundedCircle /></Link>
          }</Tooltip>
      </Nav.Link>

  <Navbar.Toggle className="buttons" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link>
      <Tooltip title="Home">
        <Link to ="/dr_web" refresh="true"><Button variant="secondary" >Home</Button></Link>
        </Tooltip>
      </Nav.Link>

      <Nav.Link >
      <Tooltip title="My Bookings">
        <Link to ="/dr_web/Bookings"><Button variant="secondary" >My Bookings</Button></Link>
        </Tooltip>
      </Nav.Link>

      <Nav.Link eventKey={2}>
      <Tooltip title="Sign out">
        <Button variant="danger" onClick={logout}>Sign out</Button>
        </Tooltip>
      </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    
  </div>
  );
}
