import './style.css'
export default function Cadastro() {
  return (
    <>
    <div className="container-cadastrar">
      <div className="box-cadastro">

      <h1>Cadastrar Gatinhos</h1>

      <div className="box-formulario">
        <input type="text" placeholder="Nome do gatinho" />
        <input type="text" name="" id="" placeholder="idade do gatinho" />
        <input type="text" placeholder="Seu nome" />
        <input type="url" placeholder="Insira a url da imagem do gatinho" />
        <textarea
          placeholder="Descreva onde o encontrou e onde está no momento."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="box-btn-cadastro">
        <button className="btn-cadastrar">Cadastrar</button>
        <button className="btn-cancelar">Cancelar</button>
      </div>
      </div>
    </div>
    </>
  );
}
