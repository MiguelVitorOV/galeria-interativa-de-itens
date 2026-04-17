export function FiltroBusca(props){
    return (
        <div>
            <h1>Nome</h1>
            <input value={props.filtro} placeholder="Ex: Brasil" type="text"
            onChange={(e) => props.setFiltro(e.target.value)}></input>
        </div>
    )
}