import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-bg text-text font-urbanist">
      <Navbar />
      {/* No container here! */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;