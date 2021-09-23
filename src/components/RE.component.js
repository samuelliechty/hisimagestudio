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
                <span>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>

            <h2>Example One</h2>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

            <h2>Example Two</h2>
            <iframe src="https://www.youtube.com/embed/6lWgXDOAJ5s"></iframe>

            <h2>Example Three</h2>
            <iframe src="https://www.youtube.com/embed/No1RhdPh9VU"></iframe>

        </div>
        </>
    )
}

export default RealEstatePage