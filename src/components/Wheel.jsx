/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

import { useState } from "react"

const Wheel = (props) => {
  const { values, colors, mirrorOn, startDeg, rotations, rotationTime } = {
    ...props,
    mirrorOn: props.values.length < 6 ? props.mirrorOn : false,
  }

  // Calculates how many deg each piece of wheel will be
  const piePieceDeg =
    mirrorOn === true ? 360 / values.length / 2 : 360 / values.length

  let currentDegrees = 0
  // colors.length matches values.length fix
  const colorsDelExcess = colors.slice(0, values.length)

  // Doubles the values and colors if mirror is on
  const allValues = mirrorOn === true ? [...values, ...values] : values
  const allColors =
    mirrorOn === true
      ? [...colorsDelExcess, ...colorsDelExcess]
      : [...colorsDelExcess]

  // Generates the conic gradient
  const generatedConicGradient = allValues.map((value, index) => {
    // Only + the currentDegrees when index > 0
    if (index > 0) currentDegrees = currentDegrees + piePieceDeg
    // Returns the color & start-deg & end-deg
    return `${allColors[index]} ${currentDegrees}deg ${
      (index + 1) * piePieceDeg
    }deg`
  })

  const styles = {
    wheelContainer: css`
      display: grid;
      place-items: center center;
      width: 300px;
      height: 300px;
      cursor: pointer;
      transition: transform ${rotationTime};
    `,
    wheelBorder: css`
      pointer-events: none;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    wheelCenter: css`
      pointer-events: none;
      grid-area: 1/1;
      width: 20px;
      height: 20px;
      background-color: #000000;
      border-radius: 50%;
      z-index: 100;
      position: relative;
      outline: 5px solid #00000040;
    `,
    wheel: css`
      pointer-events: none;
      grid-area: 1/1;
      transform: rotate(${startDeg + "deg"});
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      border-radius: 50%;
      width: 280px;
      height: 280px;
      background: conic-gradient(${generatedConicGradient.toString()});
      &::after {
        content: "";
        background-color: #00000040;
        width: 92%;
        height: 92%;
        border-radius: 50%;
        box-sizing: border-box;
      }
    `,
    text: css`
      pointer-events: none;
      position: absolute;
      width: 100%;
      text-align: start;
      padding-left: 20px;
      font-size: 1.3rem;
      font-weight: 900;
      user-select: none;
    `,
  }

  // Generates li inside wheel and place text accordingly
  let currentDegText = 90 + piePieceDeg / 2
  const valuesMapped = allValues.map((value, index) => {
    if (index > 0) currentDegText = currentDegText + piePieceDeg
    return (
      <li
        style={{ transform: `rotate(${currentDegText}deg)` }}
        css={styles.text}
        key={nanoid()}
      >
        {value}
      </li>
    )
  })

  const [isSpinning, setIsSpinning] = useState(false)
  const [winDeg, setWinDeg] = useState(0)

  let winningDeg = 0
  // Spinning wheel XXXdeg
  function clicked(e) {
    if (!isSpinning) {
      setIsSpinning(true)
      winningDeg = Math.ceil(Math.random() * 360)
      setWinDeg(winningDeg)
      e.target.style.transform = `rotate(${winningDeg + 360 * rotations}deg)`
    }
  }

  // Resets degrees when finished spinning
  function endSpin(e) {
    e.target.style.transition = "unset"
    e.target.style.transform = `rotate(${winDeg}deg)`
    setTimeout(() => {
      setIsSpinning(false)
      e.target.style.transition = `transform ${rotationTime} ease-out`
    }, 200)
  }

  return (
    <div
      onClick={clicked}
      onTransitionEnd={endSpin}
      css={styles.wheelContainer}
    >
      <div css={styles.wheelCenter}></div>
      <ul css={styles.wheel}>{valuesMapped}</ul>
    </div>
  )
}

// Default props (only values is necessary)
Wheel.defaultProps = {
  mirrorOn: true,
  values: ["Please", "Input", "Some", "Values"],
  colors: [
    "#CBE896",
    "#AAC0AA",
    "#FCDFA6",
    "#A18276",
    "#F4B886",
    "#666A86",
    "#FC9F5B",
    "#E0AFA0",
    "#F9A03F",
    "#BE6E46",
    "#647AA3",
    "#DE9151",
    "#3F6C51",
  ],
  rotations: 6,
  rotationTime: "3s",
  startDeg: 0,
}

export default Wheel
