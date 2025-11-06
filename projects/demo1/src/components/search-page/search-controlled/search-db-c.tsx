/* eslint-disable react-refresh/only-export-components */
import React, { useState, useRef } from 'react';
import { Card } from '../../core/card/card';
import { getData } from '@/components/services/data.service';
import type { Result } from '../result';


export const SearchControlled: React.FC = () => {
    const [results, setResults] = useState<Result[]>([]);
    // refs para debounce y cancelación
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        // debounce manual
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(async () => {
            try {
                // cancelar petición anterior si existe
                if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                }
                // nueva petición con su propio AbortController
                abortControllerRef.current = new AbortController();
                const data = await getData(value);
                setResults(data);
            } catch (err) {
                // manejar errores
                console.error(err);
            }
        }, 300);
    };

    return (
        <Card title="Controlled Search">
            <p>Debounce & AbortController</p>
            <label htmlFor="">
                <span>Search (controlled): </span>
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

// Alternativa
// import { useState, useRef, useEffect } from "react";

// function ImperativeSearchWithAbort() {
//   const [results, setResults] = useState<any[]>([]);
//   const timeoutRef = useRef<number | null>(null);
//   const abortRef = useRef<AbortController | null>(null);

//   const onInput = (value: string) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = window.setTimeout(async () => {
//       // Cancelar la petición anterior si existe
//       if (abortRef.current) {
//         abortRef.current.abort();
//       }
//       const controller = new AbortController();
//       abortRef.current = controller;

//       try {
//         const res = await fetch(`/search?q=${encodeURIComponent(value)}`, {
//           signal: controller.signal,
//         });
//         if (!res.ok) throw new Error("Network response was not ok");
//         const data = await res.json();
//         setResults(data);
//       } catch (err) {
//         if ((err as any).name === "AbortError") {
//           // petición abortada: comportamiento esperado al cancelar
//         } else {
//           console.error(err);
//         }
//       }
//     }, 300);
//   };

//   // limpiar on unmount
//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//       if (abortRef.current) abortRef.current.abort();
//     };
//   }, []);

//   return (
//     <div>
//       <input onInput={(e) => onInput((e.target as HTMLInputElement).value)} />
//       <ul>
//         {results.map((r, i) => (
//           <li key={i}>{JSON.stringify(r)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
