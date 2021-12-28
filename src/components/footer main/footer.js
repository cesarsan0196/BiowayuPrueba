import React from 'react';
import backgroundfooter from "./footermain.png";
import Contact from '../contactForm/contact'
import videito from './videito.png'

export function FooterMain() {
    return (

    <main style={{ backgroundImage: `url(${backgroundfooter})`,         
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     height: '1450px',     
     left: "0",
     bottom: "0",     
     width: "100%",           
   }}
     >
    <div className="flex items-center justify-center py-8">
      <div className="w-80 md:w-2/3 lg:w-1/2 ">
        <img alt="videito" src={videito}/>
      </div>
    </div> 
    <div className="flex items-center justify-center"><Contact/></div>    
    </main>
    );
  }