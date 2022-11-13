import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useTypeSelector';
import { logout, verifyJwt } from '../redux/reducer/authSlices';
import { isAuth } from './auth'
import { useAuth } from './authProvider';

export default function PrivateOutlet() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { jwt, user } = useAppSelector(
      (state) => state.auth
    );
    React.useEffect(() => {
      if (!jwt || !jwt?.token) return;
  
      dispatch(verifyJwt(jwt.token))
    
    });
    return jwt? <Outlet /> : <Navigate to="/login" />
}
