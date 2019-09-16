import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-section spad pb-0">
                <div className="footer-top">
                    <div className="footer-warp">
                        <div className="row">
                            <div className="widget-item">
                                <h4>Contact Info</h4>
                                <ul className="contact-list">
                                    <li>1481 Creekside Lane <br />Avila Beach, CA 931</li>
                                    <li>+53 345 7953 32453</li>
                                    <li>yourmail@gmail.com</li>
                                </ul>
                            </div>
                            <div className="widget-item">
                                <h4>Engeneering</h4>
                                <ul>
                                    <li><a href>Applied Studies</a></li>
                                    <li><a href>Computer Engeneering</a></li>
                                    <li><a href>Software Engeneering</a></li>
                                    <li><a href>Informational Engeneering</a></li>
                                    <li><a href>System Engeneering</a></li>
                                </ul>
                            </div>
                            <div className="widget-item">
                                <h4>Graphic Design</h4>
                                <ul>
                                    <li><a href>Applied Studies</a></li>
                                    <li><a href>Computer Engeneering</a></li>
                                    <li><a href>Software Engeneering</a></li>
                                    <li><a href>Informational Engeneering</a></li>
                                    <li><a href>System Engeneering</a></li>
                                </ul>
                            </div>
                            <div className="widget-item">
                                <h4>Development</h4>
                                <ul>
                                    <li><a href>Applied Studies</a></li>
                                    <li><a href>Computer Engeneering</a></li>
                                    <li><a href>Software Engeneering</a></li>
                                    <li><a href>Informational Engeneering</a></li>
                                    <li><a href>System Engeneering</a></li>
                                </ul>
                            </div>
                            <div className="widget-item">
                                <h4>Newsletter</h4>
                                <form className="footer-newslatter">
                                    <input type="email" placeholder="E-mail" />
                                    <button className="site-btn">Subscribe</button>
                                    <p>*We don’t spam</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-warp">
                        <ul className="footer-menu">
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
