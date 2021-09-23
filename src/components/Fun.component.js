import React from 'react'
import {Link} from 'react-router-dom'
import CSS from './FunStyling.component.css'

function FunPage() {
    return (
        <>
        <div className="fun-page">
            <div className="fun-spacer"></div>

            <div className="fun-heading">
                <h1>Welcome to His Image Studio For Fun</h1>
                <span>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>

            <h2>Example One</h2>
            <iframe src="https://www.youtube.com/embed/djV11Xbc914"></iframe>
            
            <h2>Example Two</h2>
            <iframe src="https://www.youtube.com/embed/k_B_n-Rbros"></iframe>

            <h2>Example Three</h2>
            <iframe src="https://www.youtube.com/embed/oHSVbgGjsUA"></iframe>

        </div>
        </>
    )
}

export default FunPage