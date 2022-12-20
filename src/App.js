import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from "./Components/Cadastro/Cadastro";
import Explorer from "./Components/Explorer/Explorer";
import Galeria from './Components/Galeria/Galeria';
import Header from "./Components/Header/Header";
import Imagem from './Components/Imagem/Imagem';

export default function App(){
    return(
        <BrowserRouter>
        <div className="container">
        <Header />
            <Routes>
                <Route path='/' exact element={<Explorer />} />
                <Route path='/galeria' exact element={<Galeria />} />
                <Route path='/cadastro' exact element={<Cadastro /> } />
                <Route path='/imagem' exact element={<Imagem />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}