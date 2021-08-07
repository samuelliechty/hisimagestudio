import React from 'react'
import { Link } from 'react-router-dom'
import CSS from './HomeStyling.component.css'
import SwansonVideo from './video/swansonSiteEdit.mp4'
import SwansonMiniClip from './video/swansonMiniClipWithFade.mp4'
import SwansonMiniThinClip from './video/swansonMiniClipWithFade.mp4'

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
                        <h2>De Nobis</h2>
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

                <video playsInline autoPlay loop muted id="HIS-video-two">
                    <source src={SwansonMiniThinClip} type ="video/mp4"/>
                </video>

                <div className = "collection">
                <div className="seller-two">
                    <div className = "sub-seller-two">
                        <h1>Meet Todd and His Image Studio</h1>
                        <h2>Meets Your Video Needs</h2>
                    </div>
                </div>
                
                <div className="seller-three">
                    <a href="/contact">
                    <div className = "sub-seller-three">

                        <h2>Commissioning</h2>
                        
                    </div>
                    </a>
                </div>

                </div>

                <div className="about-container">
                    <img src = "../assets/ToddBioPhoto.jpeg"></img>

                    <div className ="bio">
                    <p>
                    Todd Swanson is the owner and founder of His Image Studio. Started in 1992 upon completion of his
Graphics degree from Clemson University, His Image Studio has evolved over the years to include still
photography, videography and eventually drone photography/videography. As the market for arial
videography has grown over the past few years, and the technology has expanded over the same time
period, His Image Studio now operates multiple drones and provides service across the southeast.
Services include events such as weddings and gatherings, but also business applications such as Real
Estate work and construction documentation. Inspection services of everything from cell phone towers
to power lines are currently provided by His Image Studio. If you need a unique arial photo or video of
your business or organization, His Image Studio is more than capable of providing that breathtaking
image to capture the attention of your viewer.
                    </p>
                    <p>
                    When not flying drones or snapping pictures, Todd enjoys all things orange. His love of Clemson affords
the opportunity to wear orange about everywhere he goes, and share his love for his beloved Tigers.
Todd is also a NC registered beekeeper and owns and operates a large beekeeping business in the North
Carolina mountains. You can check out his beekeeping business at <a href="https://www.TigerTailFarms.buzz">www.TigerTailFarms.buzz</a>.
                    </p>
                    <p>
                    Todd is married with 3 grown children, spread out all over this great nation, and he and his wife enjoy
traveling to see them and this great land!
                    </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HomePage