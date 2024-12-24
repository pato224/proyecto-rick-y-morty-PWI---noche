import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
        <div className='d-flex justy-content-center align-items-center mt-4'>
            <div className='container col-4 d-flex justy-content-center align-items-center fondo-blanco p-5 '>
                <div className="row texto d-flex justify-content-center">
                    <h1 className='titulo'>Proyect Rick & Morty</h1>
                    <h2 className='titulo'>Welcome to Rick & Morty Proyect!</h2>  
                    <p>This proyect was made for practising React and to made a functional website. </p> 

                    <p>In this website you can know information of the characters of this animated series. </p> 
                    
                    <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    </p>     
                    <p>Lets go!</p> 
                    <div className='d-flex w-100 justify-content-center'>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                    </div>
                </div>
            </div>        
        </div>
   

    )
}