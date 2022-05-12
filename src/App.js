import Wheel from "./components/Wheel"

function App() {
  return (
    <Wheel
      mirrorOn={true}
      values={["Æble", "Pærer", "Banan", "Hindbær"]}
      colors={["#f2d398", "#e8ebf7", "#247b7b", "red", "blue"]}
      startDeg={20}
    />
  )
}

export default App
