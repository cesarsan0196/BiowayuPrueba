import React from 'react';
import wspimage from "./wsp-image.png";


export function Wsp() {
    return ( 
        <div >
            <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <a title="Haz tu pedido por wsp" href="https://wa.me/51998096439?text= Un pedido pe wachin" rel="noreferrer" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img className="object-cover object-center w-full h-full rounded-full" src={wspimage} alt="wspimage" />
                </a>
            </div>
        </div>  
    );
}