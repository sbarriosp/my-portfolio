import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=> {
            return setLetterClass('text-animate-hover');
        }, 3000)
    },[])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>
                    <p> I'm a Fullstack Developer and Business Administrator, passionate in technology, framework management.</p>
                    <p> My soft skills such as creativity, conflict resolution, analytical and planning skills.</p>                
                    <p> I'm defined as a curious person, who loves the gym, travel, taste new dishes, and enjoy the nature.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#333333" />  
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4D4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>

                    </div>
                </div>

            </div>
            <Loader type="line-spin-fade-loader"/> {/*Originaly is a pacman, you can change it at https://jonjaques.github.io/react-loaders/*/}
        </>
    )   
}

export default About