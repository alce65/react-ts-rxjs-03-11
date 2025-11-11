// Anotación de tipos genéricos
// =============================
function identity<T>(value: T): T {
    return value;
    // ^?
}

export const num = identity(42); // T es number
// ^?
export const text = identity('Hola'); // T es string

export const identityArrow = <T,>(value: T): T => {
    return value;
};


// Genéricos en interfaces

interface DataObject<T> {
    value: T;
}

export const dataString: DataObject<string> = { value: 'Texto' };
export const dataNumber: DataObject<number> = { value: 123 };

// Interfaces com varios genéricos

interface Pair<K, V> {
    key: K;
    value: V;
}

export const pair1: Pair<string, number> = {
    key: 'age',
    value: 30,
};

export const pair2: Pair<number, string> = {
    key: 1,
    value: 'one',
};

// Interface repository genérica

export interface Repository<T> {
    getAll: () => T[];
    getById: (id: string) => T | null;
    save: (item: T) => void;
    update: (id: string, item: T) => void;
    delete: (id: string) => void;
}

// Genéricos en clases

class Container<T> {
    private _content: T;

    constructor(value: T) {
        this._content = value;
    }

    get content(): T {
        return this.content;
    }

    set content(value: T) {
        this._content = value;
    }


}
export const container1 = new Container<boolean>(true);
export const container2 = new Container(true);


// Interface repository genérica

export interface Repository2<T extends { id: unknown}> {
    getAll: () => T[];
    getById: (id: T['id']) => T | null;
    save: (item: T) => void;
    update: (id: T['id'], item: T) => void;
    delete: (id: T['id']) => void;
}
