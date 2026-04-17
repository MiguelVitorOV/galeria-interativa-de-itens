export function FiltroBusca(props){
    return (
        <div className="flex flex-col items-center gap-2">
            <h1>NOME</h1>
            <input value={props.filtro} placeholder="Ex: Brasil" type="text"
            onChange={(e) => props.setFiltro(e.target.value)}
            className={`border border-black rounded-full p-2 ${props.filtro !== "" ? "bg-yellow-500" : ""}`}></input>
        </div>
    )
}