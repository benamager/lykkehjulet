import Wheel from "./components/Wheel"

function App() {
  return (
    <Wheel
      mirrorOn={true}
      values={["Zeymer", "Benny", "Kim", "Celine"]}
      colors={["#f2d398", "#e8ebf7", "#247b7b", "red"]}
    />
  )
}

export default App
