import { FC } from "react"
import NavbarView from "./navbar.view"

const routes = [
  {
    name: "Cursos",
    path: "/cursos",
  },
  {
    name: "Perfil",
    path: "perfil",
  },
]

interface NavbarProps {}

const NavbarContainer: FC<NavbarProps> = () => {
  return (
    <>
      <NavbarView routes={routes} />
    </>
  )
}

export default NavbarContainer
