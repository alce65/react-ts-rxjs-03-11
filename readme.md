# TYPESCRIPT Y PROGRAMACIÓN REACTIVA

- [TYPESCRIPT Y PROGRAMACIÓN REACTIVA](#typescript-y-programación-reactiva)
  - [OBJETIVOS](#objetivos)
  - [Desarrollo](#desarrollo)
    - [Semana 1](#semana-1)
      - [Día 1 - Lunes 03/11/2026](#día-1---lunes-03112026)
      - [Día 2 - Martes 04/11/2026](#día-2---martes-04112026)
      - [Día 3 - Miércoles 05/11/2026](#día-3---miércoles-05112026)
      - [Día 4 - Jueves 06/11/2026](#día-4---jueves-06112026)
    - [Semana 2](#semana-2)
      - [Día 5 - Lunes 10/11/2026](#día-5---lunes-10112026)
      - [Día 6 - Martes 11/11/2026](#día-6---martes-11112026)
      - [Día 7 - Miércoles 12/11/2026 - hasta las 17.15](#día-7---miércoles-12112026---hasta-las-1715)
      - [Día 8 - Jueves 13/11/2026](#día-8---jueves-13112026)
    - [Semana 3](#semana-3)
      - [Día 9 - Lunes 17/11/2026](#día-9---lunes-17112026)
      - [Día 10 - Martes 18/11/2026](#día-10---martes-18112026)

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

### Semana 1

#### Día 1 - Lunes 03/11/2026

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

#### Día 2 - Martes 04/11/2026

- React básico
- Ejercicio práctico: proyecto React + TS + Vite -> convertir a componentes funcionales

  - Solución de los problemas de instalación
  - Tiempo para el ejercicio

- 🧿**Footer**
  - Estructura de carpetas para componentes
  - Componentes funcionales y elementos JSX. Tipado con TypeScript
  - Estilos CSS: archivos CSS por componente
  - 👁️‍🗨️Tests unitarios con Vitest
    - Elementos de los tests. Matching
    - Testing Library. Querying

[descanso]

- 🧿**Header**
  - Props y tipado de props con TypeScript
- 🧿**Card**
  - Prop children y su tipado
- 🧿**Layout**
- 🧿**App**
  - Composición de componentes. Prop drilling
- 🧿**Counter**
  - Uso de hooks básicos: useState. Tipado del estado con TypeScript
  - Eventos y su tipado en TypeScript

#### Día 3 - Miércoles 05/11/2026

- Tipado de eventos en TypeScript
  - Eventos específicos
  - target vs currentTarget. Casting
- 🧿Componente Counter 2Buttons

  - 👁️‍🗨️Testing del componente

- Formularios controlados vs no controlados

  - ⚙️Servicio usuarios (mock)
  - 🧿Componente LoginForm (controlado)
  - 🧿Componente RegisterForm (no controlado)
  - 👁️‍🗨️Tests de formularios

- Add project demo1 clonado de Demo1

[descanso]

- Programación asíncrona v. reactiva
  - Conceptos
  - Promesas: then v. async/await
    - ⚙️Servicio getData basado en promesas
    - 👁️‍🗨️Test del servicio
  - 🧿Componente Search con promesas
    - Consumo del servicio getData

#### Día 4 - Jueves 06/11/2026

- 🧿Componente Search con promesas (continuación)
  - 👁️‍🗨️Test del componente
- 🧿Componente Search optimizado con debounce (promesas)
  - 👁️‍🗨️Test del componente
- 🧿Componente con cancelación de peticiones (promesas)
  - 👁️‍🗨️Test del componente
- Conceptos de programación reactiva

- Patrones de diseño reactivos
  - Introducción
  - Iterator

[descanso]

- Patrones de diseño reactivos (continuación)

  - Iterator: implementación en TypeScript y JS
  - Pub/Sub (Observer)
  - Implementación de Pub/Sub en TypeScript: Event manager
  - Ventajas de Pub/Sub
  - Estrategias Push v. Pull

- Introducción a RxJS
  - Observables
  - Tipos: cold v. hot

### Semana 2

#### Día 5 - Lunes 10/11/2026

- Proyecto TS-Rx
- Observable cold. Suscripciones
  - observers: next, error, complete
  - Unicast
  - Lazy
  - Subscription. Cancelación
- Observables hot. Subjects.

  - Multicast
  - Subject
  - BehaviorSubject
  - ReplaySubject
  - AsyncSubject

- Creación de observables: Operadores de creación
  - of, from
  - fromEvent
  - interval, timer

[descanso] 16:30 - 16:50

- Operadores (Comentar Lista).
- Observables RxJS en componentes de react

  - Proyecto React + TS + RxJS + Vite
  - Observables y estado: 🧿ListNames
    - useState: creación del estado
    - useEffect y suscripciones: actualización del estado
    - uso de useMemo
  - Observables y eventos: 🧿ClickCounter
    - fromEvent: creación del observable
    - useEffect y suscripciones: actualización del estado
    - operadores de RxJS: map, scan..
  - Observables e intervalos: 🧿IntervalCounter
    - interval: creación del observable
    - useEffect y suscripciones: actualización del estado

#### Día 6 - Martes 11/11/2026

- Desuscripción

  - función de limpieza en useEffect
  - desuscripción automática
    - 🧿Componente IntervalCounter2 con takeUntil

- Typescript avanzado. Tipos en React (comentarios)
- Genéricos. Restricciones con Extend
- Manipulación de tipos
  - keyof & typeof
  - Indexed Access Types

[descanso] 16:20 - 16:45

- Genéricos en React. 🧿Componente List genérico
- Mapped Types
- Conditional Types
- Utility Types

#### Día 7 - Miércoles 12/11/2026 - hasta las 17.15

- Terminar Utility Types
- Comentar 🧿Componente User uniones v. condicionales
- TypeScript y asincronía. Manejo de errores

  - Promesas con TS
  - Observables con TS

- Hooks Personalizados y RxJS
  - Introducción. Tipado de hooks personalizados
    - ⚙️useToggle
    - ⚙️useLocalStorage, usando genéricos
    - Test de los hooks
- Creación de hooks personalizados con RxJS
  - 🧿Componente Lista (datos, asincronía)->
    - ⚙️useObservable.v1
    - ⚙️useObservable.v2 + useSubscription
    - 👁️‍🗨️Test de los componentes -> test de los hookscd
  - 🧿Componente ClicksCounter (Eventos) ->
    - ⚙️useObservable.v3 + useSubscription
    - 👁️‍🗨️Test de los componentes -> test de los hooks

#### Día 8 - Jueves 13/11/2026

- Hooks Personalizados y RxJS (continuación)
  - Componente y multiples estados: 🧿UserLogged -> ⚙️useUserLogged
  - Single Component Hook
- Integración y operaciones con Observables en componentes React
  - Debounces y Throttles
    - 🧿Componente Fibonacci-items: take, takeWhile, debounceTime

[descanso] 16:20 - 16:40

- Integración y operaciones con Observables en componentes React (continuación)

  - 🧿Componente Fibonacci (continuación)

    - Radio buttons en el componente padre
    - useMemo y useCallback en el componente

  - Combinación de observables
  - Constantes Observables
  - Observables de Orden Superior (Higher-Order Observables)

### Semana 3

#### Día 9 - Lunes 17/11/2026

- Observables de Orden Superior (Higher-Order Observables)
  - 🧿Componente Fibonacci v.2
    - 👁️‍🗨️Test del componente Fibonacci
  - 🧿Componente GetData: MergeMap v. SwitchMap
    - 👁️‍🗨️Test del componente GetData
  - 🧿Componente IntervalCounter3 (2 botones con switchMap)

[descanso] 16:40 - 17:00

- Observables de Orden Superior (Higher-Order Observables) (continuación)

  - 👁️‍🗨️Test del componente IntervalCounter3 (2 botones con switchMap)
  - 🧿Componente IntervalCounter4 (3 botones con switchMap)
    - 👁️‍🗨️Test del componente IntervalCounter4 (3 botones con switchMap)

- Http Client (introducción)
  - nuevo proyecto TS-Rx-HttpClient: demo4
  - promesas en fetch
  - Peticiones HTTP con RxJS
    - ajax
    - fromFetch (más actual)

#### Día 10 - Martes 18/11/2026

- Http Client
  - ⚙️Servicio genérico dataFetch
    - operadores fromFetch y switchMap, tipado, errores
  - ⚙️Servicio específico userDataFetch
  - 🧿Componente GetUserData

[descanso] 16:20 - 16:40

- 🧿Componente GetUserButton

- Manejo de API desde un input de búsqueda
  - 🧿 Componente ReadInput
  - ⚙️Servicio SearchCountries
  - 🧿Componente SearchCountries
- Test de servicios HTTPClient
  - 👁️‍🗨️Test del servicio fetchService (generico)

<!--

#### Día 11 - Miércoles 19/11/2026

- Http Client (continuación)

  - Test de servicios HTTPClient (continuación)
    - 👁️‍🗨️Test del servicio fetchTodoService (específico)

  - Patrón repositorio (Repository)
    - 🌐Interface Repository
    - Repositorio en memoria: InMemoryUserRepository]
    - ⚙️Servicio API Repositorio: APIUserRepository
    - 🧿Componente UsersList

 - Creación de flujos de datos reactivos con RxJS: Hot Observables
    - Concepto de Hot Observables
    - 🧿Componente ClicksCounter (con un Subject): Eventos y Subjects
    - Acciones con Subjects: patrón Flux
      - 🧿Componente Counter3Buttons
      - Mejora del "reducer" y tipos de acciones
      - El patrón flux nativo en react: useReducer
    - [Opción: useReducerRx (Sin desarrollar info, solo el código)]
    - Combinación de flujos y operadores complejos
      - ⚙️Servicios getByUrl y searchPokemon
      - 🧿Componente SearchPokemon
    - Flujos de datos en múltiples componentes
      - ⚙️SubjectManager: servicio para compartir flujos
      - 🧿DemoPage con componentes que comparten flujos

[Opción - desde poryecto proof]
- Wether converter (uso de BehaviorSubject v. Subject)
- Weather series (uso de ReplaySubject)

#### Día 12 - Jueves 20/11/2026
Gestión del estado. Subjects (Mod. 5)
- React Context y programación reactiva
    - Inyección en React: Contexto
      - Contextos de React, Hooks y servicios
        - 🌐Creación del contexto y del proveedor
      - Acceso al contexto
    - Contexto dinámico y custom Hooks
      - 🌐Theme \& Language Context (¿Mencionar?)
      - 🌐User Context
    - Contexto en React19. El API `use`
  - Gestión avanzada del estado con BehaviorSubject
    - ¿🌐State Manager Service?
    - ¿🧿Componente Counter con State Manager Service?
    - ¿🧿Componente UserProfile con State Manager Service?
  - ¿Integración de flujos de estado con Redux y RxJS?

Comentar lo abarcado de los módulos siguientes:

6 - patrones
7 - testing
8 - optimización

-->
