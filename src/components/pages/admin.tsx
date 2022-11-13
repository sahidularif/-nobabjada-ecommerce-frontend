import React from 'react';
import Dashboard from '../admin/dashboard';
import Header from '../admin/header';
export type ChieldProps = {
    chield: React.ReactNode
   }
const Admin = ({chield}: ChieldProps) => {
    return (
        <div className='admin-container'>            
            <Header/>
            <Dashboard chield={chield}/>
        </div>
    );
};

export default Admin;