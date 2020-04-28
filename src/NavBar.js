import React, { Component } from 'react';
import Logo from './Logo.js';



export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <Logo />
                {/* Title: Delicious */} 
                {/* H2: The Best Food Blog on the Web */}
                {/* Social Media Icon 1 prop link facebook https.//www.facebook.com*/}
                {/* Social Media Icon 2 prop link twitter https.//www.twitter.com*/}
                {/* Social Media Icon 3 prop link facebook https://aboutme.google.com*/}


            </div>
        )
    }
}
