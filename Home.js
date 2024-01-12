import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

import './Home.css'
import Footer from './Footer'
import Events from './Events'
const Home = () => {

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

    return (
        <div>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Events></Events>
            <Footer></Footer>
        </div>
    )
}

export default Home