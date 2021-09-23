import React from 'react'
import { Link } from 'react-router-dom'
import CSS from './HomeStyling.component.css'
import SwansonVideo from './video/newBackgroundEdit.mp4'
import SwansonMiniClip from './video/swansonMiniClipWithFade.mp4'
import SwansonMiniThinClip from './video/newBackgroundEdit.mp4'

function HomePage() {
    return (
        <>
            <div className="home-page">

                <div className = "spacer"/>
                <video playsInline autoPlay loop muted id="HIS-video-one">
                    <source src={SwansonVideo} type ="video/mp4"/>
                    
                </video>
            
                <div className="seller-one">
                    <div className = "sub-seller-one">
                        <h1>Professional Videography</h1>
                        <h2>Presented In Beautiful 4K Resolution</h2>
                    </div>
                </div>

                <div className = "ding-dong-help-div">
                    <a href="https://www.youtube.com/watch_popup?v=OSdcyVfi2mM" className="realty-button">
                        <h2>Introduction</h2>
                    </a>
                </div>

                <div className = "other-buttons-help">
                    <ul className="other-buttons">

                        <a href="/realty">
                            <li>
                                <h2>Real Estate</h2>
                            </li>
                        </a>
                        
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
            </div>
        </>
    )
}

export default HomePage