import React from 'react'
import pinterestImg from '../images/Pinterest.png'
import rentalImg from '../images/Rental.png'
import chatImg from '../images/ChatApp.png'
import tttImg from '../images/Tic-tac-toe.png'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div className='project'>
            <br />
            <br />
            <br />
            <div className='project-head'>
                <h1>PROJECTS</h1>
            </div>
            <div className='project-1'>
                <div className='project-1-img'>
                    <div className='project-img'>
                        <img
                            src={pinterestImg}
                            alt=''
                        />
                    </div>
                </div>
                <div className='project-1-content'>
                    <h2>PINTEREST CLONE</h2>
                    <p>Dive into my latest project, a Pinterest clone powered by the <label>MERN</label> stack.</p>
                    <p>From creating captivating <label>pins</label> to seamless <label>user authentication</label>, this project encapsulates my commitment to crafting immersive and <label>user-centric</label> web experiences.</p>
                    <p>Explore a world where creativity meets functionality, and let's reimagine the digital landscape together.</p>
                    <br />
                    <div className='project-btn'>
                        <Link to='https://github.com/Chintha2525/Pinterest_Clone_Frontend' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>CLIENT</button>
                        </Link>
                        <Link to='https://pinterest-clone-2525.netlify.app' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>LIVE</button>
                        </Link>
                        <Link to='https://github.com/Chintha2525/Pinterest_Clone_Backend' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>SERVER</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='project-2'>
                <div className='project-2-content'>
                    <h2>RENTAL WEBSITE</h2>
                    <p>Rental portal include from cars to cameras, offer a diverse array of items for user convenience.</p>
                    <p>Navigate seamlessly through <label>Home, Product, and Cart Items</label> pages, ensuring a <label>user-friendly</label> experience.</p>
                    <p>Enjoy secure transactions using <label>Rezorpay's</label> test mode for user.</p>
                    <p>Behind the scenes, <label>Admin Login</label> empowers administrators to effortlessly manage the product inventory.</p>
                    <br />
                    <div className='project-btn'>
                        <Link to='https://github.com/Chintha2525/Rental_Portal_Webcode2_FrontEnd' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>CLIENT</button>
                        </Link>
                        <Link to='https://equipment-rental-portal-2525.netlify.app' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>LIVE</button>
                        </Link>
                        <Link to='https://github.com/Chintha2525/Rental_Portal_Webcode2_BackEnd' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>SERVER</button>
                        </Link>
                    </div>
                </div>
                <div className='project-2-img'>
                    <div className='project-img'>
                        <img
                            src={rentalImg}
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className='project-3'>
                <div className='project-3-img'>
                    <div className='project-img'>
                        <img
                            src={chatImg}
                            alt=''
                        />
                    </div>
                </div>
                <div className='project-3-content'>
                    <h2>CHAT APP</h2>
                    <p>Enter the world of <label>real-time communication</label> with my Simple Chat App.</p>
                    <p>Seamlessly connect with friends by creating <label>personalized room IDs</label>.</p>
                    <p>Whether it's <label>quick messages</label> or engaging conversations, this website facilitates <label>instant connections</label>.</p>
                    <br />
                    <div className='project-btn project-btn-1'>
                        <Link to='https://github.com/Chintha2525/Chat-App-Frontend' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>CLIENT</button>
                        </Link>
                        <Link to='https://chat-app-2525.netlify.app' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>LIVE</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='project-4'>
                <div className='project-4-content'>
                    <h2>TIC TAC TOE</h2>
                    <p>Indulge in timeless fun with my <label>Tic Tac Toe</label> game.</p>
                    <p>This is a simple web-based game that allows <label>two players</label> to compete against each other.</p>
                    <p>This classic brings <label>strategic twists</label> and turns to user fingertips.</p>
                    <p>Whether user an experienced player or new to the game, dive into the world of Tic Tac Toe, where every move counts.</p>
                    <br />
                    <div className='project-btn project-btn-1'>
                        <Link to='https://github.com/Chintha2525/Tic-Tac-Toe' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>CLIENT</button>
                        </Link>
                        <Link to='https://tic-tac-toe-2525.netlify.app' target='_blank' className='link-1' rel='noopener noreferrer'>
                            <button>LIVE</button>
                        </Link>
                    </div>
                </div>
                <div className='project-4-img'>
                    <div className='project-img'>
                        <img
                            src={tttImg}
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className='more-project'>
                    <Link to='https://github.com/Chintha2525' target='_blank' className='more-project-link' rel='noopener noreferrer'>
                    <button>MORE PROJECTS</button>
                    </Link>
            </div>
        </div>
    )
}

export default Project