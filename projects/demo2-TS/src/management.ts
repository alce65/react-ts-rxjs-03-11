/**
 * Manipulación de tipos con operadores
 * ====================================
 */

/**
 * Type Queries: typeof & keyof
 */

// Ejemplo de typeof

export const x = 10;
export type XType = typeof x; // number

// Ejemplo de keyof

interface Person {
    name: string;
    age: number;
}

export type PersonKeys = keyof Person; // "name" | "age"
//^?

export const user = {
    name: 'Alice',
    age: 30,
};



export type UserKeys = keyof typeof user; // "name" | "age"

/* eslint-disable */
export const makeQuery = (
    _url: string,
    _opts?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
    }
) => {};
/* eslint-enable */

export type MReturnType = ReturnType<typeof makeQuery>; // void
export type MParams = Parameters<typeof makeQuery>; // [string, { method?: string; headers?: { [key: string]: string; }; body?: string; }?]


/**
 * Tipos de acceso indexado (Indexed Access Types)
 */

interface Entity {
    id: string | number;
    name: string;
}

export type EntityId = Entity['id']; // string | number

// Ejemplo junto a otros operadores

interface TextVariants {
    primary: 'black';
    secondary: 'grey';
    danger: 'red';
}

export type PrimaryColor = TextVariants['primary'];
//   ^?

export type NoDangerColor = TextVariants['primary' | 'secondary'];
//   ^?

export type Color = TextVariants[keyof TextVariants];
//   ^?

// Ejemplo con arrays y tuplas

export type Letters = ['a', 'b', 'c'];
//   ^?
export type AorB = Letters[0 | 1];
//   ^?

export type Letter = Letters[number];
//   ^?

// Ejemplo anidando...

interface UserRoleConfig {
    user: ['view', 'create', 'update'];
    admin: ['view', 'create', 'update', 'delete'];
}

export type Actions = UserRoleConfig[keyof UserRoleConfig][number];
//   ^?

// Posibles claves
// No pueden ser directamente variables de tipo string
// Pero si sus tipos

interface TextVariants {
    primary: 'black';
    secondary: 'grey';
    danger: 'red';
}

export const keyTV = 'primary';

export type Primary1 = TextVariants[typeof keyTV];

// Uso frente a Record

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export const numbers: { [K: string]: string } = {
    uno: '1',
    dos: '2',
};

export type NewTextVariants = 'primary' | 'secondary' | 'danger';

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export const colors: { [K in NewTextVariants]: string } = {
    primary: 'black',
    secondary: 'grey',
    danger: 'red',
};

// Como records serían

export const numbersRecord: Record<string, string> = {
    uno: '1',
    dos: '2',
};

export const colorsRecord: Record<NewTextVariants, string> = {
    primary: 'black',
    secondary: 'grey',
    danger: 'red',
};
