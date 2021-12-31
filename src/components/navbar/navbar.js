import React,{ useState } from 'react';
import MenuIcon from './bars-solid.svg'
import CloseIcon from './window-close-regular.svg'


export function Navbar() {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }
    return (
        <div>                    
            <button onClick={()=>{showSideMenu()}} className="menu-button">
                {(isSideMenuOpen) ? <img src={CloseIcon} className="w-8 h-8 px-2 " alt="close"></img> : <img src={MenuIcon} className="w-8 h-8 px-2" alt="menu"></img>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )   
}

function SideMenu(){
    return(
        <div className="fixed h-screen w-1/2 lg:w-24 top-15 left-50">
            <ul className="menu-list flex flex-col font-semibold bg-yellow-50 lg:bg-transparent">
                <li className="menu-list-item py-2 hover:text-green-200 font-body"><a href="/">Nosotros</a></li>
                <li className="menu-list-item py-2 hover:text-green-200 font-body"><a href="/catalogo/catalogo">Catalogo</a></li>
                <li className="menu-list-item py-2 hover:text-green-200 font-body"><a href="/cart/cart">Carrito</a></li>
            </ul>
        </div>
    )
}