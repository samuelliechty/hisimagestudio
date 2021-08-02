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

                <div className = "ding-dong-help-div">
                    <a href="/realty" className="realty-button">
                        <h2>Real Estate</h2>
                    </a>
                </div>

                <div className = "other-buttons-help">
                    <ul className="other-buttons">
                        <a href ="/construction">
                            <li>
                                <h2>Construction</h2>
                            </li>
                        </a>

                        <a href ="/specialevents">
                            <li>
                                <h2>Special Events</h2>
                            </li>
                        </a>

                        <a href ="/fun">
                            <li>
                                <h2>For Fun</h2>
                            </li>
                        </a>
                    </ul>
                </div>

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
                    <a href="/contact">
                    <div className = "sub-seller-three">
                        <h2>Contact for Commission</h2>
                    </div>
                    </a>
                </div>

                </div>
                
            </div>
        </>
    )
}

export default HomePage