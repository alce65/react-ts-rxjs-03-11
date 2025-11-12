import { useState } from "react";

export const useLocalStorage = <T,>(
    key: string,
    initialValue: T
): [T, (value: T) => void, () => void] => {
    const calculateInitialValue = (): T => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    };
    const [storedValue, setStoredValue] = useState<T>(calculateInitialValue);

    const setValue = (value: T): void => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getValue = (): T => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        setValue(initialValue);
        return initialValue;
    };

    return [storedValue, setValue, getValue];
};
