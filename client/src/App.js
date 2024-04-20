import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import Login and Register components
import Login from './login.js';
import Register from './register.js';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul className="nav-flex-row">
                        <li className="nav-item">
                            <a className='linker' href="#about-details">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className='linker' to="/login">Login</Link> {/* Link to the Login component */}
                        </li>
                        <li className="nav-item">
                            <Link className='linker' to="/register">Register</Link> {/* Link to the Register component */}
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
                    <Route path="/register" element={<Register />} /> {/* Route to the Register component */}
                </Routes>
            </div>  

            <section className="section-intro" id="about">
                <header>
                    <h1>Fooddddie</h1>
                    <p></p>
                    <h4>The Restaurant of your choice</h4>
                </header>
            </section>

            <section className="about-section" id="about-details">
                <article>
                    <p>
                        The atmosphere at Fooddddie is casual and relaxed.
                        The restaurant is decorated in a modern style,
                        with exposed brick walls and Edison bulbs.
                        The dining room is large and spacious,
                        with plenty of room for groups of all sizes.
                        There is also a patio that is perfect for dining al fresco on warm days.
                    </p>
                </article>
            </section>

            <div id="booking-section">
                <div className="container">
                    <div className="row-flex">
                        <div className="opening-time">
                            <h3>Opening times</h3>
                            <p>
                                <span>Monday—Thursday: 9:00 — 22:00</span>
                                <span>Friday—Sunday: 10:00 — 21:00 </span>
                            </p>
                        </div>
                        <div className="contact-address">
                            <h3>Contact</h3>
                            <p>
                                <span>hello@pawpeople.in</span>
                                <span>Neelbadh, Bhopal</span>
                                <span>Madhya Pradesh, India</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
