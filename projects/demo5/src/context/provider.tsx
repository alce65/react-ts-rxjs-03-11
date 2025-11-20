import React from 'react';
import { AppContext, type AppContextType } from './context';

type Props = {
    context: AppContextType;
};

export const AppContextProvider: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    context,
}) => {
    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};
