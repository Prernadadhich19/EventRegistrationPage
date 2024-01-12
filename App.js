
import './App.css';

//for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PgFOF from './Components/PgFOF';
import UserProfile from './Components/UserProfile'
import About from './Components/About';
import Event1 from './Components/Event1';
import Event2 from './Components/Event2';
import Register from './Components/Register';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/event1" element={<Event1 />} />
        <Route exact path="/event2" element={<Event2 />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
