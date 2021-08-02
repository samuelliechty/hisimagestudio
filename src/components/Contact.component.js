import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CSS from './ContactStyling.component.css'

function ContactPage() {
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
                    
                    <input type='text' name='user_name' {...register("name", { required: true, maxLength: 256 })} placeholder='Name' />

                    <br />
                    
                    <input type='email' name='user_email' {...register("email", { required: true, maxLength: 256 })} placeholder='Email' />
                    
                    <br />
                    
                    <textarea name='message' {...register("message", { required: true, maxLength: 1000 })} placeholder='Message' />
                    
                    <br />
                    
                    <input type='submit' value='Send' />
                </form>
            </div>
        </>
    )
}

export default ContactPage