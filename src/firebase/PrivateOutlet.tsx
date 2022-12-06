import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useTypeSelector';
import { logout, verifyJwt } from '../redux/reducer/authSlices';
import { isAuth } from './auth'
import { useAuth } from './authProvider';

export default function PrivateOutlet() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { jwt, user } = useAppSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token))
      .unwrap()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        <Navigate to="/login" state={{ from: location }} replace />;
      })

  });
  return jwt ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
