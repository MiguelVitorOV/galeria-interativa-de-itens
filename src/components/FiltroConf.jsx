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
        return props.filtro === valor? "bg-yellow-500" : ""
    }

    return (
        <div className="flex flex-col items-center">
            <h1>CONFEDERAÇÃO:</h1>
            <div className="flex flex-wrap p-4 items-center justify-center gap-2">
                <button value='' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('')}`}
                 >TODAS</button>
                <button value='AFC' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('AFC')}`}
                 >AFC</button>
                <button value='CAF' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('CAF')}`}
                 >CAF</button>
                <button value='CONCACAF' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('CONCACAF')}`}
                 >CONCACAF</button>
                <button value='CONMEBOL' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('CONMEBOL')}`}
                 >CONMEBOL</button>
                <button value='OFC' onClick={setFiltro}
                 className={`border border-black rounded-full p-2 ${botaoAtivo('OFC')}`}
                 >OFC</button>
                <button value='UEFA' onClick={setFiltro}
                className={`border border-black rounded-full p-2 ${botaoAtivo('UEFA')}`}
                >UEFA</button>
            </div>
        </div>
        
    )
}