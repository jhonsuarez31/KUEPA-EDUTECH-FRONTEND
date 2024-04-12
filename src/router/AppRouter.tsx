import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SigninContainer from '../features/auth/singin/signin.auth.container';
import SignupContainer from '../features/auth/singup/signup.auth.container';
import DashboarClassContainer from '../features/class/dashboard/class.dashboard.container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkingAuthentication, signInWithEmail } from '../store/auth/thunks';

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingAuthentication());
  }, [dispatch]);

  if (status === 'not_authenticated') {
    return (
        <div>Cargando...</div>
    );
  }

  return (
    <Routes>
      <Route path="signin" element={<SigninContainer />} />
      <Route path="signup" element={<SignupContainer />} />
      <Route path="class" element={<DashboarClassContainer />} />

      <Route path="/*" element={<Navigate to="signin" />} />
    </Routes>
  );
};
