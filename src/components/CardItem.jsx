export function Carditem(props) {
  return (
    <div className="flex gap-4 flex-wrap">
      {props.listaFiltrada.map((time) => {
        return (
          <div key={time.id} className="flex w-80 flex-col border border-black p-4 items-center gap-2">
            <h1>
              {time.nome} • {time.siglaFifa}
            </h1>
            <h3> Grupo {time.grupo} • {time.confederacao}</h3>
            <img src={time.bandeira} alt={`bandeira ${time.nome}`} />
            <p >{`Situado no continente ${time.continente}, portador da capital: ${time.capital}`}</p>  
            <h3>{`Copas conquistadas ${time.titulosCopa}`}</h3> 
            <br />
          </div>
        )
      })}
    </div>
  );
}
