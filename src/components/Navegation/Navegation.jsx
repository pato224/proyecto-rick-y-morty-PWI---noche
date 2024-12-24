import './nav.css';
import {Link} from 'react-router'


export default function Navegation() {
    return(


<nav className='navbar navbar-expand-lg p-5'>
  <div className='container-fluid'>
      <Link to="/">Rick & Morty</Link>
      <button class="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#menuHamburguesa" aria-controls="#menuHamburguesa" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="navbar-collapse justify-content-end" id='menuHamburguesa'>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link to="/Characters">Characters</Link>
        </li>
        <li class="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
    )
}
