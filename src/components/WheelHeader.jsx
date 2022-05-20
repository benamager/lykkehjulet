const WheelHeader = (props) => {
  const { title, result } = props
  return (
    <div>
      <h2>{title}</h2>
      <h1>{result}</h1>
    </div>
  )
}

export default WheelHeader
