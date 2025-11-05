import { Card } from '@/components/core/card/card';
import React, { useState } from 'react'
import type { Result } from '../result';
import { getData } from '@/components/services/data.service';

export const Search: React.FC = () => {


    const [results, setResults] = useState<Result[]>([]);

    const handleInput = async (event: React.FormEvent<HTMLInputElement>): Promise<void> => {
        const {value } = event.currentTarget;
        // Simular resultados de búsqueda
        const data = await getData(value);
        setResults(data);
    }
    
      return (
        <Card title="Simple Search">
            <label htmlFor="">
                <span>Search: </span>
                <input onInput={handleInput} />
            </label>
            <ul>
                {results.map((r, i) => (
                    <li key={i}>{JSON.stringify(r)}</li>
                ))}
            </ul>
        </Card>
    );
}

