import React, { ReactNode } from 'react';
import NavbarContainer from '../components/navbar/navbar.container';

interface Props {
  children: ReactNode[] | ReactNode ;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <NavbarContainer />
      <main className="container container-xl pt-16 pb-36">{children}</main>
    </div>
  )
};

export default Layout;
