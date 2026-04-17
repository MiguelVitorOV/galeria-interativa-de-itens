export function Carditem(props) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {props.listaFiltrada.map((time) => {
        return (
          <div key={time.id} className="flex w-80 flex-col border border-ouro-medio/20 rounded-lg p-4 items-center gap-2 bg-trofeu-bg-escuro hover:border-ouro-medio/50">
            <h1 className="text-trofeu-text-claro font-semibold">
              {time.nome} • {time.siglaFifa}
            </h1>
            <h3 className="text-trofeu-text-outro"> Grupo {time.grupo} • {time.confederacao}</h3>
            <img src={time.bandeira} alt={`bandeira ${time.nome}`} className="rounded border-2 border-ouro-medio/20"/>
            <p className="text-trofeu-text-outro text-center">{`Situado no continente ${time.continente}, portador da capital: ${time.capital}`}</p>  
            <h3 className="text-trofeu-text-outro flex gap-1">
              Copas conquistadas:
              <span className={`font-bold ${time.titulosCopa > 0 ? "text-ouro-brilhante" : "text-trofeu-text-outro"}`}>
                {` ${time.titulosCopa}`}
              </span>
            </h3> 
            <br />
          </div>
        )
      })}
    </div>
  );
}