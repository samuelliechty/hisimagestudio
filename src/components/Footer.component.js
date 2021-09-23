import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSS from './FooterStyling.component.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-again">
                    <img src = "./assets/NEW-his-image-studio-logo.png" alt="Logo" className="footer-logo"/>
                    <span>So God created mankind in <em><strong>His</strong></em> own image, in the <em><strong>image</strong></em> of God he created them; Genesis 1:27</span>
                        
                </div>
            </div>
        </>
    )
}

export default Footer