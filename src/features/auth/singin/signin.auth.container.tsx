import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SigninView from "./signin.auth.view"
import { AuthController } from "../../../controllers/auth/auth.controller"
import { showAlert } from "../../../utils/alerts/alert.util"

const SigninContainer = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const authController = new AuthController()

  const handlerShowPassword = () => setShowPassword(!showPassword)

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const handlerSignIn = async () => {
    const signInDto = { email, password }
    const signInRepose = await authController.signIn(signInDto)
    console.log('signInRepose', signInRepose)
    if (signInRepose.data) {
      localStorage.setItem("userid", signInRepose.data.id)
      localStorage.setItem("token", signInRepose.data.token)
      localStorage.setItem("firstName", signInRepose.data.firstName)
      localStorage.setItem("rol", signInRepose.data.rol.rol)


      showAlert("Bienvenido", "Has iniciado sesión correctamente", "success")
      navigate("/class")
    } else {
      showAlert("error", "Usuario o contraseña incorrectos")
    }
  }

  return (
    <>
      <SigninView
        showPassword={showPassword}
        onClickShowPassword={handlerShowPassword}
        email={email}
        onChangeEmail={handlerEmail}
        password={password}
        onChangePassword={handlerPassword}
        onClickSignIn={handlerSignIn}
      />
    </>
  )
}

export default SigninContainer