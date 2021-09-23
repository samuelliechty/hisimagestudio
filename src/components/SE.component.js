import React from 'react'
import {Link} from 'react-router-dom'
import CSS from './SEStyling.component.css'

function SpecialEventsPage() {
    return (
        <>
        <div className="special-events-page">
            <div className="special-events-spacer"></div>

            <div className="special-events-heading">
                <h1>Welcome to His Image Studio Special Events Services</h1>
                <span>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>

            <h2>Example One</h2>
            <iframe src="https://www.youtube.com/embed/Gs069dndIYk"></iframe>

            <h2>Example Two</h2>
            <iframe src="https://www.youtube.com/embed/YxD3pT8C9-A"></iframe>

            <h2>Example Three</h2>
            <iframe src="https://www.youtube.com/embed/MDPeLlMR2D4"></iframe>

        </div>
        </>
    )
}

export default SpecialEventsPage