import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@radix-ui/react-menubar"
  import { Menu } from "lucide-react"
  import { FC } from "react"
  import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "../ui/avatar"
  
  interface NavbarLinkProps {
    name: string
    path: string
  }
  
  interface PropsInterface {
    routes: NavbarLinkProps[]
  }
  
  const NavbarView: FC<PropsInterface> = ({ routes }) => {
    return (
      <>
        <nav className="flex w-full h-14 mx-auto pl-4 pr-4 items-center justify-between bg-gray-900">
          <img src= 'https://i.ibb.co/C1pXBG1/nestle1.png' width={100} />
          <Menubar className="md:hidden ">
            <MenubarMenu>
              <MenubarTrigger>
                <Menu />
              </MenubarTrigger>
              <MenubarContent>
                {routes.map((route, index) => {
                  return (
                    <MenubarItem key={index}>
                      <Link to={route.path}>
                        <Button
                          className="text-xs text-gray-200"
                          size={"sm"}
                          variant={"link"}
                        >
                          {route.name}
                        </Button>
                      </Link>
                    </MenubarItem>
                  )
                })}
                <MenubarItem>
                  <Link to={"/profile"}>
                    <Button
                      className="text-xs text-gray-200"
                      size={"sm"}
                      variant={"link"}
                    >
                      Profile
                    </Button>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <ul className="hidden md:flex  items-center">
            {routes.map((route, index) => {
              return (
                <li key={index}>
                  <Link to={route.path}>
                    <Button
                      className="text-xs text-gray-400 hover:text-white"
                      size={"sm"}
                      variant={"link"}
                    >
                      {route.name}
                    </Button>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link to={"/profile"}>
                <Avatar>
                    <AvatarImage src="https://picsum.photos/30" alt="@shadcn" />
                </Avatar>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
  
  export default NavbarView
  