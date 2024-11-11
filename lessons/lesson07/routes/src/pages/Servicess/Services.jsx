import { Link, useNavigate } from 'react-router-dom';
import './index.css';

function Services() {
    const navigate = useNavigate();

    return (
        <div className="services">
            <h1 className="services_title">Services Page</h1>
            <p className="services_description">This is the services page. Here you can find more information about the services we offer.</p>
            <div className="services_banners">
                <div className="services_banner">
                    <h2>Web Development</h2>
                    <p>Build modern and responsive websites.</p>
                    <Link className="services_link" to="/services/web-development">Learn More</Link>
                </div>
                <div className="services_banner">
                    <h2>Graphic Design</h2>
                    <p>Create visually appealing designs.</p>
                    <Link className="services_link" to="/services/graphic-design">Learn More</Link>
                </div>
                <div className="services_banner">
                    <h2>Digital Marketing</h2>
                    <p>Enhance your online presence.</p>
                    <Link className="services_link" to="/services/digital-marketing">Learn More</Link>
                </div>
            </div>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}

export default Services;

