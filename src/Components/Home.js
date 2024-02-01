import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-left'>
                <h3>Hello I'm</h3>
                <h1>CHINTHAMANI G</h1>
                <br />
                <h2>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Web Developer', 'MERN'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>

                <br />
                <p>I have developed different types of web applications using MERN.</p>
                <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented web applications</p>
                <br />
                <div>
                    <Link to='/about' className='home-left-btn'>
                        <button>ABOUT ME</button>
                    </Link>
                </div>
            </div>
            <div className='home-right'></div>
        </div>
    )
}

export default Home
