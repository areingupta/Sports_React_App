import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Registration from "./Components/Registration/reg";
import Login from "./Components/Registration/login";
import Sportshome from "./Components/Sports-Home/sports-home";
import Football from "./Components/Sports-Filter/Football/football";
import ScrollToTop from "./scrollToTop";
import DDADW from "./Components/Sports-Filter/Football/Venues/DDADW/ddadw";
import DDADWT from "./Components/Sports-Filter/Tennis/Venues/DDADW/ddadw";
import BGSIPS from "./Components/Sports-Filter/Football/Venues/BGSIPS/bgsips";
import BGSIPST from "./Components/Sports-Filter/Tennis/Venues/BGSIPS/bgsips";
import FZONE from "./Components/Sports-Filter/Football/Venues/FZONE/fzone";
import DDAROHINI from "./Components/Sports-Filter/Football/Venues/DDAROHINI/ddarohini";
import DDAROHINIT from "./Components/Sports-Filter/Tennis/Venues/DDAROHINI/ddarohini";
import ADIDASFOOTD from "./Components/Sports-Filter/Football/Venues/ADIDASFOOTBALL/adidasfootballD";
import VENKINTSCH from "./Components/Sports-Filter/Football/Venues/VENKYINT/venkyintdw";
import BookFootball from "./Components/Sports-Filter/Football/Booking/booking-football";
import BookTennis from "./Components/Sports-Filter/Tennis/Booking/booking-tennis";
import ProtectedRoutes from "./protectedRoutes";
import Profile from "./Components/Profile/profile";
import Tennis from "./Components/Sports-Filter/Tennis/tennis";
import DLTA from "./Components/Sports-Filter/Tennis/Venues/DLTA/dlta";
import SIRIFORT from "./Components/Sports-Filter/Tennis/Venues/SIRIFORT/sirifort";
import SAKETSC from "./Components/Sports-Filter/Tennis/Venues/SAKETSC/saketsc";
import Contact from "./Components/Contact/contact";


function PageRoutes() {
    return(

        <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports-home" element={<Sportshome />} />
        <Route path="/contact" element={<Contact />} />

        {/* TENNIS ROUTES */}

        <Route path="/sports-home/tennis" element={<Tennis />} />
        <Route path="/sports-home/tennis/ddadw" element={<DDADWT />} />
        <Route path="/sports-home/tennis/bgsipsd" element={<BGSIPST />} />
        <Route path="/sports-home/tennis/dltacd" element={<DLTA />} />
        <Route path="/sports-home/tennis/sirifortd" element={<SIRIFORT />} />
        <Route path="/sports-home/tennis/saketscd" element={<SAKETSC />} />
        <Route path="/sports-home/tennis/ddarohinid" element={<DDAROHINIT />} />

        {/* FOOTBALL ROUTES */}

        <Route path="/sports-home/football" element={<Football />} />
        <Route path="/sports-home/football/ddadwd" element={<DDADW />} />
        <Route path="/sports-home/football/bgsipsd" element={<BGSIPS />} />
        <Route path="/sports-home/football/fzoned" element={<FZONE />} />
        <Route path="/sports-home/football/adidasfootballd" element={<ADIDASFOOTD />} />
        <Route path="/sports-home/football/ddarohinid" element={<DDAROHINI />} />
        <Route path="/sports-home/football/venkateshwarIntd" element={<VENKINTSCH />} />


        <Route path="/book-football" element={<BookFootball />} />
        <Route path="/book-tennis" element={<BookTennis />} />


        <Route path="/user-profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        
        
      </Routes>
      
    </Router>
    );
}

export default PageRoutes;