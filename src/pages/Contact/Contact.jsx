import Navegation from '../../components/Navegation/Navegation'
import './contact.css'

export default function Contact() {
    return(
        <div>
        <Navegation/>
            <div className='container d-flex flex-column justify-content-center text-align-center rounded p-5 mt-5 form1'>
                <h1>Contact</h1>
                    <p>Leave us your information so we can contact you</p>
                    <form className='row'>
                        <div className=" col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email"/>
                        </div>
                        
                        <div class="mb-3">
                            <label htmlFor="message" className="form-label">message</label>
                            <textarea className="form-control" id="message" rows="12"></textarea>
                        </div>
                        <div className="col-3">
                            <button type="submit" class="btn  mb-3 botonHome" value={"send"}>Send</button>
                        </div>
                    </form>        
            </div>
 
        </div>
        
    )
}

//no hace falta hacerlo funcional, si quieren ponerle un action pueden usar la forma gratuita de formspree