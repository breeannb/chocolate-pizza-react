import React from 'react';
import Header1 from './Header1';
import './App.css';
import Logo from './Logo'; 
import Header2 from './Header2'; 
import IconFacebook from './IconFacebook';

function App() {
  return (
    <div className='nav-bar'>
     <Logo /> 
     <Header1 />
     <Header2 />
     <IconFacebook />
                {/* Social Media Icon 1 prop link facebook https.//www.facebook.com*/}
                {/* Social Media Icon 2 prop link twitter https.//www.twitter.com*/}
                {/* Social Media Icon 3 prop link facebook https://aboutme.google.com*/}
    </div>
  );
}

export default App;
