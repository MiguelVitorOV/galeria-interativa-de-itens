export function FiltroGrupo(props){
    const atualizarFiltro = (e) => {
        if (e.target.value === 'Sem filtro')
        {
            props.setFiltro([])
        } else{
        props.filtro.includes(e.target.value)? removerFiltro(e.target.value) : adicionarFiltro(e.target.value)
        }
    }
    const adicionarFiltro = (filtroNovo) => {
        const novaLista = [...props.filtro, filtroNovo]
        props.setFiltro(novaLista)
        console.log(props.filtro)
    }
    const removerFiltro = (filtroRemover) => {
        const novaLista = props.filtro.filter((item) => {
            return item !== filtroRemover
        })
        props.setFiltro(novaLista)
        console.log(props.filtro)
    }

    return (
        <div className="flex flex-col items-center flex-wrap">
            <h1>GRUPO:</h1>

            <div className="flex p-4 items-center gap-2 flex-wrap">
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='Sem filtro'>Sem filtro</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='A'>A</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='B'>B</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='C'>C</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='D'>D</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='E'>E</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='F'>F</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='G'>G</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='H'>H</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='I'>I</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='J'>J</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='K'>K</button>
                <button className="border border-black rounded-full px-2 "onClick={atualizarFiltro} value='L'>L</button>

            </div>
        </div>
    )
}