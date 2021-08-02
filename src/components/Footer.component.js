import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSS from './FooterStyling.component.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-again">
                    <ul className="footer-contents">
                        <li>
                            <ul className="footer-column">
                                <li className="footer-subHeader">
                                    <span>Contact Us</span>
                                </li>
                                <li className = "footer-subContent">
                                <i className="fa fa-phone" aria-hidden="true"/> <span></span> <span>123-456-7890</span>
                                </li>
                                <li className = "footer-subContent">
                                <i className="fa fa-envelope"/> <span>placeholder@email.com</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer