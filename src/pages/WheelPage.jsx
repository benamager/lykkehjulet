import Wheel from "../components/Wheel"
import WheelHeader from "../components/WheelHeader"

const WheelPage = () => {
  return (
    <div>
      <WheelHeader title="Hjul uden navn" result="lykkehjulet" />
      <Wheel
        withNotch={true}
        mirrorOn={true}
        values={["Blåbær", "Hindbær", "Kirsebær"]}
        rotations={6}
        rotationTime="3s"
        startDeg={30}
      />
    </div>
  )
}

export default WheelPage
