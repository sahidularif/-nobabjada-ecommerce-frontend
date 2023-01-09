import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useTypeSelector';
import { verifyJwt } from '../redux/reducer/authSlices';

export default function PrivateOutlet() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/login";
  const { jwt } = useAppSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token))
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        <Navigate to="/login" state={{ from: location }} replace />;
        // <Navigate to="/login" replace={true} />;
      })

  });
  return jwt ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
