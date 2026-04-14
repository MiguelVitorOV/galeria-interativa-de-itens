import { useState } from "react"
import { Carditem } from "./components/CardItem.jsx"
import { FiltroConf } from "./components/FiltroConf.jsx"
import { FiltroTitulo } from "./components/FiltroTitulo.jsx"
import { FiltroGrupo } from "./components/FiltroGrupo.jsx"
import data from "./data.js"

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
        {data.filter((time) => {
          return !filtroConfederacao || time.confederacao === filtroConfederacao
        }).filter((time) => {
          return filtroTitulo === '' || (filtroTitulo === 0? time.titulosCopa === filtroTitulo : time.titulosCopa >= filtroTitulo)
        }).filter((time) => {
          return filtroGrupo.length === 0 || filtroGrupo.includes(time.grupo)
        }).map((time) => {
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