import { useState } from "react"
import './card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)

    return(
        
        <div className='tarjeta m-2 p-1 d-flex rounded border-3'>
            <div className='container-fluid'>
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <img src={personaje.image}/>
                    <h2 className="card-title">{personaje.name}</h2>
                    <button onClick={()=>setOcultar(false)} 
                    className={ocultar?"btn boton align-self-end":"d-none"}>Know More</button>
                </div>
            </div>
            { ocultar ?'':
                <div className="container" >
                    <div className="d-flex justify-content-end">
                        <button onClick={()=>setOcultar(true)} className="d-block btn btn-active btn-x-md d-flex cerrar">X</button>
                    </div>
                
                    <ul className="contenedor-lista" >
                        <li className="itemLista">Character Status {personaje.status}</li>
                        <li className="itemLista">Species {personaje.species}</li>
                        <li className="itemLista">Origin {personaje.origin.name}</li>
                        <li className="itemLista">Gender {personaje.gender}</li>
                    </ul>
                </div>
                }
            

        </div>
    )
}