import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div >
    <Navbar/>
    <div className="card text-center" >
  <div style={{color: '#ffbb00',fontWeight:'800',fontSize:'50px'}}>
    About Us
  </div>
  <div className="card-body">
    <p className="card-text" style={{color: '#ffbb00'}}>Welcome, your gateway to unforgettable experiences! 
    We understand the power of bringing people together and the joy that comes from creating lasting memories. 
    Our mission is to simplify the event registration process, making it as seamless and enjoyable as the events 
    we help you discover.
    Discover. Connect. Register. Let’s make every event memorable.</p>
    <p className="card-text" style={{color: '#ffbb00',fontWeight:'600',fontSize:'30px'}}>
     Key feature:<br/></p>
     <p className="card-text" style={{color: '#ffbb00'}}>
     User Friendly Interface<br/>
     User Regustration<br/>
     User Login<br/>
     Event Registration <br/>
     Created by Prerna Dadhich</p>
  </div>
</div>

<Footer/>
</div>
  )
}

export default About