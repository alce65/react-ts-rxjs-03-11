
// import { getDataOfForm } from '../tools/form-tools';
import { Card } from '@/components/core/card/card';
import { registerUserService } from '../../services/user.service';
import type { Register } from '../../types/user';
import './register.form.css';
import { getDataOfForm } from '../tools/form-tools';


const userDataInitial: Register = {
    userName: '',
    email: '',
    passwd: '',
    isOkConditions: false,
    turn: '',
    course: '',
};

type Props = {
    registerUser?: (userData: Register) => Promise<void>;
};

export const RegisterForm: React.FC<Props> = ({
    registerUser = registerUserService,
}) => {
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        const form = ev.currentTarget;

        // Acceso a los datos como elementos del formulario
        const userData1 = getDataOfForm(form, userDataInitial);
        registerUser(userData1).then(() => {
            // form.reset();
            console.log('Enviado (elements): Usuario registrado');
        });

        // Acceso a los datos como FormData
        const formData = new FormData(form);
        const userData2 = getDataOfForm(formData, userDataInitial);
        registerUser(userData2).then(() => {
            form.reset();
            console.log('Enviado (formData): Usuario registrado');
        });
    };

    return (
        <Card title="Formulario de Registro">
            <form onSubmit={handleSubmit} aria-label="register-form">
                <p>Ejemplo de 'UnControlled Form'</p>

                <div className="group-control">
                    <input
                        type="text"
                        name="userName"
                        placeholder="Dime tu nombre"
                        aria-label="name"
                        required
                        defaultValue={userDataInitial.userName}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="email"
                        name="email"
                        placeholder="Dime tu email"
                        aria-label="email"
                        required
                        defaultValue={userDataInitial.email}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="password"
                        name="passwd"
                        placeholder="Dime tu password"
                        aria-label="password"
                        required
                        defaultValue={userDataInitial.passwd}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="checkbox"
                        name="isOkConditions"
                        aria-label="conditions"
                        id="cr-is-ok"
                        defaultChecked={userDataInitial.isOkConditions}
                    />
                    <label htmlFor="is-ok">Acepto las condiciones...</label>
                </div>

                <fieldset name="turn">
                    <legend>Selecciona un turno</legend>
                    <input
                        type="radio"
                        name="turn"
                        aria-label="turn"
                        id="cr-turno-m"
                        value="M"
                    />
                    <label htmlFor="turno-m">Mañana</label>
                    <input type="radio" name="turn" id="cr-turno-t" value="T" />
                    <label htmlFor="turno-t">Tarde</label>
                    <input type="radio" name="turn" id="cr-turno-n" value="N" />
                    <label htmlFor="turno-n">Noche</label>
                </fieldset>

                <label htmlFor="course">Elige un curso</label>
                <select
                    name="course"
                    aria-label="course"
                    id="cr-course"
                    defaultValue={userDataInitial.course}
                >
                    <option value=""></option>
                    <option value="A">Angular</option>
                    <option value="R">React</option>
                    <option value="N">Node</option>
                </select>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};
