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
                <span>From Weddings to Picnics......Family Reunions to Fireworks,<br/>We can capture stunning video that will allow for a lifetime of memories!<br/>No event is too small, if you want incredible video to share with your family or friends, contact us!</span>
            </div>

            <h2>Fireworks in Lenoir NC - July 4th 2021</h2>
            <iframe src="https://youtube.com/embed/In9bvAaypdw?rel=0"></iframe>

            <h2>Family Picnic and fun in the North Carolina mountains!</h2>
            <iframe src="https://youtube.com/embed/85dkTJJMPsI?rel=0"></iframe>

            <div className = "outer-disclaimer">
                <div className = "disclaimer">
                    <span className ="disclaimer-text">
                        <b>Disclaimer:</b> His Image Studio is NOT a full service wedding photographer. We DO NOT possess or have the desire to produce and photograph weddings on our own. Instead, we are thrilled to work WITH a photographer to capture images of outdoor weddings (we will NOT fly drones indoors with large gatherings of people due to insurance regulations). We can work alongside any photographer that needs these services but does not own drone equipment. We would be contracted by the wedding party or photographer, and turn over all images captured during the event, royalty free and without any licensing/restrictions to be used as seen fit. The video files become the sole property of the parties involved, and His Image Studio does not retain any rights to the finished files. Please contact us with any questions, His Image Studio would be honored to assist in capturing lifetime videos of your special day!
                    </span>
                </div>
            </div>

        </div>
        </>
    )
}

export default SpecialEventsPage