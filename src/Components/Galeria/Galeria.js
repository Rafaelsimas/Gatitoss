import "./style.css";
export default function Galeria() {
  return (
    <>
    <div id="galeria">
      <div className="gatinhos-cadastrados">
        {DataCats.map((dados, idx) => (
          <div key={idx} className="info-gatinhos">
            <img src={dados.urlImage}  alt="foto do gatinho" />
            <div className="box-dados">
              <div className="nome-gatinho">
                <strong>Nome:</strong>
                {dados.nome}
              </div>
              <div className="idade-gatinho">
                <strong>Idade:</strong>
                {dados.idade} meses
              </div>
              <div className="nome-do-anjo">
                <strong>Nome do anjo:</strong>
                {dados.nomeAnjo}
              </div>
            </div>

            <div className="descricao">
              <strong>Descrição:</strong> {dados.descricao}
            </div>

            <div className="btn-acoes">
              <ion-icon id="verPagina" name="eye-outline"></ion-icon>
              <ion-icon id="whatsApp" name="logo-whatsapp"></ion-icon>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

const DataCats = [
  {
    id: 1,
    urlImage:
      "https://media.moneytimes.com.br/uploads/2020/06/gatinho-computador.jpg",
    nome: "Leôncio",
    idade: 7,
    nomeAnjo: "Hudna L. Mendonça",
    descricao:
      "Esse lindo gatinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
  {
    id: 2,
    urlImage:
      "https://s.zst.com.br/cms-assets/2020/12/melhor-brinquedo-para-gatinho-2-.png",
    nome: "Alfred",
    idade: 5,
    nomeAnjo: "Rafael S. De Simas",
    descricao:
      "Esse fofinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
  {
    id: 3,
    urlImage:
      "https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg",
    nome: "Zé malhado",
    idade: 5,
    nomeAnjo: "Camila Ottoni",
    descricao:
      "Esse fofinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
  {
    id: 4,
    urlImage:
      "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-alimentar-filhote-de-gatos.jpg",
    nome: "Xuxa",
    idade: 5,
    nomeAnjo: "Mônica Baltor",
    descricao:
      "Esse fofinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
  {
    id: 5,
    urlImage:
      "https://www.petz.com.br/blog/wp-content/uploads/2020/06/escovar-gato.jpg",
    nome: "Gambald",
    idade: 5,
    nomeAnjo: "Marcio",
    descricao:
      "Esse fofinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
  {
    id: 6,
    urlImage:
      "https://i.pinimg.com/564x/cb/44/f9/cb44f97292e5b62c2eba9d6e1dbd5c8f.jpg",
    nome: "Josep",
    idade: 5,
    nomeAnjo: "Júlia",
    descricao:
      "Esse fofinho foi encontrado na rua jequitibá no bosque da praia em rio das ostras. No momento ele está comigo e está sendo alimentado",
  },
];
