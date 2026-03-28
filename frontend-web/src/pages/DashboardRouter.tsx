import React from 'react';
import NeedyDashboard from './NeedyDashboard';
import DonorDashboard from './DonorDashboard';
import NGODashboard from './NGODashboard';
import AdminDashboard from './AdminDashboard';

const DashboardRouter = () => {
  const role = localStorage.getItem('userRole') || 'Needy';

  switch (role) {
    case 'Needy': return <NeedyDashboard />;
    case 'Donor': return <DonorDashboard />;
    case 'NGO': return <NGODashboard />;
    case 'Admin': return <AdminDashboard />;
    default: return <NeedyDashboard />;
  }
};

export default DashboardRouter;
