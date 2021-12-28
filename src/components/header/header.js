import React from 'react';
import backgroundheader from "./header.png";
import trazos from "./trazos.png"
import { Navbar } from '../navbar/navbar';




export function Header() {
    return (
    <main>      
      <div className="flex items-center text-center justify-center py-4">
          <div className="w-1/2 grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-start md:justify-start items-center"><Navbar/></div>
              <div className="flex items-center justify-center"><img alt="background" src={backgroundheader}/></div>
              <div ></div>
              </div>                
      </div> 
      <div className="flex items-center justify-center pb-10"><img alt="trazos" src={trazos}/></div>          
    </main>
    );
  }