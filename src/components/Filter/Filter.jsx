import './filtro.css';

export default function Filter({title,filtar}){

    return(
       <div className="justify-content-between"> 
        <div className='d-flex form-check form-switch rounded-3 pt-1 pb-2 ps-5 mx-5 filtro'>
            <input className='form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='form-check-label' htmlFor={title}> {title}</label>
        </div>
        </div>
    )
}

