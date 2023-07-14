import Nav from "./components/navBar"
import Caro from "./components/carousel"
import Bio from "./components/bio"
import Map from "./components/location"

function App() {
  

  return (
    <main>
      <Nav />
      <Caro />
      <Bio />
      <div className="gMaps">
      <Map /></div>
    </main>
  )
}

export default App
