import { createSlice, } from "@reduxjs/toolkit";

interface AuthState {
    status: 'not_authenticated' | 'authenticated' | 'checking';
    id: string | null;
    email: string | null;
    rol: string | null;
    fullName: string | null;
    a:null
}

const initialState: AuthState = {
    status: 'not_authenticated',
    id: null,
    email: null,
    rol: null,
    a:null,
    fullName: null
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.a = action.payload,
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.rol = action.payload.rol.rol;
            state.fullName = action.payload.firstName + action.payload?.lastName;

            console.log('Payload recibido en el login:', action.payload);
        },

        logOut: (state) => {
            state.status = 'not_authenticated';
            state.id = null;
            state.email = null;
            state.rol = null;
            state.fullName = null;
        },
        checkinCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logOut, checkinCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
