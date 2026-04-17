export function FiltroConf(props) {
    const setFiltro = (e) => {
         if (e.target.value ===  props.filtro){
            props.setFiltro('')
        } else {
        props.setFiltro(e.target.value)
        console.log(`O filtro atual é ${!e.target.value? 'TODOS' : e.target.value}`)
        }
    }

    const botaoAtivo = (valor) => {
        return props.filtro === valor
      ? "bg-ouro-medio text-trofeu-text-escuro border-ouro-medio font-semibold hover:bg-ouro-escuro hover:border-ouro-escuro"
      : "bg-transparent text-trofeu-text-claro border-ouro-escuro/40 hover:border-ouro-brilhante hover:text-ouro-brilhante"
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-ouro-medio font-medium">CONFEDERAÇÃO:</h1>
            <div className="flex flex-wrap p-4 items-center justify-center gap-2">
                <button value='' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('')}`}>
                Todas</button>
                <button value='AFC' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('AFC')}`}>
                AFC</button>
                <button value='CAF' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('CAF')}`}>
                CAF</button>
                <button value='CONCACAF' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('CONCACAF')}`}>
                CONCACAF</button>
                <button value='CONMEBOL' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('CONMEBOL')}`}>
                CONMEBOL</button>
                <button value='OFC' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('OFC')}`}>
                OFC</button>
                <button value='UEFA' onClick={setFiltro}
                className={`border rounded-full px-3 py-1.5 ${botaoAtivo('UEFA')}`}>
                UEFA</button>
             </div>
        </div>
        
    )
}