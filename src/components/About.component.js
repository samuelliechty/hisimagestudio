import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CSS from './AboutStyling.component.css'
import SwansonMiniThinClip from './video/newBackgroundEdit.mp4'


function AboutPage() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="about-about-page">
                <div className="about-spacer" />
                <video playsInline autoPlay loop muted id="HIS-video-two">
                    <source src={SwansonMiniThinClip} type="video/mp4" />
                </video>

                <div className="about-collection">
                    <div className="about-seller-two">
                        <div className="about-sub-seller-two">
                            <h1>Meet Todd and His Image Studio</h1>
                            <h2>Meets Your Video Needs</h2>
                        </div>
                    </div>

                    <div className="about-seller-three">
                        <a href="/contact">
                            <div className="about-sub-seller-three">

                                <h2>Commissioning</h2>

                            </div>
                        </a>
                    </div>

                </div>

                <div className="about-about-container">
                    <img src="./assets/ToddBioPhoto.jpeg"></img>

                    <div className="about-bio">
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

export default AboutPage