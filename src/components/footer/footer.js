import React from 'react';
import backgroundfooter from "./footer.png";


export function Footer() {
    return (

    <main style={{ backgroundImage: `url(${backgroundfooter})`,         
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     height: '700px',     
     left: "0",
     bottom: "0",     
     width: "100%",           
   }}
     >      
    </main>
    );
  }