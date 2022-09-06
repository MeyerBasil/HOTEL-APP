import { Route, Routes } from "react-router-dom"
import './App.css';
import Banner from './components/Banner'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import Contacts from "./components/Contacts";
// import Image from './assets/Narre.jpg';
import Register from "./components/Register";
import ReservationForm from "./components/ReservationForm";
import {addDoc, collection, getDocs} from "firebase/firestore";


import {db} from './components/config/firebase'



function App() {


  const Book = (fullname,email,people,checkin,checkout,number) => {

    const collectionRef = collection(db, 'Book');

    const AddBookings={
      fullname:fullname,
      email:email,
      people:people,
      checkin:checkin,
      checkout:checkout,
      number:number
    };
    addDoc(collectionRef, AddBookings).then(()=>{
      alert('booked successfully')
    }).catch((error)=>{
      console.log(error);
    })
  }




  return (
    <div className="App">
      
      
      <Navbar/><br/><br/><br/><br/>
      <Banner/><br/><br/><br/><br/>
      <Rooms/><br/><br/><br/><br/>
      <ReservationForm/><br/><br/><br/>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={< Register/>} />
    



      </Routes>
    </div>
  );
}

export default App;
