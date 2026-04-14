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
        <div>
            <button onClick={atualizarFiltro} value='Sem filtro'>Sem filtro</button>
            <button onClick={atualizarFiltro} value='A'>A</button>
            <button onClick={atualizarFiltro} value='B'>B</button>
            <button onClick={atualizarFiltro} value='C'>C</button>
            <button onClick={atualizarFiltro} value='D'>D</button>
            <button onClick={atualizarFiltro} value='E'>E</button>
            <button onClick={atualizarFiltro} value='F'>F</button>
            <button onClick={atualizarFiltro} value='G'>G</button>
            <button onClick={atualizarFiltro} value='H'>H</button>
            <button onClick={atualizarFiltro} value='I'>I</button>
            <button onClick={atualizarFiltro} value='J'>J</button>
            <button onClick={atualizarFiltro} value='K'>K</button>
            <button onClick={atualizarFiltro} value='L'>L</button>
        </div>
    )
}