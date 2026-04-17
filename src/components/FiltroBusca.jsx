export function FiltroBusca(props){
    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-ouro-medio font-medium">NOME</h1>
            <input value={props.filtro} placeholder="Ex: Brasil" type="text"
            onChange={(e) => props.setFiltro(e.target.value)}
            className={`border rounded-full px-4 py-2 font-medium outline-none bg-trofeu-bg-escuro text-ouro-brilhante placeholder:text-trofeu-text-outro
          ${props.filtro !== ""
            ? "border-ouro-medio"
            : "border-ouro-escuro/40 hover:border-ouro-brilhante focus:border-ouro-medio"
          }`}></input>
        </div>
    )
}