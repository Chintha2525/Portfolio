import React from 'react';
import logo_img from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-inner'>
                <div className='header-left'>
                    <Link to='/'>
                        <div className='logo-img'>
                            <img
                                src={logo_img}
                                alt=''
                            />
                        </div>
                    </Link>
                </div>
                <div className='header-right'>
                    <div className='header-right-inner'>
                            <Link to='/' className='link header-right-option'>
                                HOME
                            </Link>
                            <Link to='/about' className='link header-right-option'>
                                ABOUT
                            </Link>
                            <Link to='/project' className='link header-right-option'>
                                PROJECTS
                            </Link>
                            <Link to='/skill' className='link header-right-option'>
                                SKILLS
                            </Link>
                            <Link to='/contact' className='link header-right-option'>
                                CONTACT
                            </Link>
                    </div>
                </div>
                <div className='header-hide'>
                    <div className='header-hide-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
