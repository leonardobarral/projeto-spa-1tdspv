import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/Cabecalho"

export default function App() {
  // Área declarativa
  let reactLogoTextoAlt = "Logo React"

  return (
    <>
      {/* Área imperativa */}
      <div>
        {/* um cabeçalho Header, um h1, uma lista ul com 3 itens com 3 links */}
        <Cabecalho/>
        {/* uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem */}
        <section>
          <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
          <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
          <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
          <img src={reactLogo} alt= {reactLogoTextoAlt} />
        </section>
        {/* um rodape com uma div, uma lista ul com 3 item e links para redes sociais */}
        <footer>
          <div>
            <ul>
              <li><a href="GitHub"></a></li>
              <li><a href="X"></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
