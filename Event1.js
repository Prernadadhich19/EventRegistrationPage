import React from 'react';
import { Link } from 'react-router-dom';
import technicalSymposiumImage from './assets/event2.jpg';
import Navbar from './Navbar'
import Footer from './Footer'
const TechnicalSymposiumDetails = () => {
  const faqList = [
    { question: 'What is the Technical Symposium about?', answer: 'The Technical Symposium is a tech-centric conference focusing on knowledge exchange, innovation, and collaboration in various technical fields.' },
    { question: 'How can I register for the event?', answer: ' You can register for the Technical Symposium by filling out the registration form on our website or contacting the designated registration team.' },
    { question: 'Is there any registration fee?', answer: 'Yes, there might be a registration fee for the Technical Symposium. Check our website for detailed registration information.' },
    { question: 'What are the event highlights?', answer: ' The Technical Symposium features cutting-edge presentations, workshops, and networking opportunities, showcasing the latest advancements in technology.' },
    { question: 'How can I contact the organizers?', answer: ' For any inquiries, you can reach out to the organizers via the contact details provided on the event website.' },
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
          <img src={technicalSymposiumImage} alt="Technical Symposium" style={imageStyle} />
        </div>
        <div className="col-md-6">
          <h2>Technical Symposium</h2>
          <p>
            Calling all tech enthusiasts! Get ready to upload knowledge, download insights, and install a ton of fun at this year's Technical Symposium. Join us and let the coding adventure begin.
          </p>
          <p>

          Paper presentations<br/>
Poster sessions<br/>
Technical quizzes<br/>
Coding competitions<br/>
Hackathons<br/>
Robotics competitions<br/>
</p>
<p style={{color: '#ffbb00',fontWeight:'400',fontSize:'20px'}}>
Venue: Arya college of engineering and IT, Kukas , Jaipur
Hosted on : 20 january 2024
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
