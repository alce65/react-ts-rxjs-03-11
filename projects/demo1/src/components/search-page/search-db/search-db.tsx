import { Card } from '@/components/core/card/card';
import React, { useRef, useState } from 'react';
import type { Result } from '../result';
import { getData } from '@/components/services/data.service';


export const SearchDb: React.FC = () => {
    const [results, setResults] = useState<Result[]>([]);
    const timeRef = useRef<NodeJS.Timeout | null>(null); 


    const handleInput = async (
        event: React.FormEvent<HTMLInputElement>
    ): Promise<void> => {
        const { value } = event.currentTarget;

        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(async () => {
            // Simular resultados de búsqueda
            try {
                const data = await getData(value);
                setResults(data);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching data:', error.message);
                } else {
                    console.error('Unknown error fetching data');
                }
                setResults([]);
            }
        }, 300);
    };

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
};
