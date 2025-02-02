import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import CardiologyDetail from './components/CardiologyDetail';
import PediatricsDetail from './components/PediatricsDetail';
import OrthopedicsDetail from './components/OrthopedicsDetail';
import GeneralCheckupsDetail from './components/GeneralCheckupsDetail';
import EmergencyServicesDetail from './components/EmergencyServicesDetail';
import SurgeryDetail from './components/SurgeryDetail';
import Footer from './components/Footer';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLoginPage';
import './App.css';
import './components/NavBar.css';
import Doctors_view from './components/Doctors_view';
import UserAppointments from './components/UserAppointments'; // Import the new component

import { FaHome, FaUserMd, FaClipboardList, FaUsers, FaInfoCircle, FaPhoneAlt, FaCog, FaSignInAlt } from 'react-icons/fa';

// Conditional NavBar rendering based on the route
const ConditionalNavBar = () => {
    const location = useLocation();
    const hideNavBarPaths = ['/admin', '/adminlogin', '/doctors', '/patients_view', '/userappointments']; // Added /userappointments to hide NavBar

    const shouldHideNavBar = hideNavBarPaths.includes(location.pathname);

    if (shouldHideNavBar) {
        return null; // If the path matches, hide the NavBar
    }

    return (
        <nav>
            <ul>
                <li className={location.pathname === '/home' ? 'active' : ''}>
                    <Link to="/home">
                        <FaHome className="icon" /> Home
                    </Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">
                        <FaInfoCircle className="icon" /> About
                    </Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">
                        <FaPhoneAlt className="icon" /> Contact
                    </Link>
                </li>
                <li className={location.pathname === '/services' ? 'active' : ''}>
                    <Link to="/services">
                        <FaCog className="icon" /> Services
                    </Link>
                </li>
                <li className={location.pathname === '/appointments' ? 'active' : ''}>
                    <Link to="/appointments">
                        <FaClipboardList className="icon" /> Appointments
                    </Link>
                </li>
                <li className={location.pathname === '/doctorview' ? 'active' : ''}>
                    <Link to="/doctorview">
                        <FaUserMd className="icon" /> Doctors
                    </Link>
                </li>
            </ul>

            {/* Admin Login Button in the Top-Right Corner */}
            <Link to="/adminlogin" className="admin-login-button">
                <FaSignInAlt className="icon" /> Admin Login
            </Link>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <div className="container">
                <ConditionalNavBar /> {/* Render NavBar conditionally */}

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/cardiology" element={<CardiologyDetail />} />
                    <Route path="/services/pediatrics" element={<PediatricsDetail />} />
                    <Route path="/services/orthopedics" element={<OrthopedicsDetail />} />
                    <Route path="/services/general-checkups" element={<GeneralCheckupsDetail />} />
                    <Route path="/services/emergency-services" element={<EmergencyServicesDetail />} />
                    <Route path="/services/surgery" element={<SurgeryDetail />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/doctorview" element={<Doctors_view />} />
                    <Route path="/userappointments" element={<UserAppointments />} /> {/* Fixed the route */}
                    <Route path="/" element={<Home />} /> {/* Default to Home when no specific route matches */}
                </Routes>

                <Footer /> {/* Render Footer outside of Routes to display on every page */}
            </div>
        </Router>
    );
}

export default App;
