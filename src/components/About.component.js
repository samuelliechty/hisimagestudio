import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CSS from './AboutStyling.component.css'

function AboutPage() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="contact-page">
                <div className="contact-spacer" />
                <div className="contact-text">
                    <h1>
                        Contact
                    </h1>
                    <h2>
                        For Questions or Commission
                    </h2>
                </div>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className="form">
                    
                    <div className="dark-arts">
                        <span>Full Name</span>
                    <input type='text' name='user_name_first' {...register("first-name", { required: true, maxLength: 16 })} placeholder='First' className ="name-input" required="true"/>
                    <input type='text' name='user_name_last' {...register("last-name", { required: true, maxLength: 16 })} placeholder='Last' className ="name-input" required="true"/>
                    </div>

                    <div className="dark-arts">
                        <span>Email</span>
                    <input type='email' name='user_email' {...register("email", { required: true, maxLength: 256 })} placeholder='Email' required="true"/>
                    </div>
                    
                    <div className="dark-arts">
                        <span>Phone Number</span>
                    <input type='tel' name='user_phone' {...register("phone-first-three", { required: true, maxLength: 256 })} placeholder='' maxLength="3" required="true"/>
                    <input type='tel' name='user_phone' {...register("phone-second-three", { required: true, maxLength: 256 })} placeholder='' maxLength="3" required="true"/>
                    <input type='tel' name='user_phone' {...register("phone-last-four", { required: true, maxLength: 256 })} placeholder='' maxLength="4" required="true"/>
                    </div>

                    <div className="dark-arts">
                        
                    <textarea name='message' {...register("message", { required: true, maxLength: 1000 })} placeholder='Message' maxLength="1000" required="true"/>
                        
                    </div>
                    
                    <div className="dark-arts">
                    <input type='submit' value='Send' />
                    </div>

                </form>
            </div>
        </>
    )
}

export default AboutPage