import Wheel from "./components/Wheel"
import WheelHeader from "./components/WheelHeader"

function App() {
  return (
    <>
      <WheelHeader />
      <Wheel values={["Æble", "Pærer", "Banan", "Hindbær", "Blåbær"]} />
    </>
  )
}

export default App
