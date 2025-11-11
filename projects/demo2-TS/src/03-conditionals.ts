/**
 * Tipos condicionales
 * ====================
 */

type isNumber<T> = T extends number ? number : 'Not number';

export type A = isNumber<number>; // number
// ^?
export type B = isNumber<string>; // "Not number"
// ^?

type JsonValue<T> = T extends object ? string : T;

export const data1: JsonValue<number> = 10;
// ^?
export const data2: JsonValue<{ id: number }> = '{"id":1}'; // string, ya que es un objeto
// ^?

// Tipos true/false basados en condiciones:

export interface User {
    role: 'user';
}
export interface Admin {
    role: 'admin';
}
export interface Guest {
    role: 'guest';
}

export type CanUpdate<T> = T extends { role: 'guest' } ? false : true;

// Uniones discriminadas v. tipos condicionales genéricos

// Ejemplo con uniones discriminadas
{
    type Shape =
        | { kind: 'circle'; radius: number }
        | { kind: 'square'; size: number };

    const area = (shape: Shape): number => {
        switch (shape.kind) {
            case 'circle':
                return Math.PI * shape.radius ** 2;
            case 'square':
                return shape.size ** 2;
        }
    };
    console.log(area({ kind: 'circle', radius: 5 })); // 78.53981633974483
    console.log(area({ kind: 'square', size: 4 })); // 16
}

// Ejemplo con tipos condicionales genéricos
{
    type Circle = { radius: number };
    type Square = { size: number };

    type Shape<T> = T extends 'circle'
        ? Circle
        : T extends 'square'
        ? Square
        : never;

    const area = <T extends 'circle' | 'square'>(shape: Shape<T>): number => {
        if ('radius' in shape) {
            return Math.PI * shape.radius ** 2;
        } else if ('size' in shape) {
            return shape.size ** 2;
        }
        throw new Error('Unknown shape');
    };

    console.log(area({ radius: 5 })); // 78.53981633974483
    console.log(area({ size: 4 })); // 16
}

// Ejemplos del uso de infer en TS

// Problema con la inferencia incorrecta del tipo de una tupla

function describePerson(person: {
    name: string;
    age: number;
    hobbies: [string, string]; // tuple
}): string {
    return `${person.name} is ${
        person.age
    } years old and loves ${person.hobbies.join(' and  ')}.`;
}

const user1 = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'hiking'],
};

//@ts-expect-error -- TypeScript error: hobbies should be a tuple of [string, string]
describePerson(user1);

// Solución usando infer para extraer el tipo del primer argumento de una función

type GetFirstArgumentOfAnyFunction<T> = T extends (
    first: infer FirstArgument,
    ...args: unknown[]
) => unknown
    ? FirstArgument
    : never;

const user2: GetFirstArgumentOfAnyFunction<typeof describePerson> = {
    name: 'Alex',
    age: 20,
    hobbies: ['walking', 'cooking'],
};

describePerson(user2); /* No TypeScript errors */

type HobbiesType<T> = T extends { hobbies: infer H } ? H : never;
type PersonHobbies = HobbiesType<{
    name: string;
    age: number;
    hobbies: [string, string];
}>; // [string, string]
const user3 = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'hiking'] as PersonHobbies,
};

describePerson(user3);

// Ejemplo con promesas

type AwaitedType<T> = T extends Promise<infer U> ? U : T;

export type Ax = AwaitedType<Promise<number>>; // number
//          ^?
export type Bx = AwaitedType<string>; // string
//          ^?
