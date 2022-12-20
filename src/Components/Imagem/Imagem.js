import './style.css'
export default function Imagem(){
    return(
        <>
            <div className="info-gatinhos-detalhe">
                <img className="imagem-detalhe" src="https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg" alt="foto do gatinho" />
               
                <div className="box-dados-detalhes">
                    <div className="nome-gatinho"><strong>Nome:</strong>Otavio</div>
                    <div className="idade-gatinho"><strong>Idade:</strong>6 meses</div>
                    <div className="nome-do-anjo">
                        <strong>Nome do anjo:</strong>Hudna Lima Mendonça
                    </div>
                </div>

                <div className="descricao-detalhes">
                  <strong>Descrição:</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus asperiores iure qui, dolores fuga animi
                  repellendus laudantium cumque voluptate debitis, odio magnam
                  perferendis alias eum eius aperiam provident corporis quidem!
                </div>

                <div className="btn-acoes">
                    <ion-icon name="eye-outline"></ion-icon>
                    <ion-icon name="call-outline"></ion-icon>

                </div>
              </div>
        </>
    )
}