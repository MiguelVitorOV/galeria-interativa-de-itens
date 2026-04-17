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
    const botaoAtivo = (valor) =>{
        console.log(props.filtro)
        return props.filtro.length === 0 && valor === "Sem Filtro"? "bg-yellow-500": 
        props.filtro.includes(valor)? "bg-yellow-500" : ""
    }

    return (
        <div className="flex flex-col items-center flex-wrap">
            <h1>GRUPO:</h1>

            <div className="flex p-4 items-center gap-2 flex-wrap">
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Sem Filtro')}`} onClick={atualizarFiltro} value='Sem filtro'>Sem filtro</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('A')}`} onClick={atualizarFiltro} value='A'>A</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('B')}`} onClick={atualizarFiltro} value='B'>B</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('C')}`} onClick={atualizarFiltro} value='C'>C</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('D')}`} onClick={atualizarFiltro} value='D'>D</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('E')}`} onClick={atualizarFiltro} value='E'>E</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('F')}`} onClick={atualizarFiltro} value='F'>F</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('G')}`} onClick={atualizarFiltro} value='G'>G</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('H')}`} onClick={atualizarFiltro} value='H'>H</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('I')}`} onClick={atualizarFiltro} value='I'>I</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('J')}`} onClick={atualizarFiltro} value='J'>J</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('K')}`} onClick={atualizarFiltro} value='K'>K</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('L')}`} onClick={atualizarFiltro} value='L'>L</button>

            </div>
        </div>
    )
}