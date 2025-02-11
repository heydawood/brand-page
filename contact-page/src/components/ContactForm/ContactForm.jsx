import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <>

            <section className={`${styles.container} container`}>

                <div className={`${styles.contact_form}`}>

                    <div className={styles.top_btn}>

                    <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px'/>}/>
                    <Button text='VIA CALL' icon={<IoCall fontSize='24px'/>}/>
                    </div>
                    <Button isOutline={true} text='VIA EMAIL FORM' icon={<MdEmail fontSize='24px'/>}/>

                    <form action="">

                        <div className={styles.form_control}>

                        <label htmlFor="name">Name</label>
                        <input type="text" name='name'/>

                        </div>

                        <div className={styles.form_control}>

                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'/>

                        </div>
                        <div className={styles.form_control}>

                        <label htmlFor="text">Message</label>
                        <textarea rows='8' name='text'/>

                        </div>
                        <div style={{display:'flex', justifyContent:'end'}}>

                        <Button text='SUBMIT'/>
                        </div>

                    </form>

                </div>


                <div className={`${styles.contact_image}`}>
                    <img src="contact.svg" alt="contact image" />
                </div>

            </section>

        </>
    )
}

export default ContactForm
