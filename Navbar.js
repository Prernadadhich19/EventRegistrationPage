import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.css'
import profilelogo from '../Components/assets/profilelogo.png'
// import applogo from '../Components/assets/applogo.png'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import About from './About'
import { Button } from 'react-bootstrap'

const Navbar = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();
    // if (loggeduser) { console.log(loggeduser[0]) }



    const navigate = useNavigate()
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login")
        })
    }




   

   

    return (
        <div>
            <div className='navbar'>
                <div className="LeftContainer">
                   <h4> Event Registration</h4>
                </div>
                <div className="RightsContainer">
                    {!loggeduser && <nav>
                        <Link to='/' ><button>Home</button></Link>
                        <Link to ='/about'><button>About</button></Link>
                        <Link to='/signup'><button>Register</button></Link>
                        <Link to='/login'><button>Login</button></ Link >
                        <Link to="/userprofile">
                            <img src={profilelogo} className='profile-icon' />
                        </Link>
                    </nav >}


                    {loggeduser && <nav>
                        <Link to='/' ><button>Home</button></Link>

                        
                        <Link to ='/about'><button>About</button></Link>
                        <Link to="/userprofile">
                            <img src={profilelogo} className='profile-icon' />
                        </Link>
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>

                    </nav >}
                </div>
            </div>
            
        </div>
    )
}

export default Navbar