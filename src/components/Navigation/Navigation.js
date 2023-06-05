import React from 'react';
import Logo from '../Logo/Logo';

export default function Navigation() {
    return (

        <nav style={{ padding: '4px', display: 'flex', justifyContent: 'flex-start' }}>
            <Logo />
            <p className='f3 link dim black underline pa3 pointer'>Sign out</p>
        </nav>
    );
}