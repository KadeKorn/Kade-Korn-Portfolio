import React from 'react';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Social from './Social';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <main
          className={`mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 max-w-screen-xl ${className}`}
        >
          {children}
        </main>
      </div>
      <Footer />
      <Social />
      <Email />
    </>
  );
};

export default Layout;
