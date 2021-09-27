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
                <span>At His Image Studio, we love to have fun! We take our drone with us everywhere,<br/>and you may never know where the newest and beautiful images will come from!<br/>Please check this page often to see new and incredible videos from all over the world!</span>
            </div>

            <h2>Our most famous lighthouse here in the Carolinas......<br/>Cape Hatteras Lighthouse on a beautiful morning!</h2>
            <iframe src="https://youtube.com/embed/c46F9mF0wyM?rel=0"></iframe>
            
            <h3>North Carolina has some of the prettiest waterfalls in the United States.<br/>Here is a short compilation of those waterfalls in the<br/>Highlands/Cashiers area of the North Carolina mountains.</h3>
            <iframe src="https://youtube.com/embed/1CIb2uQQUSc?rel=0"></iframe>

            <h3>Only a few miles from His Image Studio home base,<br/>this stunning sunset was captured on the drive home!<br/>And NO, we did NOT stage the boat coming down the lake,<br/>it was just perfect timing and God's providence! Enjoy!</h3>
            <iframe src="https://youtube.com/embed/06kzQ3Sh7Cg?rel=0"></iframe>

            <h2>At His Image Studio - we love the beach!<br/>This morning sunrise was captured at Topsail Beach NC in early 2021.</h2>
            <iframe src="https://youtube.com/embed/3zS_166Fk30?rel=0"></iframe>
        </div>
        </>
    )
}

export default FunPage