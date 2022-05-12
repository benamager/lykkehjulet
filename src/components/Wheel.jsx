/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

const Wheel = (props) => {
  const { values, colors } = props

  // Calculates how many deg each piece of wheel will be
  const piePieceDeg =
    props.mirrorOn === true ? 360 / values.length / 2 : 360 / values.length

  let currentDegrees = 0
  // Generates the conic gradient

  // Doubles the values and colors if mirror is on
  const allValues = props.mirrorOn === true ? [...values, ...values] : values
  const allColors = props.mirrorOn === true ? [...colors, ...colors] : colors

  const generatedConicGradient = allValues.map((value, index) => {
    // Only + the currentDegrees when index > 0
    if (index > 0) currentDegrees = currentDegrees + piePieceDeg
    // Returns the color & start-deg & end-deg
    return `${allColors[index]} ${currentDegrees}deg ${
      (index + 1) * piePieceDeg
    }deg`
  })

  const styles = {
    wheelBorder: css`
      border-radius: 50%;
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    wheel: css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      border-radius: 50%;
      width: 280px;
      height: 280px;
      background: conic-gradient(${generatedConicGradient.toString()});
      /* background: conic-gradient(
        #f2d398 0deg 120deg,
        #e8ebf7 120deg 240deg,
        #247b7b 240deg 360deg
      ); */
      &::after {
        content: "";
        background-color: #00000040;
        width: 92%;
        height: 92%;
        border-radius: 50%;
        box-sizing: border-box;
      }
    `,
    //Fix font
    text: css`
      position: absolute;
      width: 100%;
      text-align: start;
      padding-left: 20px;
      -background-color: red;
      font-size: 1.3rem;
      font-weight: 900;
      -transform: rotate(90deg);
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
    <div>
      <ul css={styles.wheel}>{valuesMapped}</ul>
    </div>
  )
}

export default Wheel
