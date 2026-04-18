import { useState } from "react"
import { Carditem } from "./components/CardItem.jsx"
import { FiltroConf } from "./components/FiltroConf.jsx"
import { FiltroTitulo } from "./components/FiltroTitulo.jsx"
import { FiltroGrupo } from "./components/FiltroGrupo.jsx"
import data from "./data.js"
import { filtrar } from "./utils/filtrar.js"
import { FiltroBusca } from "./components/FiltroBusca.jsx"
import { FiltroCor } from "./components/FiltroCor.jsx"

function App() {
  const [filtroConfederacao, setFiltroConfederacao] = useState('')
  const [filtroTitulo, setFiltroTitulo] = useState('')
  const [filtroGrupo, setFiltroGrupo] = useState([])
  const [filtroBusca, setFiltroBusca] = useState('')
  const [filtroCor, setFiltroCor] = useState([])

  return (
    <div className="flex flex-col items-center gap-5 px-3 m-1 py-8 bg-trofeu-bg-escuro">
      <h1 className="text-xl font-semibold text-ouro-brilhante">CATÁLOGO COPA DO MUNDO</h1>
      
      <div className="flex justify-center items-center w-full gap-2">
        <div className="flex flex-col gap-2">
          <FiltroBusca setFiltro={setFiltroBusca} filtro={filtroBusca} />
          <FiltroTitulo setFiltro={setFiltroTitulo} filtro={filtroTitulo}/>
        </div>
        <FiltroGrupo setFiltro={setFiltroGrupo} filtro={filtroGrupo}/>
        <FiltroConf setFiltro={setFiltroConfederacao} filtro={filtroConfederacao}/>     
        <FiltroCor setFiltro={setFiltroCor} filtro={filtroCor}/>
      </div>
      
      
      <Carditem listaFiltrada={filtrar(data, filtroTitulo, filtroGrupo, filtroConfederacao, filtroBusca, filtroCor)}/>  
        
      
    </div>
  )
}

export default App