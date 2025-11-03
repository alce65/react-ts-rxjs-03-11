// Anotación de tipos
// =====================

// Anotación en los parámetros y en el valor de retorno
export const add = (a: number, b: number): number => {
    return a + b;
};

// Parámetros opcionales con valores por defecto
// Se infieren los tipos de los parámetros
export const addWithDefault = (a = 0, b= 0): number => {
    return a + b;
};

// En ambos casos el valor de retorno de la función se infiere
// Es una buena práctica indicarlo explícitamente
// Podemos activar la regla "noImplicitReturns" en tsconfig.json para forzar esta práctica

// Unión de tipos, en este caso primitivos string | number
// Tipo de retorno void
export const render = (value: string | number): void => {

    // Guarda de tipos
    if (typeof value === 'number') {
        value = value.toString();
    }
    // Narrowing: el tipo ya solo puede ser string
    console.log(value);
}

// Tipo any - mala práctica
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let variable: any = 'Hola';
variable = 22;
variable = true;
console.log(variable);


// Inferencia de tipos
// =====================

// TypeScript infiere el tipo automáticamente en la declaración con valor
let greeting = 'Hola mundo';
    // ^?
//@ts-expect-error El tipo 'number' no se puede asignar al tipo 'string' 
greeting = 22;
render(greeting);

//Tipos literales
export const pi = 3.14;
export let pi2 = 3.14 as const;
// @ts-expect-error El tipo '3.15' no se puede asignar al tipo '3.14'
pi2 = 3.15;

// Objetos
// =========

// Los objetos se crean como const para que sean inmutables
// Sin embargo, sus propiedades pueden ser modificables a menos que se indique lo contrario
// El tipo se infiere igual que en los primitivos
const user = { name: 'Juan', age: 30 };
console.log(user);
console.log(user);
// @ts-expect-error La propiedad 'job' no existe en el tipo...
user.job = "Developer";
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
user.age = "31";

// En lugar de inferir el tipo, se puede anotar explícitamente
// utilizando un type inline (o type literal) o una interfaz
const user1: { name: string; age: number; job?: string } = { name: 'María', age: 27 };
user1.job = 'Designer';

// También se puede usar la palabra clave Record<K, V>
// El tipo Record permite definir objetos con claves dinámicas
const userRecord: Record<string, string | number> = { name: 'Luis', age: 35 };
userRecord.job = 'Manager';
userRecord.age = 36;

// Objetos inmutables
const person = { name: 'Juan', age: 30 };
person.age = 31; // permitido

// Usando as const para hacer el objeto inmutable
const personConst = { name: 'Ana', age: 25 } as const;
// @ts-expect-error La propiedad 'age' es de solo lectura.
personConst.age = 26;


// Arrays
// =======

// Se crea como const para que no se puedan reasignar
// La inferencia de tipos en arrays vacíos es de tipo any[]
// Por eso es recomendable anotarlos explícitamente
const  numbers: number[] = [];
numbers.push(1);
numbers.push(2);
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
numbers.push("3");

// Si se desconoce el tipo, se puede usar unknown
export const data: unknown[] = []; // array de never
export const data4 = []

// El tipo unknown
// ===============

// unknown es mucho más restrictivo que any
const bad: unknown = 2;

// Para usar el valor, es necesario pasar de unknown a un tipo conocido

// Puede hacerse mediante 
// aserción o casting de tipos

// La aserción puede llevar a un error en tiempo de ejecución
// ya que realmente el valor será un number, sin la propiedad toLocaleLowerCase
// (bad as string).toLocaleLowerCase();

(bad as number).toFixed(2);

// También mediante Guardas de tipos

if (typeof bad === 'number') {
    console.log(bad.toFixed(2));
} else if (typeof bad === 'string') {
    console.log(bad.toLocaleLowerCase());
}

// Tuplas
// =======

