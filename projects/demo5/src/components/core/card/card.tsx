import React from 'react';
import './card.css';

type Props = {
    title?: string;
};

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    title,
}) => {
    return (
        <div className="card" role="region">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
};
