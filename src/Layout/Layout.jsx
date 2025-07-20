import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-bg text-text font-urbanist">
      <Navbar className="bg-nebula" />
      {/* No container here! */}
      <main className="flex-1">
        <Outlet />
      </main>
       <Footer className="bg-nebula" />
    </div>
  );
};

export default Layout;
