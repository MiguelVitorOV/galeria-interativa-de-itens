import { Carditem } from "./components/CardItem.jsx"
import data from "./data.js"

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1>CATÁLOGO COPA DO MUNDO</h1>



      <div className="flex gap-4 flex-wrap">
        {data.map((time) => {
        return (<Carditem
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
