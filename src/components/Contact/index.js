import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(()=> {
            return setLetterClass('text-animate-hover');
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_mclcfro', 'template_z5bnf4s', refForm.current, 'A0ZJ5V9oJUP7Z6O7W')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again.')
            }
          )
    }

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o','n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15}/>
                </h1>
                <p>I am interested in freelance and job opportunities - especially for large projects where I can improve my skills and challenge me. 
                    Please feel free to contact me below form either or you can follow my social media links which are on left side of screen. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Full Name" required />
                            </li>

                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>

                            <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                            </li>

                            <li>
                                <textarea placeholder='Message' name='message' required> </textarea>
                            </li>

                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map"> 
                Sebastian Barrios
                <br/>
                Cll 11 #7B-17
                <br/>
                Madrid-Cundinamarca
                <br/>
                Colombia
                <br/> 
                250030
                <br/> 
                <span> sbarriospov@outlook.com </span> 
            </div>

            <div className='map-wrap'>
                <MapContainer center= {[4.737229, -74.261297]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[4.737229, -74.261297]}>
                        <Popup> Yes, I live here, if you want to send me a gift!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    
        <Loader type="line-spin-fade-loader"/>
    </>
    )
}


export default Contact