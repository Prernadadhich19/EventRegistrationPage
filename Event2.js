import React from 'react';
import { Link } from 'react-router-dom';
import Image from './assets/event1.jpg';
import Navbar from './Navbar'
import Footer from './Footer'
const TechnicalSymposiumDetails = () => {
    const faqList = [
        { question: 'What is the Freshers Party about?', answer: 'The Freshers Party is a festive event organized to welcome new students to the college community, providing an opportunity to socialize, make friends, and enjoy the beginning of their academic journey.' },
        { question: 'When and where is the Freshers Party?', answer: 'The Freshers Party details, including date and venue, will be communicated through official college channels. Keep an eye on notices, social media, or college websites for updates.' },
        { question: 'Do I need to register for the Freshers Party?', answer: 'Typically, no pre-registration is required for the Freshers Party. All new students are encouraged to attend and participate in the welcoming festivities.' },
        { question: 'Is there any dress code for the Freshers Party?', answer: 'While there may not be a strict dress code, students are encouraged to dress comfortably and can choose to adhere to any theme or specific guidelines communicated by the organizers.' },
        { question: 'What activities can I expect at the Freshers Party?', answer: 'The Freshers Party will include a variety of activities such as ice-breaking games, cultural performances, music, and opportunities to connect with fellow students. It is a chance to have fun and make lasting memories.' },
        { question: 'How can I get involved in organizing the Freshers Party?', answer: 'If you are interested in contributing to the organization of the Freshers Party, reach out to the student council, event committees, or designated organizers to express your interest and inquire about available opportunities.' },
      ];

  const imageStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto',
  };

  return (
<>
<Navbar/>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={Image} alt="Freshers Party" style={imageStyle} />
        </div>
        <div className="col-md-6">
          <h2>Freshers party</h2>
          <p>
          Hey newcomers! Ready to turn the page and start a new chapter? Join us at the Freshers Party and let's write some unforgettable stories together!
          </p>
          <p>

          Ice-Breaking Games<br/>
          Welcome Speech<br/>
          Cultural Performances<br/>
          Themed Costume Party<br/>
          DJ Night/Dance Party<br/>
          Photo Booths<br/>
</p>
<p style={{color: '#ffbb00',fontWeight:'400',fontSize:'20px'}}>
Venue: Arya college of engineering and IT, Kukas , Jaipur
Hosted on : 27 january 2024
</p>
          
          <Link to="/">
            <button className="btn btn-warning">Go Back</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary m-2">Register</button>
          </Link>
        </div>
      </div>

      <hr className="my-4" />

      <div className="row mt-4">
        <div className="col-md-12">
          <h3 style={{color: '#ffbb00'}}>FAQs</h3>
          <ul className="list-group">
            {faqList.map((faq, index) => (
              <li key={index} className="list-group-item">
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );

};

export default TechnicalSymposiumDetails;
