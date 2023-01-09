import React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useTypeSelector';
import Dashboard from './dashboard';
import Header from './header';
export type ChieldProps = {
    chield: React.ReactNode
}
const Admin = ({ chield }: ChieldProps) => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/login";
    const { user } = useAppSelector((state) => state.auth)
    if (user && !user.isAdmin) {
        return <Navigate to={from} replace />;
    }
    return (
        <div className='admin-container'>
            <Header />
            <Dashboard chield={chield} />
        </div>
    );
};

export default Admin;