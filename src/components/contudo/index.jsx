export default function Conteudo(props){
    console.log(props)
    return(
        <>
            <section>
                <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
                <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
                <p>uma seção com uma div com 3 paragrafos, com 3 linhas de lorem uma imagem</p>
                <img src={props.reactLogoProps} alt= {props.reactLogoTextoAltProps} />
            </section>
        </>
    );
}