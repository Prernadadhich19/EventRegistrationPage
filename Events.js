import React from 'react'
import slide3 from './assets/event2.jpg'
import slide1 from './assets/event1.jpg'
import { Link } from 'react-router-dom'
const Events = () => {
    const style = {
        showmoreBtn: {
          backgroundColor: 'white',
          color: '#ffbb00',
          border: '2px solid #ffbb00',
          padding: '5px',
          borderRadius: '5px',
          marginTop: '10px',
        },
      };
  return (
    <div className="d-flex justify-content-center">
  <div className="card-group m-4 w-75">
    <div className="card m-3">
      <img className="card-img-top" src={slide3} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={{color:'#ffbb00'}}>Technical Symposium</h5>
        <p className="card-text">
        Calling all tech enthusiasts! Get ready to upload knowledge, download insights,
         and install a ton of fun at this year's Technical Symposium. Join us and let the coding adventure begin
        </p>
        <Link to='/Event1'><button style={style.showmoreBtn}>More Details &gt;</button></Link> 

        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card m-3">
      <img className="card-img-top" src={slide1} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={{color:'#ffbb00'}}>Freshers Party</h5>
        <p className="card-text">Hey newcomers! Ready to turn the page and start a new chapter? 
        Join us at the Freshers Party and let's write some unforgettable stories together!</p>
        <Link to='/Event2'><button style={style.showmoreBtn}>More Details &gt;</button></Link> 
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
       
      </div>
    </div>
  </div>
</div>

  )
}

export default Events