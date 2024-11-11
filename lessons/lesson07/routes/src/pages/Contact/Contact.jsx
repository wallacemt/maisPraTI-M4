import { useNavigate } from "react-router-dom";
import './index.css'
function Contact() {
    const navigate = useNavigate()
    return (
        <div className="contact">
            <h1>Contact Page</h1>
            <p className="contact_description">This is the contact page. Here you can find more information about how to contact us.</p>
            <form className="contact_form">
                <label className="contact_label">
                    Name:
                    <input className="contact_input" type="text" name="name" placeholder="Enter your name" />
                </label>
                <br />
                <label className="contact_label">
                    Email:
                    <input className="contact_input" type="email" name="email" placeholder="Enter your email" />
                </label>
                <br />
                <label className="contact_label">
                    Message:
                    <textarea className="contact_textarea" name="message"></textarea>
                </label>
                <br />
                <input className="contact_submit" type="submit" value="Send" />
            </form>
            <button className="contact_button" onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}

export default Contact

