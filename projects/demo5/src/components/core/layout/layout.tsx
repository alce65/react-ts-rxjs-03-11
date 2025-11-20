import React from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';



export const Layout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer />
        </>
    );
};
