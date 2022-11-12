import React from 'react'
import NavBar from './Components/Navbar';
import Student from './Components/Student';
import Login from './Login';
import Class from './Components/Class';
import {BrowserRouter ,Routes, Route } from "react-router-dom";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqNpZiGhh3lqNOX6kYbYfmLTGJRjIlkLg",
  authDomain: "hackhathon-69b70.firebaseapp.com",
  projectId: "hackhathon-69b70",
  storageBucket: "hackhathon-69b70.appspot.com",
  messagingSenderId: "512449210479",
  appId: "1:512449210479:web:e77592bbc81669e430c59a",
  measurementId: "G-CTXQC66Y8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const App = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Student/>} />
            <Route path="/class" element={<Class/>} />
            <Route path="/Login" element={<Login/>} />

          </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App;

