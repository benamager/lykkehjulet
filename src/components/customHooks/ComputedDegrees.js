const ComputedDegrees = (elementId) => {
  let computedDegrees
  let tm = window.getComputedStyle(document.getElementById(elementId), null)
  let st =
    tm.getPropertyValue("-webkit-transform") ||
    tm.getPropertyValue("-moz-transform") ||
    tm.getPropertyValue("-ms-transform") ||
    tm.getPropertyValue("-o-transform") ||
    tm.getPropertyValue("transform")
  if (st !== "none") {
    const values = st.split("(")[1].split(")")[0].split(",")
    const angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI))
    //calls checkResult to update text
    computedDegrees = angle < 0 ? angle + 360 : angle
  }
  return computedDegrees
}

export default ComputedDegrees
