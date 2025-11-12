import { useState } from 'react';

export const useToggle = (initial = false): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initial);
    const toggle = (): void => setState((prev) => !prev);
    return [state, toggle];
};
