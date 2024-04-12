import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter,  } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store/app/store"
import { AppRouter } from "./router/AppRouter"

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <BrowserRouter>
      <React.StrictMode>
        <AppRouter/>
      </React.StrictMode>
    </BrowserRouter>
    </Provider>
  )
} else {
  console.error("No se encontró el elemento con ID 'root'")
}