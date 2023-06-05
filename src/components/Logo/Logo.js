import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brainstorm.png';

function Logo() {
    return (
        <div className='tilt-wrap'>
            <Tilt>
                <div className='Tilt br2 shadow-2'>
                    <img style={{ paddingTop: '20px' }} src={brain} alt='logo icon' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;