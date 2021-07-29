import React from 'react'
import { Link } from 'react-router-dom'
import CSS from './HomeStyling.component.css'
import SwansonVideo from './video/swansonSiteEdit.mp4'
import SwansonMiniClip from './video/swansonMiniClipWithFade.mp4'
import SwansonMiniThinClip from './video/swansonMiniClipThin.mp4'

function HomePage() {
    return (
        <>
            <div className="home-page">
                <div className = "spacer"/>
                <video autoPlay loop muted>
                    <source src={SwansonVideo} type ="video/mp4"/>
                    <source src={SwansonMiniClip} type ="video/mp4"/>
                </video>
            
                <div className="seller-one">
                    <div className = "sub-seller-one">
                        <h1>Professional Grade Videography</h1>
                        <h2>Presented In Beautiful 4K Resolution</h2>
                    </div>
                </div>

                
                
                <video autoPlay loop muted>
                    <source src={SwansonMiniClip} type ="video/mp4"/>
                </video>

                <video autoPlay loop muted>
                    <source src={SwansonMiniThinClip} type ="video/mp4"/>
                </video>

                <div className = "collection">
                <div className="seller-two">
                    <div className = "sub-seller-two">
                        <h1>His Image Studio</h1>
                        <h2>Meets Your Video Needs</h2>
                    </div>
                </div>
                
                <div className="seller-three">
                    <a href="https://www.w3schools.com">
                    <div className = "sub-seller-three">
                        <h2>Contact for Commission</h2>
                    </div>
                    </a>
                </div>

                </div>

                <div className="seller-four">
                    <h1>Explore More of Our Content</h1>
                    <ul>
                        <a href ="https://www.w3schools.com">
                        <li className = "sub-seller-four">
                            <h2>Real Estate</h2>
                        </li>
                        </a>

                        <a href ="https://www.w3schools.com">
                        <li className = "sub-seller-four">
                            <h2>Construction</h2>
                        </li>
                        </a>

                        <a href ="https://www.w3schools.com">
                        <li className = "sub-seller-four">
                            <h2>Special Events</h2>
                        </li>
                        </a>

                        <a href ="https://www.w3schools.com">
                        <li className = "sub-seller-four">
                            <h2>Just For Fun</h2>
                        </li>
                        </a>
                            
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default HomePage