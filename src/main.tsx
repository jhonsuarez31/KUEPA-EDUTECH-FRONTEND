import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import SigninContainer from "./features/auth/singin/signin.auth.container"
import SignupContainer from "./features/auth/singup/signup.auth.container"

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="signin" element={<SigninContainer />} />
          <Route path="signup" element={<SignupContainer />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  )
} else {
  console.error("No se encontró el elemento con ID 'root'")
}