import { Dispatch } from 'redux';
import { checkinCredentials, login } from './authSlice';
import { AxiosResponse } from 'axios';

export const checkingAuthentication = () => {
    return async (dispatch: Dispatch) => {
        dispatch(checkinCredentials());
    };
};

export const signInWithEmail = (data:AxiosResponse) => {
    return async (dispatch: Dispatch) => {
        dispatch(checkinCredentials());
        if(data){
            console.log('dataxx', data)
        dispatch(login(data))
        }

    };
};


export const registerWithEmail = () =>{
    
}



