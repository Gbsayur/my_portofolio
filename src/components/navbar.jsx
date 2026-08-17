import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Footer from './footer.jsx';
import About from './about.jsx'
// import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState('home')
    return (
        <>
        <div className="navbar" >
            <h1 className='typing'>PORTOFOLIO</h1>
            <ul className="nav-links">
                <li><a href="#Home" className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>Home</a></li>
                <li><a href="#About" className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>About</a></li>
                <li><a href="#" className={active === 'services' ? 'active' : ''} onClick={() => setActive('services')}>SKILL</a></li>
                <li><a href="#" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}>Contact</a></li>
            </ul>
        </div>
        <section> 
                    <Footer />
                    <About/>
                    </section>
                    
        </>
    )
}
export default Navbar