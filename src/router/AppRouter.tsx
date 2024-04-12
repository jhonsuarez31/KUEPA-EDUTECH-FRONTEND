import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import SigninContainer from '../features/auth/singin/signin.auth.container';
import SignupContainer from '../features/auth/singup/signup.auth.container';
import DashboarClassContainer from '../features/class/dashboard/class.dashboard.container';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="singin/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="signin" element={<SigninContainer />} />
                <Route path="signup" element={<SignupContainer />} />
                <Route path="class" element={<DashboarClassContainer />} />
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
