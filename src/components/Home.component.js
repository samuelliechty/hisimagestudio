import React from 'react'
import { Link } from 'react-router-dom'
import CSS from './HomeStyling.component.css'

function HomePage() {
    return (
        <>
            <div className="home-page">
                <div className = "spacer"/>
                <img
                    className="imageTest"
                    src="http://placehold.it/3840x2160"
                    alt="4k image placeholder"
                />
                <div className="seller-one">
                    <div className = "sub-seller-one">
                        <h1>Professional Grade Videography</h1>
                        <h2>Presented In Beautiful 4K Resolution</h2>
                    </div>
                </div>
                <div className = "contentOne">

                </div>
                <img
                        className="imageTest"
                        src="http://placehold.it/3840x2160"
                        alt="4k image placeholder"
                    />
            </div>
        </>
    )
}

export default HomePage