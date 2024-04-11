import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode[];
}

const Layout = ({ children }: Props) => {
  if (children.length !== 2) {
    throw new Error('Layout component requires exactly two children');
  }

  return (
    <div className="w-full flex justify-center" >
      <div className="w mr-4 flex items-center justify-center border-2">
        {children[0]}
      </div>
      <div className="w-1000 flex items-center justify-center bg-blue-500 borderc-5">
        {children[1]}
      </div>
    </div>
  );
};

export default Layout;
