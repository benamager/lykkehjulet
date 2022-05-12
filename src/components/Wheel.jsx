/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

const Wheel = (props) => {
  const { values, colors, mirrorOn, startDeg } = props

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
    `,
    wheelBorder: css`
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    wheelCenter: css`
      grid-area: 1/1;
      width: 30px;
      height: 30px;
      background-color: #000000;
      border-radius: 50%;
      z-index: 100;
      position: relative;
    `,
    wheel: css`
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
      position: absolute;
      width: 100%;
      text-align: start;
      padding-left: 20px;
      font-size: 1.3rem;
      font-weight: 900;
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

  return (
    <div css={styles.wheelContainer}>
      <div css={styles.wheelCenter}></div>
      <ul css={styles.wheel}>{valuesMapped}</ul>
    </div>
  )
}

export default Wheel
