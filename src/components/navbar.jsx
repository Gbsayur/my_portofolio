import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, } from 'react';
import Footer from './Footer.jsx'
// import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState('home');
    return (
        <>
        <div className="navbar">
            <h1>PORTOFOLIO</h1>
            <ul className="nav-links">
                <li><a href="#" className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>Home</a></li>
                <li><a href="#" className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>About</a></li>
                <li><a href="#" className={active === 'services' ? 'active' : ''} onClick={() => setActive('services')}>Services</a></li>
                <li><a href="#" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}>Contact</a></li>
            </ul>
        </div>
        <Footer />
        </>
    )
}
export default Navbar