import React from 'react'
import aboutGif from '../images/About.gif'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='about-left-gif'>
                    <img
                        src={aboutGif}
                        alt=''
                    />
                </div>
            </div>
            <div className='about-right'>
                <h1>ABOUT ME</h1>
                <br />
                <p className='emoji'>Hi there, welcome to my website!<label>👋</label></p>
                <p>I'm a <label>MERN</label> stack enthusiast, adept at transforming ideas into immersive web experiences.</p>
                <p>Proficient in <label>React.js</label> for dynamic front-end design, <label>Node.js</label> for robust server-side logic, and <label>MongoDB</label> for flexible data management.</p>
                <p>My code embodies efficiency and elegance, showcasing a commitment to <label>user-centric development</label>.</p>
                <p>Beyond being a developer, I'm a problem solver eager for the next challenge.</p>
                <p>Let's turn your visions into reality through innovative and scalable solutions.</p>
                <br />
                <div className='about-right-btn'>
                    <Link to='https://drive.google.com/file/d/1-7Aia-gd3osFbMl2HbZWFjWHeayWIYNp/view?usp=drivesdk' target='_blank' className='more-project-link' rel='noopener noreferrer'>
                    <button>RESUME</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
