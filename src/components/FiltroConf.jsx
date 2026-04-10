export function FiltroConf(props) {

    const setFiltro = (e) => {
        props.setFiltro(e.target.value)
        console.log(`O filtro atual é ${!e.target.value? 'TODOS' : e.target.value}`)
    }

    return (
        <div className="flex flex-col items-center">
            <h1>CONFEDERAÇÃO:</h1>
            <div className="flex p-4 items-center gap-2">
                <button value='' onClick={setFiltro}
                className='border border-black rounded-full p-2'>TODAS</button>
                <button value='AFC' onClick={setFiltro}
                className='border border-black rounded-full p-2'>AFC</button>
                <button value='CAF' onClick={setFiltro}
                className='border border-black rounded-full p-2'>CAF</button>
                <button value='CONCACAF' onClick={setFiltro}
                className='border border-black rounded-full p-2'>CONCACAF</button>
                <button value='CONMEBOL' onClick={setFiltro}
                className='border border-black rounded-full p-2'>CONMEBOL</button>
                <button value='OFC' onClick={setFiltro}
                className='border border-black rounded-full p-2'>OFC</button>
                <button value='UEFA' onClick={setFiltro}
                className='border border-black rounded-full p-2'>UEFA</button>
            </div>
        </div>
        
    )
}