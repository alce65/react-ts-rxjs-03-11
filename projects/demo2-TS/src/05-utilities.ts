/**
 * Utilidades de Tipos
 * ===================
 */

/**
 * Extract<Type, Union>
 */

// Construye un tipo extrayendo de Type todos los typos
// que pueden ser asignados a Union

// Similar a Pick, pero a nivel de uniones de tipos

export type AvailableLetters1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
//          ^?

// Ejemplo

export type Event1 =
    | {
          type: 'click';
          event: MouseEvent;
      }
    | { type: 'focus'; event: FocusEvent }
    | { type: 'keydown'; event: KeyboardEvent };

// Queremos extraer la unión que cumple con el tipo de evento del ratón

export type ClickEvent = Extract<Event1, { type: 'click' }>;
//          ^?

/**
 * Exclude<Type, Union>
 */

// Construye un tipo excluyendo de Type todos los typos
// que pueden ser asignados a Union

// Similar a Omit a nivel de uniones de tipos

export type AvailableLetters2 = Exclude<'a' | 'b' | 'c', 'a' | 'f'>;
//          ^?

// Ejemplo

type Event2 =
    | {
          type: 'click';
          event: MouseEvent;
      }
    | { type: 'focus'; event: FocusEvent }
    | { type: 'keydown'; event: KeyboardEvent };

// Queremos excluir de la unión los tipos que no son un evento de teclado

export type NonKeyboardEvent = Exclude<Event2, { type: 'keydown' }>;
//          ^?

/**
 * Pick(Type, key) / Omit(Type, key)
 */

// Pick: Creamos un nuevo tipo tomando de Type las claves de Key
// Omit: Creamos un nuevo tipo eliminando de Type las claves de Key

interface User {
    id: string;
    name: string;
    surname: string;
    age: number;
}

// Queremos crear un nuevo tipo, con las propiedades name y surname de User
// mediante Omit y Pick

export type MyType1 = Pick<User, 'name' | 'surname'>;
//          ^?

export type MyType2 = Omit<User, 'id' | 'age'>;
//          ^?
