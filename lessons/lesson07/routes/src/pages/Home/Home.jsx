import { Link } from 'react-router-dom';
import './index.css';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

function Home() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>

                    {isAuthenticated ? (
                        <>
                            <Link to="/services">Services</Link>    
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}

                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;

