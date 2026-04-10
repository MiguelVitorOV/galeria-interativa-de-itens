import { useState } from "react"
import { Carditem } from "./components/CardItem.jsx"
import { FiltroConf } from "./components/FiltroConf.jsx"
import data from "./data.js"

function App() {
  const [filtroConfederacao, setFiltroConfederacao] = useState(null)
  const [filtroTitulo, setFiltroTitulo] = useState(null)

  return (
    <div className="flex flex-col items-center gap-5 mt-4">
      <h1 className="text-xl font-semibold font">CATÁLOGO COPA DO MUNDO</h1>

      <FiltroConf setFiltro={setFiltroConfederacao}/>
      
      <div className="flex gap-4 flex-wrap">
        {data.filter((time) => {
          return !filtroConfederacao || time.confederacao === filtroConfederacao
        }).filter((time) => {
          return filtroTitulo === null || time.titulosCopa === filtroTitulo
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
        />)
      })}
      </div>
    </div>
  )
}

export default App