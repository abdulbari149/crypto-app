import { Routes, Route } from "react-router-dom"
const Login = () => {
  return (
    <div>Login</div>
  )
}

const AuthPage = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default AuthPage