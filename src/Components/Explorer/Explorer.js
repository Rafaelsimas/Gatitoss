import "./style.css";
import { Link } from "react-router-dom";
import gatinhoBanner from "../../img/banner-hero.png";
export default function Explorer() {
  return (
    <>
      <div id="pagina-explorer">
        <div id="banner">
          <div className="box-text-home">
            <h2>Ajude gatinhos de rua a encontrarem um lar</h2>
            <p>
              Todos os dias gatinhos são abandonados por seus donos ou já nascem
              sem um lar. Seja um anjo e ajude essas pequenas fofuras a
              encontrarem um lar quentinho e com muito amor.
            </p>
            <div className="box-btn">
              <button className="btn-conheca">
                <Link to="galeria">Adote um gatinho</Link>
              </button>
              <button className="btn-cadastro">
                <Link to="cadastro">Cadastre um gatinho</Link>
              </button>
            </div>
          </div>
          <img src={gatinhoBanner} alt="imagem banner" />
        </div>
      </div>
    </>
  );
}
