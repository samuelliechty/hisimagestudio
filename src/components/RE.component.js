import React from 'react'
import {Link} from 'react-router-dom'
import CSS from './REStyling.component.css'

function RealEstatePage() {
    return (
        <>
        <div className="realty-page">
            <div className="realty-spacer"></div>

            <div className="realty-heading">
                <h1>Welcome to His Image Studio Real Estate Services</h1>
                <span>We provide a full range of Real Estate Photography and Videography.<br/>Watch our video below to see some examples of our work.</span>
            </div>

            <h2></h2>
            <iframe src="https://youtube.com/embed/UEWrNMZhda0?rel=0"></iframe>

            <h2>Beautiful property located on the barrier islands of North Carolina</h2>
            <iframe src="https://youtube.com/embed/sor04U5ZAGc?rel=0"></iframe>

            <h2>Topsail Beach North Carolina - from a unique angle and perspective!</h2>
            <iframe src="https://youtube.com/embed/WQlmoY21gRI?rel=0"></iframe>

        </div>
        </>
    )
}

export default RealEstatePage