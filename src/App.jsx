import { useState } from "react"
import { Carditem } from "./components/CardItem.jsx"
import { FiltroConf } from "./components/FiltroConf.jsx"
import { FiltroTitulo } from "./components/FiltroTitulo.jsx"
import { FiltroGrupo } from "./components/FiltroGrupo.jsx"
import data from "./data.js"
import { filtrar } from "./utils/filtrar.js"
import { FiltroBusca } from "./components/FiltroBusca.jsx"

function App() {
  const [filtroConfederacao, setFiltroConfederacao] = useState('')
  const [filtroTitulo, setFiltroTitulo] = useState('')
  const [filtroGrupo, setFiltroGrupo] = useState([])
  const [filtroBusca, setFiltroBusca] = useState('')
  const [filtroCor, setFiltroCor] = useState([])

  return (
    <div className="flex flex-col items-center gap-5 mt-4 p-1">
      <h1 className="text-xl font-semibold font">CATÁLOGO COPA DO MUNDO</h1>
      
      <div className="flex justify-center w-full gap-2"> 
        <FiltroBusca setFiltro={setFiltroBusca} filtro={filtroBusca} />
        <FiltroGrupo setFiltro={setFiltroGrupo} filtro={filtroGrupo}/>
        <FiltroConf setFiltro={setFiltroConfederacao} filtro={filtroConfederacao}/>     
        <FiltroTitulo setFiltro={setFiltroTitulo} filtro={filtroTitulo}/>
      </div>
      
      
      <Carditem listaFiltrada={filtrar(data, filtroTitulo, filtroGrupo, filtroConfederacao, filtroBusca, filtroCor)}/>  
        
      
    </div>
  )
}

export default App