const userTuple: [string, number] = ['Pedro', 35];
userTuple[0] = 'Pablo';
// @ts-expect-error El tipo de tupla ... no tiene ningún elemento en el índice "2".
userTuple[2] = "36";
// ¿Paradójicamente? push sí permite añadir elementos
userTuple.push(36);


// Tipos propios
// ===============

// Si se utilizan primitivos solo puede hacerse con type
type ID = string | number;

// Para objetos es posible usar type o interface
// Puede haber una regla de estilo en el proyecto para usar uno u otro

type User = { id: ID; name: string; age: number; job?: string };
// En este caso se Añade la I al final para evitar duplicar el nombre
// No es una convención común en TypeScript
interface UserI {
    readonly id: ID;
    name: string;
    age: number;
    job?: string;
}

// Uso de los tipos propios para anotar variables
const user2: User = { id: 2, name: 'Ana', age: 25 };
// Una propiedad opcional puede añadirse en cualquier momento
user2.job = 'Developer';

const users: User[] = [];
users.push(user2);
// Tipado estructural - duck typing
// Un objeto es del tipo User si tiene las mismas propiedades
// No importa si fue creado con la misma definición de tipo
users.push({ id: 3, name: 'Luis', age: 28, job: 'Designer' });

export const user3: User = { id: 3, name: 'SuperAdmin', age: 40, job: 'Manager' };
export const user4: UserI = { id: 4, name: 'SuperAdmin', age: 40, job: 'Manager' };
// Destructuring y spread
export const user5: UserI[] = [{ ...user2, id: 1 }];

// Acceso a valores del array
// Su tipo puede ser User | undefined
// PPara manipularlo se necesita hacer narrowing, eliminando el posible undefined
// Con una guarda de tipos o un casting
(users[0] as User).age++;

// Podría usarse el operador non-null assertion (postfijo !)
// Pero no es recomendable porque puede causar errores en tiempo de ejecución
// Así lo indica la regla eslint-disable @typescript-eslint/no-non-null-assertion

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
users[0]!.age++;

// Interfaces v. tipos

// Solo tipos

type PopularTag = 'js' | 'ts' | 'node' | 'react';
type MaybePopularTag = PopularTag | 'angular' | 'vue';

export const tag: MaybePopularTag = 'ts';

interface AdminI extends UserI {
    role?: 'admin' | 'superAdmin';
}

export const admin: AdminI = { id: 1, name: 'Admin', age: 40, role: 'admin' };


// Tipos híbridos con intersección de tipos
// =======================================

type BasicProduct = { id: number; name: string; price: number };
// Combinamos un tipo propio con otro literal
type BookProduct = BasicProduct & { author: string; pages: number };

export const book: BookProduct = {
    id: 1,
    name: 'TypeScript',
    price: 29.99,
    author: 'John Doe',
    pages: 300,
};

type WithReference = { reference: string };
// Combinamos dos tipos propios
type SpecialBookProduct = BookProduct & WithReference;

export const test: SpecialBookProduct = {
    id: 1,
    name: 'Test',
    price: 10,
    author: 'Author',
    pages: 100,
    reference: 'REF-001',
};

// Unión de tipos con tipos propios
// ================================

type BaseUser = {
    name: string;
    boss: string;
};

interface Admin {
    name: string;
    team: string;
}

type UserOrAdmin2 = BaseUser | Admin;

export const userOrAdmin = (u: UserOrAdmin2): void => {
    // Guarda de tipos mediante el operador in
    if ('boss' in u) {
        console.log(`Usuario: ${u.name}, Jefe: ${u.boss}`);
    } else {
        console.log(`Admin: ${u.name}, Equipo: ${u.team}`);
    }
};

// Uniones discriminadas
// =====================

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Rectangle | Circle;

export const area = (s: Shape): number => {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default:
            // Exhaustividad
            const imposible: never = s;
            return imposible; // Si llegamos aquí, s es de tipo 'never'
    }
};
