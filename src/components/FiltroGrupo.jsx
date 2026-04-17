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
        return props.filtro.length === 0 && valor === "Sem Filtro"? "bg-ouro-medio text-trofeu-text-escuro border-ouro-medio font-semibold hover:bg-ouro-escuro hover:border-ouro-escuro": 
        props.filtro.includes(valor)? "bg-ouro-medio text-trofeu-text-escuro border-ouro-medio font-semibold hover:bg-ouro-escuro hover:border-ouro-escuro" : "bg-transparent text-trofeu-text-claro border-ouro-escuro/40 hover:border-ouro-brilhante hover:text-ouro-brilhante"
    }

    return (
        <div className="flex flex-col items-center flex-wrap">
            <h1 className="text-ouro-medio font-medium">GRUPO:</h1>

            <div className="flex p-4 items-center gap-2 justify-center flex-wrap">
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('Sem Filtro')}`} onClick={atualizarFiltro} value='Sem filtro'>Sem filtro</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('A')}`} onClick={atualizarFiltro} value='A'>A</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('B')}`} onClick={atualizarFiltro} value='B'>B</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('C')}`} onClick={atualizarFiltro} value='C'>C</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('D')}`} onClick={atualizarFiltro} value='D'>D</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('E')}`} onClick={atualizarFiltro} value='E'>E</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('F')}`} onClick={atualizarFiltro} value='F'>F</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('G')}`} onClick={atualizarFiltro} value='G'>G</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('H')}`} onClick={atualizarFiltro} value='H'>H</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('I')}`} onClick={atualizarFiltro} value='I'>I</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('J')}`} onClick={atualizarFiltro} value='J'>J</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('K')}`} onClick={atualizarFiltro} value='K'>K</button>
                <button className={`border rounded-full px-3 py-1.5 ${botaoAtivo('L')}`} onClick={atualizarFiltro} value='L'>L</button>

            </div>
        </div>
    )
}