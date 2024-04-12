import {  useLocation } from 'react-router-dom';



export const PrivateRoute = () => {

    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

   
}