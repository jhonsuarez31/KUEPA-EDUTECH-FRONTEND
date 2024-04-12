import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SigninView from './signin.auth.view';
import { AuthController } from '../../../controllers/auth/auth.controller';
import { showAlert } from '../../../utils/alerts/alert.util';
import {
  checkingAuthentication,
  signInWithEmail,
} from '../../../store/auth/thunks';
import { useAppDispatch } from '../../../hooks/app/hooks';
import { AxiosError } from 'axios';

const SigninContainer = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const authController = new AuthController();

  const handlerShowPassword = () => setShowPassword(!showPassword);

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handlerSignIn = async () => {
    try {
      const signInDto = { email, password };
      dispatch(checkingAuthentication());
      const signInRepose = await authController.signIn(signInDto);
      if (signInRepose.data) {
        dispatch(signInWithEmail(signInRepose.data));
        localStorage.setItem('token', signInRepose.data.token);
        showAlert('Bienvenido', 'Has iniciado sesión correctamente', 'success');
        navigate('/class');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError;
        console.log('axiosError', axiosError);
        showAlert('error', 'Usuario o contraseña incorrectos', 'error');
      }
    }
  };

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
  );
};

export default SigninContainer;
