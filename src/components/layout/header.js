import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'

class Header extends Component {
    render() {
        return (
            <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="site-logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="nav-switch">
                                <i className="fa fa-bars" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <a href className="site-btn header-btn">Login</a>
                            <nav className="main-menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="courses.html">Courses</a></li>
                                    <li><a href="blog.html">News</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header