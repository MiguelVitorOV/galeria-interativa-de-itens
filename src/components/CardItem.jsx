export function Carditem(props) {
  return (
    <div key={props.id}>
      <h1>
        {props.nome} • {props.siglaFifa}
      </h1>
      <h3>{props.confederacao}</h3>
      <img src={props.bandeira} alt={`bandeira ${props.nome}`} />
      <p>{`Situado no continente ${props.continente}, portador da capital: ${props.capital}`}</p>  
      <h3>{`Copas conquistadas ${props.titulosCopa}`}</h3> 
      <br />
    </div>
  );
}
