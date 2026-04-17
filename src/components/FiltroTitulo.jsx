export function FiltroTitulo(props) {
    const setFiltro = (e) =>{
        props.setFiltro(e.target.value === '' ? '' : Number(e.target.value))
        console.log(`Titulos filtrados: ${e.target.value}`)
    }
    
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-ouro-medio font-medium">TÍTULOS:</h1>
            <div className="flex p-4 items-center gap-2">
                <select value={props.filtro} onChange={setFiltro}
                className={`border rounded-full px-3 py-1.5 outline-none
            ${props.filtro !== ""
              ? "bg-ouro-medio text-trofeu-text-escuro border-ouro-medio hover:bg-ouro-escuro hover:border-ouro-escuro"
              : "bg-trofeu-bg-escuro text-trofeu-text-claro border-ouro-escuro/40 hover:border-ouro-brilhante hover:text-ouro-brilhante"
            }`}>
                    <option value="">Sem Filtro</option>
                    <option value='0'>Nenhum</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                </select>
            </div>
        </div>
    )
}