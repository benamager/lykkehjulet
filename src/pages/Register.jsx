import { useState, useEffect } from "react"

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    passwd: "",
    confirmpasswd: "",
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
      <h1>Register fucking page</h1>
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
        <input
          onChange={handleChange}
          value={formData.confirmpasswd}
          type="text"
          placeholder="gentag adgangskode..."
          name="confirmpasswd"
        />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
