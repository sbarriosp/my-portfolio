import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/logo-s.jpg';
import {Animated} from 'react-animated-css';
import { v4 as uuidv4} from 'uuid';

function MyComponent() {
  return (
    <div className='logo'>
      <img src={LogoTitle} alt="logo" />
      <Animated animationIn="spin" animationOut="fadeOut" isVisible={true}>
        <div className="border-animation" />
      </Animated>
    </div>
  )
}


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [borderColor, setBorderColor] = useState("border-color-1");
    const uniqueId = uuidv4();
    const nameArray = ['S', 'e', 'b', 'a', 's', 't', 'i', 'a', 'n', ' ', 'B', 'a', 'r', 'r', 'i', 'o', 's']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(()=> {
           return setLetterClass('text-animate-hover');
        }, 4000)
    

    setInterval(() => {
        setBorderColor(borderColor === "border-color-1" ? "border-color-2" : "border-color-1");
        }, 2000);
    });      

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i!</span>
                    <br />  
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}> </span>
                    
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} 
                    idx={15} />
                    <br />
                    
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray} 
                    idx={31} />
                    <br/>
                    </h1>
                    <h2>Frontend Developer/ Business Administrator / Biker</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

                <MyComponent />
                
            </div>
            <Loader type="line-spin-fade-loader"/>
        </>
    );
}

export default Home;