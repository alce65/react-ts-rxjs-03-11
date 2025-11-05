import React, { useState } from 'react';
import type { Login } from '../../types/user';
import { Card } from '../../../core/card/card';
import './login.form.css';
import { manageLoginService } from '../../services/user.service';

const initialState: Login = {
    email: '',
    passwd: '',
    rememberMe: false,
};

type Props = {
    manageStates?: (loginData: Login) => Promise<void>;
};

export const LoginForm: React.FC<Props> = ({
    manageStates = manageLoginService,
}) => {
    const [userData, setUserData] = useState<Login>(initialState);

    const handleSubmit = async (
        ev: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        ev.preventDefault();
        await manageStates(userData);
        setUserData(initialState);
    };

    const handleChange = (
        ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        const { name, value, type } = ev.target;
        const val =
            type === 'checkbox'
                ? (ev.target as HTMLInputElement)?.checked
                : value;
        setUserData({
            ...userData,
            [name]: val,
        });
    };

    return (
        <Card title="Formulario de Login">
            <form onSubmit={handleSubmit}>
                <p>Ejemplo de 'Controlled Form'</p>
                <div className="group-control">
                    <input
                        type="email"
                        name="email"
                        placeholder="Dime tu email"
                        aria-label="email"
                        required
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="group-control">
                    <input
                        type="password"
                        name="passwd"
                        placeholder="Dime tu password"
                        required
                        value={userData.passwd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            aria-label="rememberMe"
                            checked={userData.rememberMe}
                            onChange={handleChange}
                        />
                        Recuérdame
                    </label>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};
