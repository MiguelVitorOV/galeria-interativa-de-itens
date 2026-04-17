export function FiltroCor(props) {

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
            <h1>Cor na bandeira:</h1>

            <div className="flex p-4 items-center gap-2 flex-wrap">
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Sem Filtro')}`} onClick={atualizarFiltro} value='Sem filtro'>Sem filtro</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Verde')}`} onClick={atualizarFiltro} value='Verde'>Verde</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Amarelo')}`} onClick={atualizarFiltro} value='Amarelo'>Amarelo</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Azul')}`} onClick={atualizarFiltro} value='Azul'>Azul</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Vermelho')}`} onClick={atualizarFiltro} value='Vermelho'>Vermelho</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Marrom')}`} onClick={atualizarFiltro} value='Marrom'>Marrom</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Cinza')}`} onClick={atualizarFiltro} value='Cinza'>Cinza</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Preto')}`} onClick={atualizarFiltro} value='Preto'>Preto</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Rosa')}`} onClick={atualizarFiltro} value='Rosa'>Rosa</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Laranja')}`} onClick={atualizarFiltro} value='Laranja'>Laranja</button>
                <button className={`border border-black rounded-full px-2 ${botaoAtivo('Branco')}`} onClick={atualizarFiltro} value='Branco'>Branco</button>
            </div>
        </div>
    )
}