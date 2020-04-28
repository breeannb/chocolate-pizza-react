import React from 'react';
import Header1 from './Header1';
import './App.css';
import Logo from './Logo'; 
import Header2 from './Header2'; 
import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import IconGooglePlus from './IconGooglePlus';

function App() {
  return (
    <div className='nav-bar'>
     <Logo /> 
     <Header1 />
     <Header2 />
     <IconFacebook />
     <IconTwitter />
     <IconGooglePlus />
                
                {/* Social Media Icon 3 prop link facebook https://aboutme.google.com*/}
    </div>
  );
}

export default App;
