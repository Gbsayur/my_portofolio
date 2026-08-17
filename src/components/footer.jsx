import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../assets/itb.png'
import {useEffect} from 'react';
const Footer = () => {
useEffect(() => {
const text = document.querySelector('.p');
const arr = ['i\'m Fullstack Web Developer', 'i\'m UI/UX Designer', 'i\'m Mobile Developer'];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

const type = () => {
  if (!isDeleting) {
    currentText = arr[index].substring(0, charIndex + 1);
    charIndex++;
  } else {
    currentText = arr[index].substring(0, charIndex - 1);
    charIndex--;
  }

  text.textContent = currentText;

  if (!isDeleting && charIndex === arr[index].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % arr.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
};

type();

}, [])
    return (
        <>
        <div className="footer" id='Home'>
            <h5 className='h5'>Calon anak itb</h5>
            <h1 className='h1'>My Name Is Abdi Rivai</h1>
            <img src={foto} alt="foto" className='fto' />
            <p className='p'></p>

        </div>
        </>
    )
}
export default Footer