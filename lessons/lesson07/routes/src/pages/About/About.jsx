import { useNavigate } from "react-router-dom"
import './index.css'
function About() {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page. Here you can find more information about this website.</p>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}
export default About
