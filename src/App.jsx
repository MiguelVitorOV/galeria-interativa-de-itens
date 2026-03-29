import { Carditem } from "./components/CardItem.jsx"
import data from "./data.js"

function App() {
  return (
    <>
        {data.map((time) => {
        return (<Carditem
        id={time.id}
        nome={time.nome}
        siglaFifa={time.siglaFifa}
        codigoIso2={time.codigoIso2}
        continente={time.continente}
        confederacao={time.confederacao}
        capital={time.capital}
        titulosCopa={time.titulosCopa}
        bandeira={time.bandeira}
        />)
      })}
      
    </>
  )
}

export default App
