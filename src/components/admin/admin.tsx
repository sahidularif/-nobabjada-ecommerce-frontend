import React, {useEffect} from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useTypeSelector';
import Dashboard from './dashboard';
import Header from './header';
import { verifyJwt } from '../../redux/reducer/authSlices';
export type ChieldProps = {
    chield: React.ReactNode
}
const Admin = ({ chield }: ChieldProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/login";
    const { user, jwt, isAuthenticated } = useAppSelector((state) => state.auth)

    React.useEffect(() => {
        if (!jwt || !jwt?.token) return;
    
        // dispatch(verifyJwt(jwt.token))
        //   .unwrap()
        //   .then(() => {
        //     // if(!payload){
        //     //   navigate(from, { replace: true });
        //     // }
           
        //   })
        //   .catch((err) => {
        //     // console.log(err)
        //     navigate(from, { replace: true });
        //     // <Navigate to="/login" state={{ from: location }} replace />;
        //     // <Navigate to="/login" replace={true} />;
        //   })
    
      });


    return (
        <div className='admin-container'>
            <Header />
            <Dashboard chield={chield} />
        </div>
    );
};

export default Admin;