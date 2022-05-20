import { useState, useEffect } from "react"

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    passwd: "",
  })

  function handleChange(event) {
    const { name, value, type } = event.target
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div>
      <h1>Login fucking page</h1>
      <form>
        <input
          onChange={handleChange}
          value={formData.username}
          type="text"
          placeholder="brugernavn..."
          name="username"
        />
        <input
          onChange={handleChange}
          value={formData.passwd}
          type="text"
          placeholder="adgangskode..."
          name="passwd"
        />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Login
