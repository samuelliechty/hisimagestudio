import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CSS from './ContactStyling.component.css'

function ContactPage() {

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_mj7bir5', 'template_0jw6pnk', e.target, 'user_hdraTPK4isY0TxmafGBA0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    const { register, handleSubmit, watch, errors } = useForm();
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


                <form id='contact-form' onSubmit={sendEmail} className="form">
                    <div className="almost-all">
                        <div className="form-group-one">
                            <div className="sub-one">
                                <div className="dark-arts">
                                    <span>Full Name</span>
                                    <input type='text' name='from' {...register("from", { required: true, maxLength: 16 })} placeholder='Full Name' className="name-input" required="true" />
                                </div>

                                <div className="dark-arts">
                                    <span>Email</span>
                                    <input className='email-input' type='email' name='email' {...register("email", { required: true, maxLength: 256 })} placeholder='example@email.com' required="true" />
                                </div>

                                <div className="dark-arts">
                                    <span>Phone #</span>
                                    <input className='phone' type='tel' name='phonearea' required="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter in the format XXX-XXX-XXXX" {...register("phonearea", { required: true })} placeholder='123-456-7890' minLength="10" maxLength="12" required="true" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group-two">
                            <div className="sub-two">

                                <textarea name='message' className="textarea-control" {...register("message", { required: true, maxLength: 1500 })} placeholder='Message' maxLength="1000" required="true" />

                            </div>
                        </div>
                    </div>

                    <div className="submit-arts">
                        <input type='submit' value='Submit' className="submit-button" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactPage