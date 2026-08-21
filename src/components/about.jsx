import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useEffect} from 'react';
import foto from '../assets/orangganteng.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
    useEffect(() => {
       AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
        const text = document.querySelector('.p2');
        const array = "Halo! Saya abdi ganteng adalah seorang siswa di YPIPPI yang memiliki ketertarikan besar di bidang teknologi, khususnya web development. Saya senang mempelajari cara membuat website yang modern, responsif, dan mudah digunakan.Dalam proses belajar, saya terus mengembangkan kemampuan dalam HTML, CSS, JavaScript, dan React, serta mulai mempelajari berbagai teknologi lainnya untuk mengembangkan kemampuan sebagai web developer. Saya juga senang membuat berbagai project sebagai sarana untuk meningkatkan skill dan pengalaman.Saya memiliki semangat untuk terus belajar, mencoba hal baru, dan mengembangkan diri agar dapat menjadi Web Developer yang profesional dan kompeten di bidang teknologi.";
        let write = 0;
        let timer;
        const typing = () => {
            if (write < array.length) {
                text.textContent += array.charAt(write);
                write++;
                timer = setTimeout(typing, 30);
            }
       }
       typing();
       return () => clearTimeout(timer);
       text.textContent = '';
    }, []);
    return (
        <>
        <main >
             <div className='about2' data-aos="zoom-in"> 
                <img src={foto} alt="Profile" className='img'/>
            </div >
          <div className="about" id='About' data-aos="zoom-in-down" >
            <p className="p2">
            </p>
          </div>
        </main>
    </>
    )
}
export default About