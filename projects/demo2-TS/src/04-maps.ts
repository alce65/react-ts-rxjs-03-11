/**
 * Tipos mapeados
 * ====================
 */

// Ejemplo. Planteamiento: Tenemos un formulario con una serie de campos
// y una función de validación para controlarlo
// Queremos crear un tipo que represente el estado de validación de cada campo
// mediante un objeto con las propiedades hasError, message y value

interface UserForm {
    firstName: string;
    lastName: string;
    address: string;
}

type ValidationForm<Form> = {
    [key in keyof Form]: {
        hasError: boolean;
        message: string;
        value: Form[key];
    };
};

type UserValidationForm = ValidationForm<UserForm>;

export const userFormValidation: UserValidationForm = {
    firstName: {
        hasError: false,
        message: '',
        value: 'Alejandro',
    },
    lastName: {
        hasError: true,
        message: 'Last name is required',
        value: '',
    },
    address: {
        hasError: false,
        message: '',
        value: 'Calle Falsa 123',
    },
};

type FormGetters<Form> = {
    [Key in keyof Form as `get${Capitalize<string & Key>}`]: () => Form[Key];
};

export const userFormGetters: FormGetters<UserForm> = {
    getFirstName: () => 'Alejandro',
    getLastName: () => 'González',
    getAddress: () => 'Calle Falsa 123',
};
