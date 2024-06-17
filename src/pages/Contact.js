import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id="contact">
            <hr/>
            <h1>Let's Connect!</h1>
            <div className="about-block text-container">
                <form action="https://formspree.io/f/mvoeeyvr" method="POST">
                    <div class="input-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;