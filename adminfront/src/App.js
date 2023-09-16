import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar";
import Home from './pages/Home';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Bus1 from './pages/FR1';
import Bus2 from './pages/FR2';
import Bus3 from './pages/FR3';
import Bus4 from './pages/FR4';
import Bus5 from './pages/FR5';
import Bus6 from './pages/FR6';
import Bus7 from './pages/FR7';
import Bus8 from './pages/FR8';
import Bus9 from './pages/FR9';
import Bus10 from './pages/FR10';
import Props from './Component/Props';
import House from './Component/House';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PlanyourJourney from './pages/PlanyourJourney';



function App() {

  return (
    <div>
   
<Router>

<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}> </Route>
  <Route path='/Aboutus' element={<Aboutus/>}> </Route>
  <Route path='/Plan your Journey' element={<PlanyourJourney/>}> </Route>
  <Route path ="/Bus1" element ={<Bus1/>}></Route>
 <Route path ="/Bus2" element ={<Bus2/>}></Route>
 <Route path ="/Bus3" element ={<Bus3/>}></Route>
 <Route path ="/Bus4" element ={<Bus4/>}></Route>
 <Route path ="/Bus5" element ={<Bus5/>}></Route>
 <Route path ="/Bus6" element ={<Bus6/>}></Route>
 <Route path ="/Bus7" element ={<Bus7/>}></Route>
 <Route path ="/Bus8" element ={<Bus8/>}></Route>
 <Route path ="/Bus9" element ={<Bus9/>}></Route>
 <Route path ="/Bus10" element ={<Bus10/>}></Route>
  <Route path ="/Signup" element ={<Signup/>}></Route>
 <Route path ="/Login" element ={<Login/>}></Route> 
 <Route path ="/Profile" element ={<Profile/>}></Route> 




</Routes>





</Router>






 {/* <Props/>
 <House/> */}


    </div>
  );
}

export default App;
