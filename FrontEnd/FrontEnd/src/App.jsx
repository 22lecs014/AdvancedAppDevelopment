// import { useState } from 'react'
import './assets/css/App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Signup';
import Home from './components/Home';
import Form from './components/AdForm';
// import Courses from './components/Course';
import Display from './components/Card';
import GetCol from './components/GetCol';
import RegistrationForm from './components/AdForm';
import FAQPage from './components/Faq';
import UserDetails from './components/Admin/UserDetails';
import UserProfile from './components/Profile';
import AdminProfile from './components/Admin/AdminProfile';
import CourseDetails from './components/Admin/CousreDetails';
import ApplicantDetails from './components/Admin/ApplicantDetails';
import LogAdmin from './components/Admin/AdminLogin';
import RegistrationForm1 from './components/AdFormA';
import FeedForm from './components/FeedBack';
import PrivacyPolicy from './components/PrivacyPolicy';
import Course from './components/CourseCard';
import ContactUsPage from './components/Contactus';
import AboutUsPage from './components/Aboutus';
function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/form" exact element={<Form/>} />
          <Route path="/form1" exact element={<RegistrationForm1/>} />
          <Route path="/profile" exact element={<UserProfile/>} />
          <Route path="/userdetails" exact element={<UserDetails/>} />
          {/* <Route path="/course" exact element={<Courses/>} /> */}
          <Route path="/college" exact element={<Display/>} />
          <Route path="/getcol" exact element={<GetCol/>} />
          <Route path="/form" exact element={<RegistrationForm/>} />
          <Route path="/faq" exact element={<FAQPage/>} />
          <Route path="/adminp" exact element={<AdminProfile/>} />
          <Route path="/coursedetails" exact element={<CourseDetails/>} />
          <Route path="/applicantdetails" exact element={<ApplicantDetails/>} />
          <Route path="/adminlogin" exact element={<LogAdmin/>} />
          <Route path="/fd" exact element={<FeedForm/>} />
          <Route path="/privacy" exact element={<PrivacyPolicy/>} />
          <Route path="/course" exact element={<Course/>} />
          <Route path="/contact" exact element={<ContactUsPage/>} />
          <Route path="/about" exact element={<AboutUsPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;