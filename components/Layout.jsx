import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
    <>
        <header>
            <Header />
        </header>
        <main>{children}</main>
    </>
);

export default Layout;
