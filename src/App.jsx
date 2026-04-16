import { useState } from "react"
import { Carditem } from "./components/CardItem.jsx"
import { FiltroConf } from "./components/FiltroConf.jsx"
import { FiltroTitulo } from "./components/FiltroTitulo.jsx"
import { FiltroGrupo } from "./components/FiltroGrupo.jsx"
import data from "./data.js"
import { filtrar } from "./utils/filtrar.js"

function App() {
  const [filtroConfederacao, setFiltroConfederacao] = useState(null)
  const [filtroTitulo, setFiltroTitulo] = useState('')
  const [filtroGrupo, setFiltroGrupo] = useState([])

  return (
    <div className="flex flex-col items-center gap-5 mt-4">
      <h1 className="text-xl font-semibold font">CATÁLOGO COPA DO MUNDO</h1>
      
      <div className="flex justify-center w-full"> 
        <FiltroConf setFiltro={setFiltroConfederacao}/>
        <FiltroTitulo setFiltro={setFiltroTitulo} filtro={filtroTitulo}/>
        <FiltroGrupo setFiltro={setFiltroGrupo} filtro={filtroGrupo}/>
      </div>
      
      
      <div className="flex gap-4 flex-wrap">
        {filtrar(data, filtroTitulo, filtroGrupo, filtroConfederacao).map((time) => {
        return (<Carditem key={time.id}
        id={time.id}
        nome={time.nome}
        siglaFifa={time.siglaFifa}
        continente={time.continente}
        confederacao={time.confederacao}
        capital={time.capital}
        titulosCopa={time.titulosCopa}
        bandeira={time.bandeira}
        grupo={time.grupo}
        />)
      })}
      </div>
    </div>
  )
}

export default App