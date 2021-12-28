import React from "react";
import background from "./background.png";
import { FooterMain } from "../../components/footer main/footer";
import { Header } from "../../components/header/header";
import { Wsp } from "../../components/wsp/wspbutton";
import  Landing  from "./Landing.png"
import publicidad from "./foto1.png"
import cotiza from "./cotiza.png"
import merch from "./merch.png"
import catalogo from "./catalogoproductos.png"
import logo1 from "./Recurso 2.png"
import logo2 from "./Recurso 3.png"
import logo3 from "./Recurso 4.png"
import "../styles/global.css";
import "./main.css"
import  SlideShow  from "../../components/slideshow/slideshow.js"

const Mainsito = () => {
	return (
		<main 
            style={{ backgroundImage: `url(${background})`,     
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',       
            }}
        >         
        <Header/>
            <div className="flex items-center text-center justify-center text-2xl font-parrafos">¿QUIÉNES SOMOS?</div>
            <div className="flex items-center text-center justify-center font-parrafos text-4xl md:text-6xl py-4">CONÓCENOS</div>
            <div className="flex items-center text-center justify-center py-4"><div className="max-w-3xl font-body">Nos preocupamos por ofrecer de manera responsable calidad a los mejores precios del mercado, ayudando a nuestros clientes a reducir costos y el uso plasticos en su cadena productiva</div></div>
            <div className="flex items-center text-center justify-center font-semibold font-body py-3 text-2xl">Somos Bio Wayu</div>
            <div className="flex items-center text-center justify-center text-xl font-body">CONSUMO SIN PLASTICOS</div>
            <div className="flex items-center justify-center py-4">
                <div className="w-80 md:w-1/2">
                    <img alt="lading" src={Landing}/>
                </div>
            </div>
            <div className="flex items-center text-center justify-center py-4">
                <div className="max-w-3xl grid grid-cols-1 md:grid-cols-3">
                    <div></div>
                    <div className="font-parrafos text-2xl">NUESTROS PRODUCTOS</div>
                    <div className="flex  justify-center md:justify-end "><img alt="logo" src={logo1}/><img alt="logo2" src={logo2}/><img alt="logo3" src={logo3}/></div>
                </div>                
            </div>       
        <div className="flex items-center text-center justify-center pb-8">
            <SlideShow/>         
        </div>
            <div className="flex items-center text-center justify-center font-parrafos text-2xl ">PRODUCTO ECOLOGICO</div>
            <div className="flex items-center text-center justify-center">
                <div className="max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                    <div><img alt="cotiza" src={cotiza}/></div>
                    <div><img alt="catalogo" src={catalogo}/></div>
                    <div><img alt="merch" src={merch}/></div>
                </div>
            </div>
            <div className="flex items-center justify-center"><img className="w-80 md:w-1/2" alt="publicidad" src={publicidad}/></div>    
        <FooterMain/>
        <Wsp/>        
        
		</main>
	);
};

export default Mainsito;