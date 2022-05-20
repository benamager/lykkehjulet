import Register from "./pages/Register"
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import EditPage from "./pages/EditPage"
import WheelPage from "./pages/WheelPage"
import ErrorPage from "./pages/ErrorPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="wheel" element={<WheelPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
