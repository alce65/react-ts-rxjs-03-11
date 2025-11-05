# TYPESCRIPT Y PROGRAMACIÓN REACTIVA

- [TYPESCRIPT Y PROGRAMACIÓN REACTIVA](#typescript-y-programación-reactiva)
  - [OBJETIVOS](#objetivos)
  - [Desarrollo](#desarrollo)
    - [Día 1 - 03/11/2026](#día-1---03112026)
    - [Día 2 - 04/11/2026](#día-2---04112026)
    - [Día 3 - 05/11/2026](#día-3---05112026)

DURACIÓN: 45 horas

React
Typescript
RxJS
Avanzado

## OBJETIVOS

- Comprender los fundamentos de la **programación reactiva** en el desarrollo frontend, explorando sus ventajas y conceptos clave como flujos de datos asíncronos y la gestión de eventos.
- Adquirir habilidades avanzadas en **TypeScript** para la programación reactiva, mejorando el uso de **tipos** en componentes React y comprendiendo los tipos aplicados a flujos asíncronos, como `Promise` y `Observable`.
- Aplicar hooks avanzados en el contexto de programación reactiva, desarrollando **hooks personalizados** que gestionen observables y suscripciones, además de optimizar el rendimiento de la aplicación con `useMemo` y `useCallback`.
- Gestionar eficazmente el **estado** en aplicaciones React mediante el uso de **RxJS**, implementando flujos de estado reactivos con `BehaviorSubject` y `ReplaySubject`, y combinando la **API de Context** de React con RxJS para la compartición de datos entre componentes.
- Implementar **patrones de diseño** reactivos como `Pub/Sub` y `Observer`, utilizando operadores de RxJS para mapeo, filtrado y combinación de flujos de datos en escenarios reales de desarrollo.
- Consumir **APIs asíncronas** de manera eficiente con RxJS, gestionando flujos de datos desde peticiones HTTP y aplicando técnicas avanzadas para trabajar con WebSockets y datos en tiempo real en React.
- Realizar **testing** de aplicaciones reactivas mediante la configuración de Jest con TypeScript y RxJS, simulando flujos de datos y eventos en pruebas unitarias, y validando el comportamiento de observables y hooks personalizados.
- Aplicar **buenas prácticas** y **optimización** en la programación reactiva, gestionando correctamente las suscripciones, evitando memory leaks, y optimizando el rendimiento de las aplicaciones reactivas mediante operadores avanzados de RxJS.

## Desarrollo

### Día 1 - 03/11/2026

- Presentación: formador y alumnos
- Introducción: curso, temario, objetivos, metodología, herramientas previas
- Instalación monorepo {monorepo}
- Configuración proyecto React + TS + Vite
- Incorporación de Vitest

[descanso]

- TypeScript: proyecto básico (pure TS) en el monorepo
- Introducción a TypeScript:
  - tipos básicos, interfaces y tipos
  - combinación de tipos, records
  - clases (OOP)
  - narrowing: type guards, discriminated unions

### Día 2 - 04/11/2026

- React básico
- Ejercicio práctico: proyecto React + TS + Vite -> convertir a componentes funcionales

  - Solución de los problemas de instalación
  - Tiempo para el ejercicio

- **Footer**
  - Estructura de carpetas para componentes
  - Componentes funcionales y elementos JSX. Tipado con TypeScript
  - Estilos CSS: archivos CSS por componente
  - Tests unitarios con Vitest
    - Elementos de los tests. Matching
    - Testing Library. Querying

[descanso]

- **Header**
  - Props y tipado de props con TypeScript
- **Card**
  - Prop children y su tipado
- **Layout**
- **App**
  - Composición de componentes. Prop drilling
- **Counter**
  - Uso de hooks básicos: useState. Tipado del estado con TypeScript
  - Eventos y su tipado en TypeScript

### Día 3 - 05/11/2026

- Tipado de eventos en TypeScript
  - Eventos especoíficos
  - target vs currentTarget. Casting
- Componente Counter 2Buttons

  - Testing del componente

- Formularios controlados vs no controlados
  - Servicio usuarios (mock)
  - Componente LoginForm (controlado)
  - Componente RegisterForm (no controlado)
  - Tests de formularios
