import React from 'react';
import html_img from '../images/Html-icon.png'
import css_img from '../images/Css-icon.png'
import js_img from '../images/Javascript-icon.png'
import react_img from '../images/React-icon.png'
import node_img from '../images/Node-icon.png'
import mongodb_img from '../images/MongoDb-icon.jpg'
import express_img from '../images/Express-icon.png'
import bootstrap_img from '../images/Bootstrap-icon.png'
import mui_img from '../images/Mui-icon.png'
import postman_img from '../images/Postman-icon.png'

const Skill = () => {
    return (
        <div className='skill'>
            <div className='skill-inner'>
                <div className='skill-header'>
                    <h1>SKILLS</h1>
                </div>
                <div className='skill-images'>
                    <div className='skill-img'>
                        <img
                            src={html_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={css_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={js_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={react_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={node_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={mongodb_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={express_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={bootstrap_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={mui_img}
                            alt=''
                        />
                    </div>
                    <div className='skill-img'>
                        <img
                            src={postman_img}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
