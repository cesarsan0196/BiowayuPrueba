import React, { useState } from 'react';

const Contact = () => {
    const [nombre, setNombre] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [mensaje, setMensaje] = useState('')

    return(
        <div className="rounded-3xl text-xs w-80 md:w-2/3 lg:w-2/5  bg-white p-15">                           
        <h1 className="font-parrafos flex items-center text-center justify-center text-2xl pt-4">COTIZA AHORA</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-left justify-center gap-2 p-5">                                  
                <form className="bg-gray-50 dark:bg-gray-800 h-40 p-3">                   
                    <div className="flex items-center">    
                        <label className="w-28 font-semibold text-base text-green-700 font-body" htmlFor='nombre'>
                                Nombre:
                        </label>    
                        <input
                            className="w-full h-2 mt-2 py-3 px-3 bg-white dark:bg-gray-800 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={event=> setNombre(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center">                   
                        <label className="w-28 font-semibold text-base text-green-700 font-body" htmlFor='empresa'>
                            Empresa:
                        </label>
                        <input
                            className="w-full h-2 mt-2 py-3 px-3 bg-white dark:bg-gray-800 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                            type="text"
                            id="empresa"
                            value={empresa}
                            onChange={event=> setEmpresa(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-28 font-semibold text-base text-green-700 font-body" htmlFor='email'>
                            Email:
                        </label>    
                        <input
                            className="w-full h-2 mt-2 py-3 px-3 bg-white dark:bg-gray-800 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                            type="text"
                            id="email"
                            value={email}
                            onChange={event=> setEmail(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center">                    
                        <label className="w-28 font-semibold text-base text-green-700 font-body" htmlFor='celular'>
                            Celular:
                        </label>    
                        <input
                            className="w-full h-2 mt-2 py-3 px-3 bg-white dark:bg-gray-800 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            id="celular"
                            value={celular}
                            onChange={event=> setCelular(event.target.value)}
                        />                                                     
                    </div>              
                </form>
                <form className="bg-gray-50 dark:bg-gray-800 h-40 p-3">
                    <label htmlFor='mensaje'>                        
                        <textarea
                            className="bg-white dark:bg-gray-800 text-gray-800 font-semibold focus:border-green-500 focus:outline-none h-32 w-full items-center font-body"
                            type="text"
                            id="mensaje"
                            placeholder="Escribe tu mensaje aqui ..."
                            value={mensaje}
                            onChange={event=> setMensaje(event.target.value)}
                        />
                    </label> 
                </form>
                <div className="flex items-center text-center justify-end">
                    <button className="w-28 p-1 bg-transparent border-2 border-green-700 text-green-700 text-xs rounded-lg hover:bg-green-700 hover:text-gray-100 focus:border-4 focus:border-green-300 font-body">Enviar</button>
                </div>
                <p className="flex items-center text-center justify-end text-xs text-green-700 font-body">Compra 100% segura</p>
            </div>                    
        </div>
    );
};

export default Contact