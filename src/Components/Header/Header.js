import { Link } from 'react-router-dom'
import './style.css'
export default function Header(){
    return(
        <header id="top">
          <nav id="box">
            <h1>Gatitos</h1>
            <ion-icon className='menu-toggle' name="menu-outline"></ion-icon>

            <ul>
              <li>
                <Link to=''>
                Home
                </Link>
              </li>

              <li>
                <Link to='galeria'>
                Galeria
                </Link>
              </li>

              <li>
                <Link to='cadastro'>
                Cadastrar gatinhos
                </Link>
              </li>

              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}