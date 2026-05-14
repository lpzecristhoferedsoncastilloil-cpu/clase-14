import ColorHarmonizer from "./components/colorHarmonizer"
import ContrastChecker from "./components/contrastChecker"

function App() {
  
  return (
    <div className="App">
      <h1>Color </h1>
      <ColorHarmonizer />
      <hr />
      <ContrastChecker />
    </div>
  )
}

export default App