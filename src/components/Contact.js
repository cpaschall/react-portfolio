import React, { useState } from "react";
// import { validateEmail } from "
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log({inputType, inputValue});

        if (inputType === 'sender') {
            setSender(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)  || !sender) {
            setErrorMessage("Email or Name is invalid");
            return;
        }
        if (!message) {
            setErrorMessage("Message field blank or invalid");
            return;
        }

        setSender("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        alert(`Hello ${sender}, your message has been sent to Cal.  Thank you!`)
    };


    return (
        <section className="container-fluid contact">
            <h2 id="contact-title">contact me</h2>
            <div className="row contact-row" data-contact="hide">
            <div className="contact-info">
                <form
                action="mailto:cpaschall0105@gmail.com"
                method="POST"
                enctype="multipart/form-data"
                id="contact-form"
                >
                <p>
                    <label for="full-name">name:</label>
                    <br />
                    <input
                    value={sender}
                    type="text"
                    className="text-input"
                    name="sender"
                    onChange={handleInputChange}
                    id="full-name"
                    placeholder="name"
                    />
                </p>
                <p>
                    <label for="email">email:</label>
                    <br />
                    <input
                    value={email}
                    type="email"
                    className="text-input"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    placeholder="email"
                    />
                </p>
                <p>
                    <label for="message">message:</label>
                    <br />
                    <textarea
                    value={message}
                    className="text-input"
                    name="message"
                    id="message"
                    onChange={handleInputChange}
                    placeholder="please send me a question or comment!"
                    rows="4"
                    cols=""
                    ></textarea>
                </p>
                <p>
                    <button 
                    type="submit" 
                    id="email-btn"
                    onClick={handleFormSubmit}
                    >send</button>
                </p>
                </form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            </div>
        </section>
    )
}

export default Contact;