export function Carditem(props)  {
    return(
        <div>
            {props.id}
            {props.nome}
            {props.siglaFifa}
            {props.CodigoIso2}
            {props.continente}
            {props.confederacao}
            {props.capital}
            {props.titulosCopa}
            {props.bandeira}
            <br/>
        </div>
    )
}
