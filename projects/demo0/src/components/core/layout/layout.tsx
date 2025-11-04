import React from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

type Props = {
    appTitle: string;
};

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    appTitle,
}) => {
    return (
        <>
            <Header appTitle={appTitle} />
            <div>{children}</div>
            <Footer />
        </>
    );
};
