# Entorno de desarrollo para React + TS

- [Entorno de desarrollo para React + TS](#entorno-de-desarrollo-para-react--ts)
  - [Requisitos previos](#requisitos-previos)
  - [Instalación de React y TypeScript con Vite](#instalación-de-react-y-typescript-con-vite)
    - [Mono-repositorio multi-paquete para React con TypeScript](#mono-repositorio-multi-paquete-para-react-con-typescript)
      - [Herramientas de edición de código](#herramientas-de-edición-de-código)
        - [Prettier](#prettier)
        - [.editorconfig para la configuración del editor](#editorconfig-para-la-configuración-del-editor)
    - [Creación de un nuevo proyecto con Vite](#creación-de-un-nuevo-proyecto-con-vite)
      - [Instalación de dependencias](#instalación-de-dependencias)
      - [Reubicación de elementos en el monorepo](#reubicación-de-elementos-en-el-monorepo)
        - [Configuración de ESLint](#configuración-de-eslint)
      - [Elementos adicionales](#elementos-adicionales)
        - [Herramientas de testing](#herramientas-de-testing)
        - [Mejorar el uso de los matchers extra de @testing-library/jest-dom](#mejorar-el-uso-de-los-matchers-extra-de-testing-libraryjest-dom)
        - [Alias de importación (aunque no se usan en este proyecto)](#alias-de-importación-aunque-no-se-usan-en-este-proyecto)
  - [Introducción a TypeScript. Ejemplos](#introducción-a-typescript-ejemplos)
    - [Proyecto Vanilla TS](#proyecto-vanilla-ts)
    - [TS básico. Ejemplo](#ts-básico-ejemplo)
      - [Narrowing](#narrowing)
    - [Clases en TypeScript](#clases-en-typescript)
  - [🌐Introducción a ReactJS con TS. Ejemplos prácticos](#introducción-a-reactjs-con-ts-ejemplos-prácticos)
    - [El fichero main.tsx](#el-fichero-maintsx)
    - [Componentes funcionales](#componentes-funcionales)
    - [Tipado de los componentes funcionales](#tipado-de-los-componentes-funcionales)
      - [🧿Componente App](#componente-app)
      - [Componentes y elementos](#componentes-y-elementos)
      - [El tipo React.FC](#el-tipo-reactfc)
      - [Tipado de props en componentes funcionales](#tipado-de-props-en-componentes-funcionales)
        - [🧿Componentes Footer y Header](#componentes-footer-y-header)
      - [Tipado del state en componentes funcionales](#tipado-del-state-en-componentes-funcionales)
        - [🧿Componente Counter](#componente-counter)
      - [Respuesta a eventos del DOM](#respuesta-a-eventos-del-dom)
      - [Eventos y parámetros](#eventos-y-parámetros)
      - [🧿Componente Counter2Botones](#componente-counter2botones)
      - [La prop `children`](#la-prop-children)
        - [🧿Componente Card](#componente-card)
        - [🧿Componente Layout: ejemplo de prop drilling](#componente-layout-ejemplo-de-prop-drilling)
  - [🌐Tests unitarios de componentes React con TypeScript](#tests-unitarios-de-componentes-react-con-typescript)
    - [Introducción. Vitest](#introducción-vitest)
      - [Elementos básicos de los test unitarios](#elementos-básicos-de-los-test-unitarios)
      - [Patrones de organización del código en los test unitarios](#patrones-de-organización-del-código-en-los-test-unitarios)
      - [Coverage (Cobertura de código) y diseño de casos de prueba](#coverage-cobertura-de-código-y-diseño-de-casos-de-prueba)
      - [Stubs: Mocks y Spies](#stubs-mocks-y-spies)
    - [Matchers de Vitest](#matchers-de-vitest)
      - [Igualdad y veracidad](#igualdad-y-veracidad)
      - [Comparación de números](#comparación-de-números)
      - [Comparación de otros tipos de valores](#comparación-de-otros-tipos-de-valores)
      - [Excepciones y errores](#excepciones-y-errores)
    - [Tests de un componente React con Vitest y Testing Library](#tests-de-un-componente-react-con-vitest-y-testing-library)
      - [👁️‍🗨️Componente Footer](#️️componente-footer)
      - [Métodos del objeto screen](#métodos-del-objeto-screen)
      - [Test de 'caja negra' y 'caja blanca'](#test-de-caja-negra-y-caja-blanca)
    - [Test básicos de componentes](#test-básicos-de-componentes)
      - [Test de componentes de React con props](#test-de-componentes-de-react-con-props)
        - [👁️‍🗨️Test del componente Header](#️️test-del-componente-header)
      - [Estado e Interacciones del usuario](#estado-e-interacciones-del-usuario)
        - [👁️‍🗨️Test del componente Counter](#️️test-del-componente-counter)
        - [Simular eventos con fireEvent](#simular-eventos-con-fireevent)
        - [Simular eventos con userEvent](#simular-eventos-con-userevent)
      - [Composición de Componentes: propiedad children](#composición-de-componentes-propiedad-children)
        - [👁️‍🗨️Test del componente Counter2Buttons](#️️test-del-componente-counter2buttons)
        - [👁️‍🗨️Test del componente Card](#️️test-del-componente-card)
      - [Componentes y tests de integración](#componentes-y-tests-de-integración)
        - [👁️‍🗨️Test del componente App con componentes hijos](#️️test-del-componente-app-con-componentes-hijos)
          - [Test de integración o de aceptación](#test-de-integración-o-de-aceptación)
          - [Test de unitario del componente App](#test-de-unitario-del-componente-app)
      - [👁️‍🗨️Test del componente Layout](#️️test-del-componente-layout)
      - [👁️‍🗨️En resumen ... y el coverage](#️️en-resumen--y-el-coverage)
  - [🌐Eventos y formularios. Uso en React y tipado con TypeScript](#eventos-y-formularios-uso-en-react-y-tipado-con-typescript)
    - [Tipado de eventos del DOM](#tipado-de-eventos-del-dom)
      - [El objeto evento en React: SyntheticEvent](#el-objeto-evento-en-react-syntheticevent)
      - [Interfaces de eventos específicos](#interfaces-de-eventos-específicos)
      - [Atributos `target` y `currentTarget`](#atributos-target-y-currenttarget)
      - [Casting de tipos para event.target](#casting-de-tipos-para-eventtarget)
      - [🧿Componente Counter2 refactorizar: CounterDatasets](#componente-counter2-refactorizar-counterdatasets)
      - [👁️‍🗨️Tests del componente CounterDatasets](#️️tests-del-componente-counterdatasets)
    - [Formularios](#formularios)
      - [Tipado de eventos de formularios controlados](#tipado-de-eventos-de-formularios-controlados)
        - [🧿Componente LoginForm: formulario controlado con multiples campos](#componente-loginform-formulario-controlado-con-multiples-campos)
        - [Mock del servicio de usuario: Login](#mock-del-servicio-de-usuario-login)
        - [👁️‍🗨️Test del Formulario controlado LoginForm](#️️test-del-formulario-controlado-loginform)
      - [Formularios no controlados](#formularios-no-controlados)
        - [🧿Componente RegisterForm](#componente-registerform)
          - [FormData](#formdata)
          - [Funciones auxiliares](#funciones-auxiliares)
          - [Formulario final RegisterForm](#formulario-final-registerform)
        - [Mock del servicio de usuario: Register](#mock-del-servicio-de-usuario-register)
        - [👁️‍🗨️Test del Formulario no controlado RegisterForm](#️️test-del-formulario-no-controlado-registerform)
        - [👁️‍🗨️Test de las funciones auxiliares](#️️test-de-las-funciones-auxiliares)
        - [👁️‍🗨️Test del mock de servicio de usuario](#️️test-del-mock-de-servicio-de-usuario)
      - [👁️‍🗨️Finalmente, en resumen ... y el coverage](#️️finalmente-en-resumen--y-el-coverage)

## Requisitos previos

- **Git** instalado y configurado con tu usuario y correo electrónico
- **Node.js** y **npm** instalados en una versión estable reciente (LTS)
  La última en este momento es la 24.x
  Opcionalmente, puedes utilizar **nvm** (Node Version Manager) para gestionar múltiples versiones de Node.js en tu máquina.
- Editor de código: **Visual Studio Code**
- **Extensiones** recomendadas para Visual Studio Code:
  - EditorConfig for VS Code
  - ES7+ React/Redux/React-Native snippets (opcional)
  - ESLint
  - GitHub Copilot (opcional)
  - Prettier - Code formatter
  - Pretty TypeScript Errors (opcional)
  - TwoSlash Query Commands (opcional)
  - Thunder Client (opcional)
- **Extensiones** para Visual Studio Code para Git
  - Git Graph (o GitLens)
  - gitignore
- **Extensiones** para Visual Studio Code opcionales y específicas de este proyecto:
  - Code Spell Checker / Spanish - Code Spell Checker
  - Dracula Official Theme
  - Image preview
  - Live Server
  - Markdown All in One / Markdown shortcuts / MarkdownLint
  - Material Icon Theme
  - Peacock
  - Reload
  - Spanish Language Pack for Visual Studio Code
  - Versions Lens

**React** es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.

## Instalación de React y TypeScript con Vite

Para instalar React y TypeScript, se puede utilizar **Vite**, un generador de proyectos y empaquetador de código.

Según ellos mismos <https://vite.dev/>

> Vite es una herramienta de creación de frontend increíblemente rápida que impulsa la próxima generación de aplicaciones web

- Un **servidor de desarrollo** que ofrece mejoras de funciones enriquecidas con respecto a los módulos ES nativos , por ejemplo, un reemplazo de módulo en caliente (HMR) extremadamente rápido .

- Un **comando de compilación** (**builder**) que agrupa su código con Rollup , pre-configurado para generar activos estáticos altamente optimizados para producción. Vite puede incorporar en esta fase herramientas como PostCSS, Sass, TypeScript, etc.

- La **compatibilidad** con frameworks y la **integración** con otras herramientas se pueden realizar mediante plugins, como sucede en el caso de React

### Mono-repositorio multi-paquete para React con TypeScript

Se crea en la raíz del proyecto:

- un **repositorio Git**
- un **package.json**

- la configuración del mono-repo se incluye en el **package.json**, indicando que los proyectos (paquetes) se encuentran en la carpeta projects

```json
{
  "name": "react-typescript-monorepo",
  "private": true,
  "workspaces": ["projects/*"]
}
```

Se añade también un archivo **.gitignore** para ignorar la carpeta node_modules

```ini gitignore
node_modules
coverage
*.lcov
lib-cov
.env
logs
...
```

Podemos añadir un gitignore mas completo para Node.js desde [gitignore.io](https://www.toptal.com/developers/gitignore) o mediante la extensión de Visual Studio Code "gitignore".

#### Herramientas de edición de código

##### Prettier

- la configuración de Prettier se incluye en el package.json

Algunos de los parámetros más habituales son:

```json
{
  "prettier": {
    "singleQuote": true,
    "semi": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
  }
}
```

En nuestro caso, hemos optado por utilizar comillas simples, dejando el resto de parámetros con sus valores por defecto:

```json
"singleQuote": true
```

En algunos casos, es preferible disponer de una copia local de Prettier en lugar de utilizar la que viene instalada con VSC. Para ello, puedes instalar Prettier como una dependencia de desarrollo:

```shell
npm i -D prettier
```

##### .editorconfig para la configuración del editor

Junto a Prettier, es frecuente definir el comportamiento del editor desde el fichero .editorconfig, que es un estándar de configuración de editores de texto. Puedes crear un archivo `.editorconfig` en la raíz de tu proyecto con el siguiente contenido:

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = false

[*.html]
indent_size = 2

[*.md]
indent_size = 2

[*.yml]
indent_size = 2

[*.yaml]
indent_size = 2

[*.json]
indent_size = 2
...
```

Podemos generar un archivo `.editorconfig` más completo desde [editorconfig.org](https://editorconfig.org/) o mediante la extensión de Visual Studio Code "EditorConfig for VS Code" que añade una opción al menu contextual de cualquier carpeta.

### Creación de un nuevo proyecto con Vite

Para crear un nuevo proyecto con Vite dentro de la carpeta `projects` del monorepo, se puede utilizar el siguiente comando:

```shell
npm create vite@latest \<nombre-del-proyecto\>
```

Esto iniciará un asistente que te guiará a través de la creación del proyecto. Puedes elegir entre diferentes plantillas, como React, Vue, Svelte, etc.

Otra opción es indicar directamente el nombre del proyecto y la plantilla que deseas utilizar. Por ejemplo, para crear un proyecto de React con TypeScript, puedes usar el siguiente comando:

```shell
npm create vite@latest \<nombre-del-proyecto\> -- --template react-ts
```

En nuestro caso, seguiremos la creación guiada, indicando:

- Nombre del proyecto: `demo1`
- Framework: `React`
- Variant: `TypeScript + SWC`
- Use rolldown-vite (Experimental)?: `No`
- Install with npm and start now?: `Yes`

[SWC (Speedy Web Compiler)](https://swc.rs/) es un compilador super rápido para JavaScript y TypeScript basado en Rust. Es una alternativa a Babel y es compatible con la mayoría de las características modernas de JavaScript y TypeScript.

El resultado incluye las siguientes dependencias:

```json
 "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
   "@eslint/js": "^9.36.0",
    "@types/node": "^24.6.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react-swc": "^4.1.0",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
```

Como se ve, se han instalado TypeScript, React, ESLint y Vite, como builder.
El archivo `tsconfig.json` se crea automáticamente y contiene la configuración básica para TypeScript. Puedes personalizarlo según tus necesidades.
Lo mismo sucede con el archivo de configuración de ESLint, `eslint.config.js`, y con el del propio vite, `vite.config.ts`.

#### Instalación de dependencias

Si no hemos indicado que lo haga al instalador, debemos instalar las dependencias del proyecto manualmente, utilizando el comando `npm i`

Esto instalará todas las dependencias necesarias para el proyecto, incluyendo React, ReactDOM y TypeScript.

Al ser un monorepo, las dependencias se instalan en la raíz del proyecto, en la carpeta `node_modules`.

#### Reubicación de elementos en el monorepo

ESLint puede ubicarse en la raíz del monorepo, ya que su configuración afecta a todos los paquetes.

Los archivos `tsconfig.app.json` y `tsconfig.node.json` se pueden ubicar en la raíz si todos los paquetes van a compartir la misma configuración de TypeScript. Opcionalmente o si cada paquete tiene necesidades diferentes, es mejor tener un `tsconfig.json` en cada paquete.

En el primero de los casos

- se reubican en la raíz del monorepo los archivos `tsconfig.app.json` y `tsconfig.node.json`,
- se mantiene en cada proyecto el `tsconfig.json`, que se modifica para que extienda correctamente los anteriores.

```json
{
  "files": [],
  "references": [
    { "path": "../../tsconfig.app.json" },
    { "path": "../../tsconfig.node.json" }
  ]
}
```

Una alternativa usando `extends` en lugar de `references` es la siguiente:

```json
{
  "extends": "../../tsconfig.app.json",
  "include": ["src", "vite.config.ts", "src/**/*.d.ts"]
}
```

Para evitar errores de ESLint, tras reubicar los archivos `tsconfig.app.json` y `tsconfig.node.json`, es necesario actualizar las rutas en el archivo `eslint.config.js`, indicando la nueva ubicación de los archivos de configuración de TypeScript (parserOptions) como vemos en el siguiente apartado.

El `vite.config.ts` se mantiene en el paquete específico donde se utilizará.

##### Configuración de ESLint

De acuerdo con el Readme del proyecto generado por Vite, la recomendación respecto a la configuración de ESLint es la siguiente:

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

En nuestro caso, la configuración incluye los plugins para React Hooks(`eslint-plugin-react-hooks`) y React Refresh(`eslint-plugin-react-refresh`).

La configuración completa que estamos utilizando, incluyendo las parserOptions, extensiones y algunas reglas es la siguiente:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]);
```

Para comprobar el correcto funcionamiento de ESLint, puedes ejecutar el siguiente comando:

```shell
npm run lint
```

#### Elementos adicionales

Además de las dependencias básicas, es posible que desees instalar algunas dependencias adicionales para mejorar tu flujo de trabajo.

##### Herramientas de testing

La más habitual de todas ellas es alguna herramienta de testing, como Vitest, que es un framework de pruebas para Vite. Puedes instalarlo con el siguiente comando:

```shell
npm i -D vitest
npm i -D @vitest/coverage-v8
npm i -D jsdom
npm i -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Se actualiza `tsconfig.app.json` y `tsconfig.node.json` añadiendo `vitest` al array `types`:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"] // Opcionalmente también "vite/client" si se usa HMR
  }
}
```

Se actualiza `vite.config.ts` del proyecto para añadir la configuración de Vitest:

```ts
import { defineConfig } from 'vite/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // opcionalmente
    include: ['**/*.test.ts', '**/*.test.tsx'],
    // opcionalmente, para configurar la cobertura
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts', 'src/**/types/*.ts'],
    },
  },
});
```

<!-- Antes también era necesario ajustar la configuración de ESLint para que funcione con Vitest. Puedes hacerlo agregando el siguiente plugin a tu archivo de configuración de ESLint:

```js
{
  "plugins": [vitest]
}
```
``` -->

Finalmente puede se interesante agregar un script para ejecutar las pruebas en tu archivo `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

##### Mejorar el uso de los matchers extra de @testing-library/jest-dom

`testConfig.ts` to src folder:

```ts
import '@testing-library/jest-dom/vitest';
```

Update `vite.config.ts` to add the `setupFiles` property:

```ts
setupFiles: ['src/testConfig.ts'];
```

<!-- Igualmente añadimos al fichero `src/vite-env.d.ts` la referencia a los tipos de jest-dom:

```dts
/// <reference types="@testing-library/jest-dom" />
```

NOTA: puede no existir este fichero -->

##### Alias de importación (aunque no se usan en este proyecto)

En los mono-repositorios no funcionan los alias si la configuración de TS está en la raíz del proyecto. En nuestro caso no la usamos, pero es interesante saber cómo se configuran.

- `paths` permiten alias de importación.

Por ejemplo, para facilitar el acceso a componentes, hooks y tipos, se pueden definir alias como `@components`, `@hooks`, `@types`, etc.

```json
{
  "compilerOptions": {
    "paths": {
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}
```

Al utilizar vite es necesario actualizar el archivo `vite.config.ts` para que reconozca estos alias:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@types': '/src/types',
    },
  },
});
```

## Introducción a TypeScript. Ejemplos

Se dan por conocidos para el curso los siguientes conceptos básicos de TypeScript:

- Tipos básicos en TypeScript. Inferencia y anotaciones de tipos
- Tipado de funciones, objetos, arrays y tuplas
- Tipos especiales: any, unknown, void, never
- Interfaces y tipos personalizados
- Uniones e intersecciones de tipos. Uniones discriminadas
- Clases en TypeScript

### Proyecto Vanilla TS

En la carpeta de proyectos del monorepo, `projects`, se crea un nuevo proyecto llamado `demo-ts`

- Se crea el package.json con `npm init -y`
- Se modifica en el package.json el valor de `type` a `module` para utilizar módulos ES:

  ```json
  {
    "type": "module"
  }
  ```

- Opcionalmente, se instalan las dependencias de TypeScript con `npm i -D typescript @types/node`. En realidad eya están instaladas en la raíz del monorepo.
- Se crea el archivo `tsconfig.json` con `npx tsc --init`
- Se modifica el `tsconfig.json` para ajustar algunas opciones:

  ```json
  {
    "rootDir": "./src",
    "outDir": "./dist"

    //"declaration": true,
    //"declarationMap": true,

    "noImplicitReturns": true,
    "noImplicitOverride": true,
  }
  ```

- Hemos deshabilitado la generación de los archivos de declaración `.d.ts` y sus mapas, ya que no son necesarios en este caso.

- Se crea la estructura de carpetas y archivos del proyecto:
  - dist/
  - src/
    - index.ts
  - README.md
- Se añade un script de compilación en el package.json:

  ```json
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  }
  ```

Como el fichero de ESLint ya está en la raíz del monorepo, no es necesario crear uno nuevo en este proyecto y estaremos aplicando las mismas reglas de linting que luego utilizaremos en los proyectos de React con TypeScript.

### TS básico. Ejemplo

Como ejemplo, en el archivo `src/index.ts` añadiremos el código que aplique los conceptos básicos de TypeScript mencionados anteriormente.

```ts
/ Anotación de tipos
// =====================

// Anotación en los parámetros y en el valor de retorno
export const add = (a: number, b: number): number => {
    return a + b;
};

// Parámetros opcionales con valores por defecto
// Se infieren los tipos de los parámetros
export const addWithDefault = (a = 0, b= 0): number => {
    return a + b;
};

// En ambos casos el valor de retorno de la función se infiere
// Es una buena práctica indicarlo explícitamente
// Podemos activar la regla "noImplicitReturns" en tsconfig.json para forzar esta práctica

// Unión de tipos, en este caso primitivos string | number
// Tipo de retorno void
export const render = (value: string | number): void => {

    // Guarda de tipos
    if (typeof value === 'number') {
        value = value.toString();
    }
    // Narrowing: el tipo ya solo puede ser string
    console.log(value);
}

// Tipo any - mala práctica
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let variable: any = 'Hola';
variable = 22;
variable = true;
console.log(variable);


// Inferencia de tipos
// =====================

// TypeScript infiere el tipo automáticamente en la declaración con valor
let greeting = 'Hola mundo';
//@ts-expect-error El tipo 'number' no se puede asignar al tipo 'string'
greeting = 22;
render(greeting);

//Tipos literales
export const pi = 3.14;
export let pi2 = 3.14 as const;
// @ts-expect-error El tipo '3.15' no se puede asignar al tipo '3.14'
pi2 = 3.15;

// Objetos
// =========

// Los objetos se crean como const para que sean inmutables
// Sin embargo, sus propiedades pueden ser modificables a menos que se indique lo contrario
// El tipo se infiere igual que en los primitivos
const user = { name: 'Juan', age: 30 };
console.log(user);
console.log(user);
// @ts-expect-error La propiedad 'job' no existe en el tipo...
user.job = "Developer";
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
user.age = "31";

// En lugar de inferir el tipo, se puede anotar explícitamente
// utilizando un type inline (o type literal) o una interfaz
const user1: { name: string; age: number; job?: string } = { name: 'María', age: 27 };
user1.job = 'Designer';

// También se puede usar la palabra clave Record<K, V>
// El tipo Record permite definir objetos con claves dinámicas
const userRecord: Record<string, string | number> = { name: 'Luis', age: 35 };
userRecord.job = 'Manager';
userRecord.age = 36;

// Arrays
// =======

// Se crea como const para que no se puedan reasignar
// La inferencia de tipos en arrays vacíos es de tipo any[]
// Por eso es recomendable anotarlos explícitamente
const  numbers: number[] = [];
numbers.push(1);
numbers.push(2);
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
numbers.push("3");

// Si se desconoce el tipo, se puede usar unknown
export const data: unknown[] = []; // array de never

// El tipo unknown
// ===============

// unknown es mucho más restrictivo que any
const bad: unknown = 2;

// Para usar el valor, es necesario pasar de unknown a un tipo conocido

// Puede hacerse mediante
// aserción o casting de tipos

// La aserción puede llevar a un error en tiempo de ejecución
// ya que realmente el valor será un number, sin la propiedad toLocaleLowerCase
// (bad as string).toLocaleLowerCase();

(bad as number).toFixed(2);

// También mediante Guardas de tipos

if (typeof bad === 'number') {
    console.log(bad.toFixed(2));
} else if (typeof bad === 'string') {
    console.log(bad.toLocaleLowerCase());
}

// Tuplas
// =======

const userTuple: [string, number] = ['Pedro', 35];
userTuple[0] = 'Pablo';
// @ts-expect-error El tipo de tupla ... no tiene ningún elemento en el índice "2".
userTuple[2] = "36";
// ¿Paradójicamente? push sí permite añadir elementos
userTuple.push(36);


// Tipos propios
// ===============

// Si se utilizan primitivos solo puede hacerse con type
type ID = string | number;

// Para objetos es posible usar type o interface
// Puede haber una regla de estilo en el proyecto para usar uno u otro

type User = { id: ID; name: string; age: number; job?: string };
// En este caso se Añade la I al final para evitar duplicar el nombre
// No es una convención común en TypeScript
interface UserI {
    readonly id: ID;
    name: string;
    age: number;
    job?: string;
}

// Uso de los tipos propios para anotar variables
const user2: User = { id: 2, name: 'Ana', age: 25 };
// Una propiedad opcional puede añadirse en cualquier momento
user2.job = 'Developer';

const users: User[] = [];
users.push(user2);
// Tipado estructural - duck typing
// Un objeto es del tipo User si tiene las mismas propiedades
// No importa si fue creado con la misma definición de tipo
users.push({ id: 3, name: 'Luis', age: 28, job: 'Designer' });

export const user3: User = { id: 3, name: 'SuperAdmin', age: 40, job: 'Manager' };
export const user4: UserI = { id: 4, name: 'SuperAdmin', age: 40, job: 'Manager' };
// Destructuring y spread
export const user5: UserI[] = [{ ...user2, id: 1 }];

// Acceso a valores del array
// Su tipo puede ser User | undefined
// PPara manipularlo se necesita hacer narrowing, eliminando el posible undefined
// Con una guarda de tipos o un casting
(users[0] as User).age++;

// Podría usarse el operador non-null assertion (postfijo !)
// Pero no es recomendable porque puede causar errores en tiempo de ejecución
// Así lo indica la regla eslint-disable @typescript-eslint/no-non-null-assertion

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
users[0]!.age++;

// Interfaces v. tipos

// Solo tipos

type PopularTag = 'js' | 'ts' | 'node' | 'react';
type MaybePopularTag = PopularTag | 'angular' | 'vue';

export const tag: MaybePopularTag = 'ts';

interface AdminI extends UserI {
    role?: 'admin' | 'superAdmin';
}

export const admin: AdminI = { id: 1, name: 'Admin', age: 40, role: 'admin' };


// Tipos híbridos con intersección de tipos
// =======================================

type BasicProduct = { id: number; name: string; price: number };
// Combinamos un tipo propio con otro literal
type BookProduct = BasicProduct & { author: string; pages: number };

export const book: BookProduct = {
    id: 1,
    name: 'TypeScript',
    price: 29.99,
    author: 'John Doe',
    pages: 300,
};

type WithReference = { reference: string };
// Combinamos dos tipos propios
type SpecialBookProduct = BookProduct & WithReference;

export const test: SpecialBookProduct = {
    id: 1,
    name: 'Test',
    price: 10,
    author: 'Author',
    pages: 100,
    reference: 'REF-001',
};

// Unión de tipos con tipos propios
// ================================

type BaseUser = {
    name: string;
    boss: string;
};

interface Admin {
    name: string;
    team: string;
}

type UserOrAdmin2 = BaseUser | Admin;

export const userOrAdmin = (u: UserOrAdmin2): void => {
    // Guarda de tipos mediante el operador in
    if ('boss' in u) {
        console.log(`Usuario: ${u.name}, Jefe: ${u.boss}`);
    } else {
        console.log(`Admin: ${u.name}, Equipo: ${u.team}`);
    }
};

// Uniones discriminadas
// =====================

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Rectangle | Circle;

export const area = (s: Shape): number => {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default:
            // Exhaustividad
            return s; // Si llegamos aquí, s es de tipo 'never'
    }
};
```

#### Narrowing

```ts
// Reducción de posibilidades en el flujo del código

// Planteamiento

interface Fish {
  swim: () => string;
}

interface Bird {
  fly: () => string;
}

// ¿Como podemos ejecutar cada acción según el tipo de mascota?

export const invoqueAction = (pet: Fish | Bird): string => {
  let result = '';
  // La union de tipos no tiene ninguna propiedad
  // @ts-expect-error -- TypeScript error: Property 'swim' does not exist on type 'Fish | Bird'.
  result = pet.swim();
  //       ^?
  return result;
};

// Solución (operador is)

// ¿Como podemos ejecutar cada acción según el tipo de mascota?

export const invoqueActionIs = (pet: Fish | Bird): string => {
  // Guarda de tipos
  const isFish = (pet: unknown): pet is Fish =>
    (pet as Fish).swim !== undefined;

  // Narrowing de la union de tipos => tiene la propiedad del tipo acotado
  if (isFish(pet)) {
    return pet.swim();
    //     ^?
  }

  return pet.fly();
  //       ^?
};

// Alternativa (operador in)

// ¿Como podemos ejecutar cada acción según el tipo de mascota?

export const invoqueActionIn = (pet: Fish | Bird): string => {
  // Guarda de tipos
  // Narrowing de la union de tipos => tiene la propiedad del tipo acotado
  if ('swim' in pet) {
    return pet.swim();
    //     ^?
  }

  return pet.fly();
  //       ^?
};

// En el narrowing podemos reducir las opciones
// hasta el punto en el que hayamos eliminado todas las posibilidades

// En este caso TypeScript usara el tipo "never"
// para representar un estado que no puede existir

enum Shapes {
  'CIRCLE' = 'circle',
  'SQUARE' = 'square',
  'TRIANGLE' = 'triangle',
}

interface Circle {
  kind: Shapes.CIRCLE;
  radius: number;
}

interface Square {
  kind: Shapes.SQUARE;
  sideLength: number;
}

interface Triangle {
  kind: Shapes.TRIANGLE;
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

export const getArea = (shape: Shape): number => {
  switch (shape.kind) {
    case Shapes.CIRCLE:
      return (Math.PI * shape.radius) ^ 2;
    //                ^?
    case Shapes.SQUARE:
      return shape.sideLength ^ 2;
    //     ^?
    case Shapes.TRIANGLE:
      return (shape.base * shape.height) / 2;
    //      ^?
    default:
      // El default asegura que er de tipo never => no falta ningún caso
      // Como se comprueba al comentar alguno de los casos
      // eslint-disable-next-line no-case-declarations
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    //     ^?
  }
};
```

### Clases en TypeScript

Aunque las clases en TypeScript no se utilizan frecuentemente en proyectos de React, pueden usarse para crear servicios o modelar estructuras de datos, por lo que es importante conocer su sintaxis básica.

```ts
export interface IPerson {
  name: string;
  job: string;
  greet(): void;
}

// Alternativa
export type TypePerson = {
  name: string;
  job: string;
  greet(): void;
};

// class Person implements TypePerson {
class Person implements IPerson {
  static #species = 'Homo Sapiens';

  static getSpecies(): string {
    return this.#species;
  }

  // public name: string;
  // private _age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this._age = age;
  // }

  // Propiedades de parámetros

  //public name: string;
  //private _age: number;
  constructor(public name: string, private _age: number, public job: string) {
    //this.name = name;
    //this._age = _age;
  }

  set age(age) {
    if (age < 0) {
      console.log('Age cannot be negative.');
    } else {
      this._age = age;
    }
  }

  get age(): number {
    return this._age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this._age} years old.`
    );
  }
}

const user1 = new Person('Alice', 30, 'Engineer');
user1.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(user1.age); // 30
user1.age = 35;

class Employee extends Person {
  position: string;
  constructor(name: string, age: number, job: string, position: string) {
    super(name, age, job); // Call the parent class constructor
    this.position = position;
  }

  override greet(): void {
    super.greet(); // Call the parent class greet method
    console.log(`I work as a ${this.position}.`);
  }
}

const employee1 = new Employee('Bob', 40, 'Software Engineer', 'CTO');
employee1.greet();
// Hello, my name is Bob and I am 40 years old.
// I work as a Software Engineer.
```

## 🌐Introducción a ReactJS con TS. Ejemplos prácticos

Se dan por conocidos para el curso los siguientes conceptos básicos de ReactJS:

- Componentes funcionales. JSX, Renderizado condicional e iterativo
- Manejo de eventos en React
- Estado y props en React. UseState
- Ciclo de vida de los componentes. UseEffect

### El fichero main.tsx

En un proyecto creado con Vite y React, el punto de entrada de la aplicación es el archivo `main.tsx` (o `main.jsx` si no se utiliza TypeScript) que se encuentra en la carpeta `src`. Este archivo es responsable de renderizar el componente raíz de la aplicación dentro del elemento del DOM con id `root`. Por ejemplo, el contenido típico de este archivo es:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

En este archivo se importan las librerías `react` y `react-dom`, el componente `App` que es el componente raíz de la aplicación, y un archivo CSS para los estilos globales. Luego, se utiliza `ReactDOM.createRoot` para crear una raíz de React en el elemento del DOM con id `root`, y se renderiza el componente `App` dentro de un `React.StrictMode`, que es una herramienta para destacar problemas potenciales en la aplicación durante el desarrollo.

El uso del operador `!` (**non-null assertion operator**) después de `getElementById("root")` es una característica de TypeScript que indica al compilador que estamos seguros de que el elemento con id `root` existe en el DOM y no es `null`. Esto evita errores de compilación relacionados con la posibilidad de que `getElementById` devuelva `null` si no encuentra el elemento.

El operador **non-null assertion operator** se considera una mala práctica en TypeScript, ya que puede llevar a errores en tiempo de ejecución si el elemento no existe realmente. Una alternativa más segura sería verificar si el elemento existe antes de intentar renderizar la aplicación, o en este caso, en el que sabemos que existe, hacer

- una **guarda de tipos**:

  ```tsx
  const container = document.getElementById('root');
  if (!container) throw new Error('Root element not found');

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

- un **type assertion** o **type casting**, si nos aseguramos de que el elemento existe:

  ```tsx
  const root = document.getElementById('root') as HTMLElement;

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

El componente **React.StrictMode** es un componente especial que no se renderiza en el DOM, pero activa comprobaciones y advertencias adicionales para sus componentes hijos durante el desarrollo. Ayuda a identificar problemas potenciales en la aplicación, como el uso de APIs obsoletas, efectos secundarios inesperados y otros problemas relacionados con el ciclo de vida de los componentes.

Como consecuencia de su uso, veremos que algunos hooks, como `useEffect`, se ejecutan dos veces en modo desarrollo para ayudar a identificar efectos secundarios no deseados. Tendremos por tanto que el componente se renderiza 2 veces.

Esto no ocurre en el modo producción, donde se elimina el componente `React.StrictMode` durante el proceso de construcción (build).

### Componentes funcionales

Los componentes son la base de React. Un componente es una función o clase que devuelve un fragmento de código HTML. Los componentes pueden ser de clase o funcionales.

- Los **componentes funcionales** son funciones de JavaScript que devuelven JSX. Son la forma habitual de crear componentes en proyectos de React de los últimos años.
- Los **componentes de clase** son clases de JavaScript que extienden la clase `React.Component` y tienen un método `render()` que devuelve JSX.

**JSX** es una extensión de sintaxis para JavaScript que permite escribir HTML dentro de JavaScript. JSX se compila a JavaScript puro antes de ser ejecutado en el navegador.

- JSX permite escribir HTML de manera más legible y fácil de entender.
- JSX se utiliza para describir cómo debería lucir la interfaz de usuario.
- Permite utilizar expresiones de JavaScript dentro del HTML utilizando llaves `{}`, incluyendo
  - variables, para mostrar datos dinámicos
  - operadores ternarios, para renderizado condicional
  - funciones de array como `map()`, para renderizado iterativo de listas

Los primeros componentes que añadiremos en la carpeta `components` del proyecto `demo1` que acabamos de crear con Vite, son los siguientes:

- Counter
- Layout
- App, que redefiniremos y reubicaremos

### Tipado de los componentes funcionales

Para crear componentes funcionales, se utiliza la función `function` o la sintaxis de función de flecha `() => {}`. En nuestros proyectos optaremos por esta última, incluyendo el componente `App` que ya existía.

#### 🧿Componente App

Los componentes de React son funciones que devuelven un elemento de React, del tipo `JSX.Element`. En TypeScript, se pueden tipar de varias maneras, dependiendo de cómo se desee definir el tipo de las props y el estado del componente.

De acuerdo con la práctica que nos hemos impuesto de indicar siempre el tipo de retorno de las funciones, los componentes funcionales se tipan indicando el tipo de las props como parámetro genérico de la función y el tipo de retorno como `JSX.Element`.

```tsx
import { type JSX } from 'react';

export const App = (): JSX.Element => {
  return <Counter />;
};
```

Otra alternativa es tipar la propia función como `React.FC`, que es un tipo genérico que permite definir el tipo de las props del componente. Este tipo se puede usar para tipar los componentes de React, y se puede combinar con otros tipos para definir el estado del componente.

```tsx
export const App: React.FC = () => {
  return <Counter />;
};
```

#### Componentes y elementos

Estas dos formas de tipar el componente son equivalentes, pero es importante entender la diferencia entre un componente y un elemento en React:

- Un **componente** es una función que devuelve un elemento de React, que puede ser un elemento HTML o un componente de React. Como hemos visto, su tipo es `React.FC`, que es un tipo genérico definido en el namespace de react (`React`), que permite asignar el tipo de las props del componente.

- Un **elemento** es un objeto que representa cierto HTML, y que se puede renderizar en la pantalla. En React es el resultado de ejecutar un componente y su tipo es `JSX.Element` o `ReactNode`.

#### El tipo React.FC

El tipo `FC` es un alias de un interface genérico que se define como:

```ts
 interface FunctionComponent<P = {}> {
        (props: P): ReactNode | Promise<ReactNode>;
```

Los genéricos nos permiten parametrizar tipos, lo que abre una gran oportunidad para reutilizar tipos ampliamente en un proyecto de TypeScript.

Se utiliza la notación `<T>` para definir un tipo genérico, que se puede usar en lugar de cualquier tipo en la definición de una clase, interfaz, función o método. La T sería el nombre del tipo genérico, que se puede sustituir por cualquier otro nombre en PascalCase, aunque por convenio se usan le tras de la A a la Z, aunque comenzando generalmente por la T.

En el interface `FunctionComponent`, el tipo `P` es un tipo genérico que se puede sustituir por cualquier otro tipo, y que se utiliza para definir el tipo de las props del componente. El valor de retorno del componente es `ReactNode`, que es un tipo que representa cualquier elemento de React.

#### Tipado de props en componentes funcionales

##### 🧿Componentes Footer y Header

A partir de la App inicial creada por Vite, vamos a extraer el siguiente componente de React

```tsx
// src/components/footer/footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </footer>
  );
};
```

Sería la mínima expresión de un componente funcional en React, que no recibe props y devuelve un elemento JSX.

Igualmente extraemos el componente Header:

```tsx
// src/components/header/header.tsx

import React from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './header.css';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
    </header>
  );
};
```

Una de las principales características de los componentes es su capacidad para recibir **props** (propiedades) que permiten personalizar su comportamiento y apariencia. Las props son un objeto que se pasa como argumento al componente y que contiene los valores de las propiedades.

Definimos el tipo de las props como un type o interface, y lo usamos para tipar el parámetro del componente gracias al genérico del interface `FunctionComponent`, es decir `React.FC<Props>`.

```tsx
type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  // Resto del componente
};
```

Esta forma de tipar las props podía der algunos problemas en React 17, pero ha sido solucionado en versiones posteriores y es la forma recomendada.

En lugar de usar el tipo `React.FC`, y en su genérico tipar las props (React.FC\<Props>), es frecuente usar como componentes funciones tipadas directamente, es decir definir el tipo de los parámetros, dejando implícito el tipo del valor de retorno, que typescript lo inferirá como `JSX.Element` o `ReactNode`, que son los tipos de los elementos de React.

```tsx
type Props = {
  title: string;
};

export const Header = ({ title }: Props): JSX.Element => {
  // Resto del componente
};
```

En el header vemos la posibilidad de importar imágenes (e.g. svg) y archivos CSS en un proyecto de Vite con React. Vite permite importar estos tipos de archivos directamente en los componentes, lo que facilita la gestión de recursos estáticos en la aplicación.

Los recursos gráficos y similares, como fuentes o estilos, se pueden importar de la misma manera, lo que permite una mayor flexibilidad en el diseño de la aplicación. Se suele crear una carpeta `src/assets` en el proyecto para almacenar estos recursos.

En el caso del import logo de Vite la importación es diferente: `viteLogo from '/vite.svg';`, debido a que se utiliza también con favicon, enlazado desde el `index.html` del proyecto.

Por tanto se almacena en la carpeta `/public` en la raíz del proyecto, fuera de `src`. El contenido de esta carpeta será copiado tal cual a la carpeta de distribución `dist` durante el proceso de construcción (build) del proyecto.

Por tanto se accede a estos recursos desde la raíz del servidor, utilizando la barra `/` al inicio de la ruta, ignorando la carpeta `public`, que se dice que es transparente.

#### Tipado del state en componentes funcionales

Los componentes de React suelen tener un **estado interno**, creado gracias al hook `useState` que puede cambiar en función de la interacción del usuario con el componente. El estado es un objeto que contiene los valores de las propiedades que pueden cambiar en el componente.

Tomemos como ejemplo el componente contador incluido en el proyecto de Vite, pero incorporando una prop `initialCount` y que utilizaremos para inicializar el estado `count` del componente.

##### 🧿Componente Counter

En este caso, el interface define la propiedad `initialCount` como opcional, por lo que al desestructurar las props en el parámetro del componente, se le asigna un valor por defecto de 0.

```tsx
type Props = {
  initialCount?: number;
};

export const Counter = ({ initialCount = 0 }: Props): JSX.Element => {
  // Resto del componente
};
```

Para añadir un estado a nuestro componente, se puede usar el hook `useState` de React para definirlo. El hook `useState` es un hook genérico que permite definir el tipo del estado, y se puede usar de la siguiente manera:

```tsx
useState<Type>(); // para definir el tipo del estado.
```

Si el estado es un valor primitivo, TypeScript puede inferir el tipo automáticamente a partir del valor inicial, por lo que no es necesario especificarlo explícitamente.

En el caso de un componente contador, el estado `count` se puede inferir como un número al inicializarse con el valor de la prop `initialCount`.

El hook `useState` devuelve un array con dos elementos: el estado actual y una función para actualizarlo.

```tsx
import { useState } from 'react';

type Props = {
  initialCount: number;
};

export const Counter: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
```

#### Respuesta a eventos del DOM

Los eventos del DOM en React se manejan mediante atributos especiales que comienzan con `on`, como `onClick`, `onChange`, `onSubmit`, etc. Estos atributos reciben una función callback que se ejecuta cuando se produce el evento correspondiente.

Los manejadores del evento `onClick`, como cualquier callback, se pueden definir de forma anónima o como funciones nombradas. Por lo general es una buena práctica esta segunda opción, ya que mejora la legibilidad del código y permite reutilizar el código en diferentes partes del componente.

```tsx
import { useState } from 'react';

type Props = {
  initialCount: number;
};

export const Counter: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = (): void => {
    setCount((count) => count + 1);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
```

#### Eventos y parámetros

Al registrar una función como manejador de eventos, React pasa un objeto de evento como primer parámetro a la función, del que luego hablaremos. Nosotros al ser un callback no podemos definir otros parámetros en la función, ya que React solo pasará el objeto de evento.

En caso de necesitar pasar otros parámetros a la función, se puede usar una función anónima que llame a la función con los parámetros necesarios.

#### 🧿Componente Counter2Botones

Continuando con el componente Counter, podemos definir el manejador (handler) del evento `onClick` para que gestione dos botones. En realidad el manejador es la función anónima que llama a la función `handleIncrement` con el valor adecuado para incrementar o decrementar el contador.

```tsx
type Props = {
  initialCount?: number;
};

export const Counter2Botones: React.FC<Props> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = (value = 1): void => {
    setCount(count + value);
  };

  return (
    <Card>
      <p>
        <button onClick={() => handleIncrement(-1)}>➖</button>
        <span className="count-value">count is {count}</span>
        <button onClick={() => handleIncrement()}>➕</button>
      </p>
    </Card>
  );
};
```

#### La prop `children`

En React, la prop `children` es una prop especial que permite pasar elementos hijos a un componente. Esta prop se utiliza para definir el contenido que se renderiza dentro del componente.

La prop `children` permite que un componente reciba cualquier contenido, ya sea texto, un elemento HTML o incluso otro componente de React. Esto permite que el componente sea más flexible y reutilizable. A nivel de tipado, la prop `children` se puede definir como Para ello pueden emplearse los tipos

- `JSX.Element` - solo acepta un elemento de React
- `JSX.Element[]` - no acepta valores más sencillos que un elemento de React, como un string o un número
- `JSX.Element` | `JSX.Element[]`
- `React.ReactNode` acepte cualquier elemento de React, incluyendo texto, números, elementos HTML y otros componentes de React.
- `React.ReactChildren`, es un utility type similar al anterior
- `React.ReactChild[]`, es un array del tipo anterior

Lo más genérico es usar un tipo `React.ReactNode`, que representa cualquier elemento de HTML, incluyendo los componentes de React.

```tsx
type Props = {
  // Otros valores de props
  children: React.ReactNode;
};
```

En algunos casos interesa añadirle algún tipo más específico, como `string` o `number`, si se quiere restringir el tipo de los hijos del componente.

```tsx
type Props = {
  // Otros valores de props
  children: string;
};
```

Aunque no es necesario utilizarla, existe un tipo de utilidad de React, **PropsWithChildren**, que permite definir un tipo de props que incluye la prop `children` de forma implícita. Este tipo se puede usar para definir componentes que aceptan cualquier contenido dentro de ellos.

```tsx sample3.buttons.tsx
type BaseProps = {
  // Otros valores de props
};

type FinalProps = PropsWithChildren<BaseProps>;
```

Este tipo se limita a combinar un genérico y la inclusión de la prop `children`, Su código, que ya nos proporciona React, sería el siguiente

```ts
type PropsWithChildren<P> = P & { children?: ReactNode | undefined };
```

Otros **tipos de utilidad** relacionados con el anterior, que también se incluyen en React, son:

- `FunctionalComponent<Props>` o `FC<Props>`, que ya conocemos
- `React.ComponentPropsWithoutRef`, que permite obtener las props de un elemento html nativo sin incluir la prop `ref`.

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: ButtonVariant;
  size: Size;
};
```

La propiedad `children` es especialmente útil en componentes de diseño o layout, que se utilizan para envolver otros componentes y definir su estructura visual. Ejemplo de ello serán nuestros componentes `Card` y `Layout`.

##### 🧿Componente Card

Creamos un componente `Card` que utiliza la prop `children` para renderizar el contenido que se pasa como hijo del componente. En este caso, el componente `Card` define una estructura básica de tarjeta con un borde y un fondo.

Como su única prop es `children`, podemos usar el tipo de utilidad `PropsWithChildren` para definir el tipo de las props del componente directamente en el genérico de `React.FC`.

```tsx
import React, { type PropsWithChildren } from 'react';
import './card.css';

type CardProps = {
  title?: string;
} & React.PropsWithChildren;

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </div>
  );
};
```

El valor del componente `Card` viene de su css asociado, que define los estilos de la tarjeta y que no tendremos que preocuparnos por utilizar en diversos componentes para mantener la coherencia visual.

```css
.card {
  padding: 2em;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

##### 🧿Componente Layout: ejemplo de prop drilling

Creamos un componente `Layout` que utiliza la prop `children` para renderizar el contenido que se pasa como hijo del componente. En este caso, el componente `Layout` define una estructura básica de página con un encabezado, un pie de página y un área principal para el contenido.

Con frecuencia, propiedades como el título de la página, se definen como props adicionales al componente `Layout`. En ese caso, definimos un type o interface para las props que incluya `children` y las demás propiedades.

```tsx
import React, { type PropsWithChildren } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import './layout.css';

type BaseProps = {
  title: string;
};

type Props = PropsWithChildren<BaseProps>;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
```

Vemos como el componente `Layout` recibe una prop `title` para el título de la página, que le pasa al componente `Header`. Este proceso de paso sucesivo de props se conoce como **prop drilling**. Es muy común en React, pero debe evitarse en cuanto utilice varios niveles de componentes. Una alternativa para evitarlo es utilizar el Context API de React, que veremos más adelante.

## 🌐Tests unitarios de componentes React con TypeScript

### Introducción. Vitest

Los test unitarios, que son pruebas que se realizan sobre unidades de código, como funciones o clases, de forma aislada. Los test unitarios nos permiten verificar que cada unidad de código funciona correctamente de forma independiente.

Los test unitarios deben ser **automáticos**, **repetibles** y **rápidos**. Los test unitarios deben ser automáticos para que se puedan ejecutar de forma automática sin intervención humana. Los test unitarios deben ser repetibles para que se puedan ejecutar de forma repetida y obtener siempre el mismo resultado. Los test unitarios deben ser rápidos para que se puedan ejecutar de forma rápida y obtener un feedback inmediato.

De las distintas herramientas de testing ya mencionadas, vamos a utilizar **Vitest**, un framework de testing desarrollado por los responsables de **Vite** que nos permite escribir y ejecutar test unitarios tanto para el **backend** desarrollado con Node como para el **frontend**, basado en VanillaJS, TS o en React.

Como framework de testing, Vitest nos proporciona una serie de utilidades que nos permiten escribir y ejecutar test unitarios de forma sencilla y eficiente, incluyendo herramientas para la creación de **mocks** y **spies**, la realización de pruebas asíncronas basadas en **promesas** y **async/await** o que utilizan **timers**, y la creación y ejecución de pruebas de **snapshot**, etc.

Además de su uso en pruebas unitarias, Vitest puede combinarse con otras herramientas para realizar pruebas de integración, pruebas de componentes, pruebas de aceptación. Especialmente frecuente es su uso junto con [Testing Library](https://testing-library.com/) permite realizar **pruebas de componentes** en aplicaciones web con VanillaJS, TS o con diversos Frameworks, incluyendo **React**.

#### Elementos básicos de los test unitarios

- **Test suite**: Es un conjunto de test unitarios que se agrupan en una estructura jerárquica. En una test suite se pueden agrupar los test unitarios por funcionalidad, por módulo o por cualquier otro criterio que se considere adecuado. Para definir una test suite se utiliza la función `describe`.

- **Test unitario**: Es una prueba que se realiza sobre una unidad de código, como una función o una clase, de forma aislada. Un test unitario debe ser independiente de otros test y no debe depender de la ejecución de otros test. Para definir un test unitario se utiliza la función `it` o `test`.

- **Aserción**: Es una expresión que se evalúa para verificar que el resultado de un test es el esperado. En JavaScript, las aserciones se realizan utilizando la función `expect` de la librería de aserciones que estemos utilizando. Para comprobar la validez de una aserción, se utilizan una seria de funciones booleanas que se encargan de comparar el valor esperado con el valor obtenido. Una de las funciones más comunes para realizar aserciones es la función `toBe`.
  Veamos el ejemplo con las funciones `add` y `product`:

```ts
// calc.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function product(a: number, b: number): number {
  return a * b;
}
```

```ts
// calc.test.ts
import { product } from './calc';
describe('The function product', () => {
  it('should return the product of two numbers', () => {
    expect(product(1, 2)).toBe(2);
  });
});
```

Un mejor enunciado de los test puede ayudar a entender mejor qué es lo que se está probando. En cada enunciado debe indicarse específicamente que valores se están probando y cuál es el resultado esperado. Veámoslo en el siguiente ejemplo:

```ts
import { add } from './01-calc.js';
describe('testing add', () => {
  it('add 1 + 2 should be 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('add -1 + -1 should be -2', () => {
    expect(add(-1, -1)).toBe(-2);
  });
}); // test suite
```

- **Setup y teardown**: Son funciones que se ejecutan antes y después de cada test unitario. En estas funciones se pueden realizar tareas de inicialización y limpieza que sean necesarias para la ejecución del test. Se definen utilizando las funciones

- `beforeEach`
- `afterEach`
- `beforeAll`
- `afterAll`

Estas funciones se conocen como **hooks** porque se ejecutan automáticamente en momentos concretos del ciclo de vida de un test.

Tenemos en un modulo ES una sencilla función que suma dos números:

```js
// add.js
export function add(a, b) {
  return a + b;
}
```

Veamos un ejemplo de test unitario utilizando Jest:

```js
// test.js
import { add } from './add.js';
describe('function add(1,2) ', () => {
  it('should return 3, the sum both numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

Ese mismo test en Node sería:

```js
// test.js
import assert from 'assert';
import test, { it, describe } from 'node:test';
import { add } from './add.js';

import { add } from './sample.js';

describe('function add(1,2)', () => {
  test('return 3, the sum both numbers', () => {
    assert.equal(add(1, 2), 3);
  });
});
```

En Jest los elementos de la librería son globales, por lo que no es necesario importarlos.
En Node, en cambio, es necesario importarlos desde diversos módulos y de forma anónima o con nombre, según los casos.

La llamada al runner de los test unitarios es diferente en los dos casos

- en Jest el comando npm sera `jest`
- y en Node `node --test`

En cualquiera de los casos se ejecutarán todos los test unitarios del proyecto y se mostrará el resultado en la consola.

#### Patrones de organización del código en los test unitarios

Existen varios patrones de organización del código incluido en los test unitarios que nos permiten estructurar los test de forma clara y coherente. Algunos de los más comunes entre estos patrones comunes son:

- **Gherkin o Given-When-Then**. Patrón ya mencionado en BDD, puede también utilizarse en la organización de los test unitarios. En este patrón se dividen los test unitarios en tres partes: Given, When y Then. En la parte Given se definen las condiciones iniciales del test, en la parte When se ejecuta el código que se quiere probar y en la parte Then se verifican los resultados obtenidos. En algunos casos las dos primeras partes corresponden a las funciones describe, incluyendo si es necesario los hooks, y la tercera a la función it. Este patrón nos permite estructurar los test de forma clara y coherente y nos ayuda a identificar los problemas de forma rápida y sencilla.

El ejemplo anterior utilizando el patrón Given-When-Then y diversos niveles de describe sería:

```js
// product.test.js
import { product } from './product';
describe('Given product function', () => {
  describe('when we multiply two numbers, 2 and 3', () => {
    const a = 2;
    const b = 3;
    it('should return 6', () => {
      const expected = 6;
      const result = product(a, b);
      expect(result).toBe(expected);
    });
  });
});
```

En este caso, el patron Given-When-Then añade un nivel de abstracción a los test, que se corresponden con las distintas partes de la función que se está testando. Como cualquier abstracción, puede suponer mayor cantidad de código, pero también mayor claridad en la estructura de los test que se refleja cuando vemos la salida de los test en la terminal.

```sh
  Given product function
    when we multiply two numbers, 2 and 3
      √ should return 6
```

- **AAA (Arrange-Act-Assert)**: En este patrón se dividen los test unitarios en tres partes: Arrange, Act y Assert. En la parte Arrange se definen las condiciones iniciales del test, en la parte Act se ejecuta el código que se quiere probar y en la parte Assert se verifican los resultados obtenidos. Este patrón es similar al patrón Given-When-Then pero se centra más en la estructura de la función test.

El mismo ejemplo utilizando el patrón AAA sería:

```js
// product.test.js
import { product } from './product';

describe('Using function product with 1 and 2', () => {
  it('should return 2', () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expected = 2;
    // Act
    const result = product(a, b);
    // Assert
    expect(result).toBe(expected);
  });
});
```

El uso de estos patrones puede cobrar mayor sentido en función de la complejidad del conjunto de test que se estén realizando, y de la cantidad de test que se estén realizando.

Las suites creadas con los describe pueden agrupar los test unitarios por funcionalidad, por módulo, por escenario o por cualquier otro criterio que se considere adecuado. Para definir una test suite se utiliza la función `describe`. En todos los casos cada test unitario se corresponde con un caso de uso concreto dentro del criterio elegido (funcionalidad, módulo, escenario, tipo...).

#### Coverage (Cobertura de código) y diseño de casos de prueba

El coverage o cobertura de código es una métrica que nos indica el porcentaje de código que está cubierto por los test. El objetivo del coverage es asegurarnos de que todos los caminos de ejecución de nuestro código están cubiertos por los test, es decir que han sido ejecutadas todas las líneas de código y todas las ramas de decisión.

El coverage se mide en porcentaje y se calcula dividiendo el número de líneas de código que han sido ejecutadas por los test entre el número total de líneas de código del programa. Un coverage del 100% significa que todas las líneas de código han sido ejecutadas por los test.

El coverage es una métrica muy útil para evaluar la calidad de los test y para identificar las partes del código que no están cubiertas por los test. Sin embargo, aunque puede entenderse como condición necesaria, un coverage del 100% no es suficiente para garantizar la calidad del software porque puede haber casos de uso que no se hayan contemplado.

#### Stubs: Mocks y Spies

En el desarrollo de test unitarios es muy común que necesitemos simular el comportamiento de ciertas partes del código para poder probar otras partes del código. Para ello, utilizamos los **stubs**, que son objetos que simulan el comportamiento de otros objetos. Los stubs se utilizan para simular el comportamiento de objetos que no están disponibles en el entorno de test o que no se pueden utilizar en el entorno de test.

Existen varios tipos de stubs, entre los que se encuentran los **mocks** y los **spies**. Los mocks son objetos que simulan el comportamiento de otros objetos y permiten verificar que se han llamado los métodos correctos con los argumentos correctos. Los spies son objetos que permiten verificar que se han llamado los métodos correctos con los argumentos correctos.

Esta distinción no es siempre clara y depende mucho del framework de testing. Por ejemplo, en Jest, los mocks y los spies son conceptos diferentes tal como se ha explicado, pero los spies pueden convertirse en mocks si se les añade la capacidad de simular el comportamiento de un objeto. En Mocha, los mocks y los spies son conceptos diferentes y se utilizan de forma independiente. En Jasmine, los mocks y los spies son conceptos similares y se utilizan indistintamente.

### Matchers de Vitest

Vitest proporciona una serie de funciones que nos permiten realizar aserciones en los test unitarios. Estas funciones se conocen como **matchers** y se utilizan para comparar el valor esperado con el valor obtenido en el test.

#### Igualdad y veracidad

En este apartado se incluyen algunos de los matchers más comunes:

- `toBe`: Compara si dos valores son iguales utilizando el operador `===`. Solo debe usarse para comparar valores primitivos.
- `toEqual`: Compara si dos valores son iguales utilizando el algoritmo de comparación de objetos de JavaScript. Se utiliza para comparar objetos y arrays.
- `toBeNull`: Comprueba si un valor es `null`.
- `toBeUndefined`: Comprueba si un valor es `undefined`.
- `toBeDefined`: Comprueba si un valor está definido.
- `toBeTruthy`: Comprueba si un valor es verdadero, es decir, hace casting a true.
- `toBeFalsy`: Comprueba si un valor es falso, es decir hace casting a false.

Ejemplo de uso de matchers de igualdad y veracidad

```ts
describe('Matchers de igualdad y veracidad', () => {
  it('toBe', () => {
    expect(1 + 2).toBe(3);
  });
  it('toEqual', () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  it('toBeNull', () => {
    expect(null).toBeNull();
  });
  it('toBeUndefined', () => {
    expect(undefined).toBeUndefined();
  });
  it('toBeDefined', () => {
    expect(1).toBeDefined();
  });
  it('toBeTruthy', () => {
    expect(true).toBeTruthy();
  });
  it('toBeFalsy', () => {
    expect(false).toBeFalsy();
  });
});
```

#### Comparación de números

Entre los matchers específicos para valores de tipo number encontramos:

- `toBeGreaterThan`: Comprueba si un valor es mayor que otro.
- `toBeGreaterThanOrEqual`: Comprueba si un valor es mayor o igual que otro.
- `toBeLessThan`: Comprueba si un valor es menor que otro.
- `toBeLessThanOrEqual`: Comprueba si un valor es menor o igual que otro.
- `toBeCloseTo`: Comprueba si un valor es cercano a otro, con un margen de error.

Ejemplo de uso de matchers de comparación de números

```js
describe('Matchers de comparación de números', () => {
  it('toBeGreaterThan', () => {
    expect(3).toBeGreaterThan(2);
  });
  it('toBeGreaterThanOrEqual', () => {
    expect(3).toBeGreaterThanOrEqual(3);
  });
  it('toBeLessThan', () => {
    expect(2).toBeLessThan(3);
  });
  it('toBeLessThanOrEqual', () => {
    expect(2).toBeLessThanOrEqual(2);
  });
  it('toBeCloseTo', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});
```

#### Comparación de otros tipos de valores

Otros matchers disponibles par otros tipos de valores son:

- `toBeInstanceOf`: Comprueba si un valor es una instancia de una clase.
- `toMatch`: Comprueba si un valor coincide con una expresión regular.
- `toContain`: Comprueba si un valor contiene otro valor. Puede utilizarse con arrays y strings.
- `toHaveLength`: Comprueba si un valor tiene una longitud determinada. Puede utilizarse con arrays y strings.

Ejemplo de uso de matchers de comparación de otros tipos de valores

```js
describe('Matchers de comparación de otros tipos de valores', () => {
  it('toBeInstanceOf', () => {
    expect(new Date()).toBeInstanceOf(Date);
  });
  it('toMatch', () => {
    expect('abc').toMatch(/a/);
  });
  it('toContain', () => {
    expect([1, 2, 3]).toContain(2);
  });
  it('toHaveLength', () => {
    expect('abc').toHaveLength(3);
  });
});
```

#### Excepciones y errores

El matchers para errores es

- `toThrow`: Comprueba si una función lanza una excepción.

Su variante `toThrowError` comprobaba si una función lanza una excepción con un mensaje determinado, pero ha sido deprecado.

En caso de los test de snapshot, Vitest proporciona los siguientes matchers para errores:

- `toThrowErrorMatchingSnapshot`: Comprueba si una función lanza una excepción que coincide con un snapshot.
- `toThrowErrorMatchingInlineSnapshot`: Comprueba si una función lanza una excepción que coincide con un snapshot en línea.

Algunos ejemplos de uso de matchers para errores:

```js
const throwError = () => {
  throw new Error('Error');
};

function makePossibleError(n) {
  if (n > 1) {
    throw new Error('Error');
  }
}
describe('Matchers de errores', () => {
  it('toThrow', () => {
    expect(throwError).toThrow();
  });
  it('toThrow', () => {
    expect(() => makePossibleError(2)).toThrow();
  });
});
```

En los test de casos en las que una función lanzan un error, esta se pasa como **callback** al expect, para que Vitest pueda capturar la excepción y comprobar si se ha lanzado. En el caso de la función `makePossibleError`, que necesita un argumento, se pasa como callback una función anónima que llama a `makePossibleError` con el argumento 2.

### Tests de un componente React con Vitest y Testing Library

#### 👁️‍🗨️Componente Footer

Tomamos el componente Footer que extrajimos de la App inicial creada por Vite.

```tsx
// src/components/footer/footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </footer>
  );
};
```

Para testar este componente, creamos un fichero footer.test.tsx en el mismo directorio que el componente y escribimos el siguiente código:

```tsx
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />);
    const footerElement = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(footerElement).toBeInTheDocument();
  });
});
```

Como se puede ver usamos varios elementos de Testing Library para testar el componente:

- La **función render** permite renderizar el componente Counter en el DOM simulado.
- El **objeto screen** proporciona funciones para obtener elementos del DOM simulado, como getByText que obtiene un elemento que contenga un texto determinado.

En el test, comprobamos que el elemento correspondiente al componente está en el DOM simulado. Disponemos para ello de uno de los **matchers** mas utilizados entre los que aporta la librería con la función expect(textElement).**toBeInTheDocument()**.

Si hemos hecho los cambios indicados en la configuración, no será necesario importar `@testing-library/jest-dom` en cada fichero de test, ya que los matchers adicionales estarán disponibles globalmente.

#### Métodos del objeto screen

El objeto screen proporciona varios métodos para obtener elementos del DOM simulado que utilizan tres estrategias diferentes para buscar elementos:

- getBy: Retorna el nodo que corresponde a la búsqueda y lanza un error si no encuentra el elemento.
- queryBy: Retorna el nodo que corresponde a la búsqueda y null si no encuentra el elemento.
- findBy: Devuelve una promesa que se resuelve cuando encuentra el elemento, por lo que se utiliza para elementos que se renderiza de forma asíncrona.

En los tres casos existe una variante que permite buscar elementos por distintos atributos, como por ejemplo:

- getAllBy: Retorna un array con los nodos que corresponden a la búsqueda y lanza un error si no encuentra ninguno.
- queryAllBy: Retorna un array con los nodos que corresponden a la búsqueda y un array vacío si no encuentra ninguno.
- findAllBy: Devuelve una promesa que se resuelve cuando encuentra los elementos, por lo que se utiliza para elementos que se renderizan de forma asíncrona.

Además, los métodos de cualquiera de estos 6 tipos pueden buscar elementos por distintos atributos, que pueden ordenarse en función de la prioridad con la que la librería recomienda su uso:

1. Queries accesibles
   - getByRole: Busca un elemento por su rol.
   - getByLabelText: Busca un elemento por su etiqueta.
   - getByPlaceholderText: Busca un elemento por su texto de marcador de posición.
   - getByText: Busca un elemento que contenga un texto determinado.
   - getByDisplayValue: Busca un elemento por su valor de visualización.
2. Queries semánticas
   - getByAltText: Busca un elemento por su texto alternativo.
   - getByTitle: Busca un elemento por su título.
3. Queries por ID
   - getByTestId: Busca un elemento por su atributo data-testid.

El criterio de ordenación corresponde a las ideas del autor de la librería, **Kent C. Dodds**, que recomienda utilizar los métodos de la primera categoría siempre que sea posible, ya que son los más accesibles y semánticos, reflejando la forma en la que los usuarios interactúan con la página. En caso de no poder utilizarlos, se recomienda utilizar los métodos de la segunda categoría y, en último lugar, los métodos de la tercera categoría.

En el caso de los métodos de la tercera categoría, **getByTestId** es el único que no se basa en la apariencia del elemento, sino en su propósito, por lo que es el único que se recomienda utilizar en caso de no poder utilizar los métodos de las dos primeras categorías. Para indicar ese propósito, se prescinde del uso de selectores habituales de CSS, incluidos class o id, como identificadores de elementos basados en la apariencia, como clases o y se utiliza un atributo data-testid con un valor que refleje el propósito del elemento. Recordemos que los atributos data-\* son atributos personalizados que permiten almacenar información adicional sobre un elemento en el DOM.

En cuanto al primero de los métodos, **getByRole**, es el más recomendado por la librería, ya que refleja la forma en la que los usuarios interactúan con la página. Para ello, se basa en el **atributo role** de los elementos del DOM, que es un atributo que permite añadir información semántica a los elementos del DOM, indicando su propósito o función. Este atributo se introdujo en el HTML a partir de otro estándar del W3C conocido como **ARIA** (Accessible Rich Internet Applications), donde se definen un conjunto de valores que reflejan el role que juega un elemento, para permitir mejorar la accesibilidad de las aplicaciones web. Muchas etiquetas HTML tienen un role implícito, pero en algunos casos es necesario añadir un role explícito para mejorar la accesibilidad de la aplicación, utilizando el **atributo role**. Por ejemplo, un botón tiene un role de `button`, un enlace tiene un role de `link`. Si un elemento que no es un botón ni un enlace se comporta como un botón o un enlace, se le puede añadir un role de `button` o `link`.

#### Test de 'caja negra' y 'caja blanca'

En los **tests de 'caja negra'** se prueba el componente como una caja cerrada, es decir, sin conocer su implementación interna. Se trata de probar el componente como si fuera una caja negra, sin conocer cómo está implementado internamente. En este tipo de test se prueban las entradas y salidas del componente, es decir, se prueban los props que recibe el componente y los elementos que se muestran en el DOM. En nuestro sencillo ejemplo, podemos comprobar que el texto del componente es el esperado, pero no podemos comprobar cómo se obtiene a partir de la variable title, ya que en ese caso estaríamos accediendo a la implementación del componente.

Este tipo de test es propuesto por la testing library, ya que se centra en la funcionalidad del componente tal como la percibe el usuario y no en su implementación interna Esto ayuda a enfocar la atención en la usabilidad y accesibilidad del componente y permite realizar cambios en la implementación sin tener que modificar los tests.

En los **tests de 'caja blanca'** se prueba el componente como una caja abierta, es decir, conociendo su implementación interna. Se trata de probar el componente conociendo cómo está implementado internamente. En este tipo de test se prueban los métodos y propiedades internas del componente, como puede ser sus estados. En nuestro caso podríamos comprobar el valor de la variable title, que es un estado del componente.

La testing library no recomienda este tipo de test, ya que se centra en la implementación interna del componente y no en su funcionalidad. En consecuencia no proporciona ninguna función para acceder a los estados internos del componente. Las razones esgrimidas por el autor de la librería son que este tipo de test no aporta valor al usuario, ya que se centra en la implementación interna del componente y no en su funcionalidad, sin aportar información sobre la usabilidad y accesibilidad del componente. Ademas, depender de la implementación hace que los tests sean más frágiles y se rompan con más facilidad al realizar cambios en el código. Estos argumentos cobran más sentido cuando se reduce al mínimo la lógica interna del componente, abstraiéndola a otras capas, como `custom hooks` o `servicios`.

Sin embargo, eso no siempre sucede y los tests de caja blanca son comunes en la práctica, cuando se necesita testar la lógica interna del componente. Otras librerías como **Enzyme**, que como ya mencionamos, también es muy utilizada para testar componentes de React, proporcionan funciones para acceder a los estados internos del componente y testarlos. Lo mismo sucede en el caso de **Angular**, donde se pueden testar los estados internos de los componentes con la combinación de Jasmine y Karma junto con las herramientas de testing específicas del framework.

### Test básicos de componentes

#### Test de componentes de React con props

En ocasiones, los componentes de React reciben props que afectan a su comportamiento o a su apariencia. Para testar estos componentes, necesitamos renderizar el componente con las props correspondientes y comprobar que se comporta de la forma esperada. Para ello, Testing Library proporciona la función **render** que nos permite renderizar el componente con las props correspondientes.

##### 👁️‍🗨️Test del componente Header

A partir de la App inicial creada por Vite, hemos extraído el componente Header.

```tsx
// src/components/header/header.tsx

import React from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './header.css';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
    </header>
  );
};
```

Para testar este componente, creamos un fichero header.test.tsx en el mismo directorio que el componente y escribimos el siguiente código:

```tsx
// src/components/header/header.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Header component', () => {
  test('should render the title received as prop', () => {
    render(<Header title="Título de prueba" />);
    const textElement = screen.getByText(/Título/i);
    expect(textElement).toBeInTheDocument();
  });
});
```

En este test, renderizamos el componente Header con la prop title="Título de prueba" y comprobamos que se muestra el texto correspondiente en el DOM simulado. La función render recibe el componente Header con la prop title="Título de prueba" y renderiza el componente en el DOM simulado.

#### Estado e Interacciones del usuario

Los componentes de React suelen tener un **estado interno**, creado gracias al hook `useState` que puede cambiar en función de la interacción del usuario con el componente. Para testar estos componentes, necesitamos simular la interacción del usuario con el componente, como hacer clic en un botón o rellenar un formulario. Para ello, Testing Library proporciona la función **fireEvent** que nos permite simular eventos del usuario, como hacer clic en un botón o rellenar un formulario.

##### 👁️‍🗨️Test del componente Counter

A partir de la App inicial creada por Vite, hemos extraído el componente Counter.:

```tsx
// src/components/counter.tsx
import React, { useState } from 'react';

type Props = {
  initialCount?: number;
};

export const Counter: React.FC<Props> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
```

Para testar este componente, creamos un fichero Counter.test.tsx en el mismo directorio que el componente y escribimos el siguiente código:

```tsx
// src/components/counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter component', () => {
  test('should start with 0', () => {
    render(<Counter />);
    const textElement = screen.getByText(/count is 0/i);
    expect(textElement).toBeInTheDocument();
  });
});
```

En el primer test, sin haber hecho clic comprobamos que el elemento correspondiente al componente está en el DOM simulado. Como ya hemos visto, para ello utilizamos los dos elementos básicos de Testing Library, la función render y el objeto screen, junto con el matcher toBeInTheDocument. la librería con la función expect(textElement).toBeInTheDocument(). Al mismo tiempo estamos testando que el contador se inicializa a 0, al comprobar como este valor se refleja en la vista renderizada por el componente. Vemos pòr tanto el carácter de test de 'caja negra' de este tipo de test.

```tsx
describe('Counter component', () => {
  // ...

  test('should increase after click the button with click()', async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
    await buttonElement.click();
    const textElement = screen.getByText(/count is 1/i);
    expect(textElement).toBeInTheDocument();
  });
});
```

En el segundo test, simulamos un clic en el botón Haz clic con el método nativo click del elemento obtenido con getByRole y comprobamos que el texto Has hecho clic 1 veces está en el DOM simulado, es decir que a traves de la vista comprobamos como ha cambiado el estado interno del componente. El método click del elemento simula un clic en el botón.

Como consecuencia del evento click, el estado puede cambiar, y por tanto se renderizará de nuevo el componente. Es una forma de asincronía, pero al usar el await antes del click, TS nos indica que "await" no tiene efecto en el tipo de esta expresión, lo cual no es cierto, porque el test funciona.

Sin embargo Vitest no reconoce que el estado puede cambiar como consecuencia del evento click, por lo que nos advierte de que el test puede no funcionar correctamente. Para evitar este problema, debemos envolver la llamada al método click en una **función act**, que nos permite asegurarnos de que todos los cambios de estado se han aplicado antes de continuar con el test. De esta forma, Vitest reconoce que el estado puede cambiar como consecuencia del evento click y no nos advierte de que el test puede no funcionar correctamente.

Act es una función una función proporcionada por React y replicada en la librería `react-dom/test-utils`, por lo que podemos importarla de cualquiera de los dos sitios. En este caso, la importamos de `react-dom/test-utils` :

```tsx
import { act } from 'react-dom/test-utils';
test('should increase after click the button with click()', async () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /count is/i });

  // Es válido pero Vitest no reconoce que el estado puede cambiar
  // como consecuencia del evento click, por lo que dad una advertencia
  // await buttonElement.click();

  await act(async () => {
    buttonElement.click();
  });
  const textElement = screen.getByText(/count is 1/i);
  expect(textElement).toBeInTheDocument();
});
```

Existen dos alternativas al método click del elemento, que en ambos casos son validas para otros muchos eventos del usuario, como rellenar un formulario o mover el ratón.

##### Simular eventos con fireEvent

FireEvent es un objeto que proporciona una serie de métodos para simular eventos del usuario, como hacer clic en un botón o rellenar un formulario. Por ejemplo, fireEvent.click simula un clic en un botón, mientras que fireEvent.change simula el evento de cambio de un campo de texto.

```ts
// src/components/counter.test.tsx
test('should increase after click the button with fireEvent', () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /count is/i });
  fireEvent.click(buttonElement);
  const textElement = screen.getByText(/count is 1/i);
  expect(textElement).toBeInTheDocument();
});
```

En el segundo test en este caso, simulamos un clic en el botón Haz clic con la función fireEvent.click y comprobamos que el texto Has hecho clic 1 veces está en el DOM simulado, es decir que a traves de la vista comprobamos como ha cambiado el estado interno del componente. El objeto fireEvent proporciona una serie de métodos para simular eventos del usuario, y ya utiliza internamente la función act, por lo que no necesitamos añadirla.

##### Simular eventos con userEvent

La propia testing library proporciona una segunda librería, **testing-library/user-event**, que incluye una serie de métodos para simular eventos, como hacer clic en un botón o rellenar un formulario de una forma mas realista, como si un usuario real estuviera interactuando con la página.

Por ejemplo, userEvent.type simula la escritura de un texto en un campo de texto, mientras que fireEvent.change simula el evento de cambio de un campo de texto.

El test resultante quedaría como sigue:

```tsx
// src/components/counter.test.tsx
test('should increase after click the button with userEvent', async () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /count is/i });
  await userEvent.click(buttonElement);
  const textElement = screen.getByText(/count is 1/i);
  expect(textElement).toBeInTheDocument();
});
```

En userEvent, los eventos son realmente **asíncronos**, siendo el valor devuelto una promesa, por lo que debemos esperar a que se resuelva la operación antes de comprobar el resultado. Para ello, la función es **async** y utilizamos la palabra clave **await** antes de userEvent.click.

#### Composición de Componentes: propiedad children

La propiedad **children** es una propiedad especial de los componentes de React que permite componer componentes de forma jerárquica. La propiedad children permite pasar elementos hijos a un componente, que pueden ser otros componentes o elementos HTML.

Para testar estos componentes, necesitamos renderizar el componente con los elementos hijos previstos y comprobar que se comporta de la forma esperada. Para ello, Testing Library proporciona la función **render** que ya hemos utilizado y que nos permite renderizar el componente con los elementos hijos correspondientes.

##### 👁️‍🗨️Test del componente Counter2Buttons

Para el componente Counter2Buttons que incluye dos botones para incrementar y decrementar el contador, el test sería practincamente igual al del componente Counter, pero incluyendo la simulación de dos eventos de clic, uno para cada botón, que en este caso haremos con userEvent, por ser la alternativa recomendada por Testing Library.

```tsx
// src/components/counter2buttons.test.tsx
describe('Counter2Buttons component', () => {
  test('should start with 0', () => {
    render(<Counter2Buttons />);
    const textElement = screen.getByText(/count is 0/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should increase after click the button ➕', async () => {
    render(<Counter2Buttons />);
    const buttonElement = screen.getByRole('button', { name: /➕/i });
    await userEvent.click(buttonElement);
    const textElement = screen.getByText(/count is 1/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should decrease after click the button ➖', async () => {
    render(<Counter2Buttons />);
    const buttonElement = screen.getByRole('button', { name: /➖/i });
    await userEvent.click(buttonElement);
    const textElement = screen.getByText(/count is -1/i);
    expect(textElement).toBeInTheDocument();
  });
});
```

##### 👁️‍🗨️Test del componente Card

De nuevo hemos extraído el componente Card a partir de la App inicial:

```tsx
// src/components/card.tsx
import React from 'react';

type CardProps = {
  title?: string;
} & React.PropsWithChildren;

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </div>
  );
};
```

Nuestro componente Counter utilizará Card para mostrar su contenido, y opcionalmente podremos pasarle un título a través de la prop title:

```tsx
// src/components/counter.tsx
import React, { useState } from 'react';
import { Card } from './card';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <Card title="Contador">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </Card>
  );
};
```

Em el test del componente Card, tendremos que renderizar el componente Card con un título y algunos elementos hijos, y comprobar que se muestran correctamente en el DOM. Como el título es opcional, también deberemos comprobar el caso en el que no se proporciona un título.

```tsx
// src/components/card.test.tsx
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card component', () => {
  test('should render with title and children', () => {
    render(
      <Card title="Card Title">
        <p>Card content</p>
      </Card>
    );
    const titleElement = screen.getByText(/card title/i);
    const contentElement = screen.getByText(/card content/i);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test('should render without title', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    const contentElement = screen.getByText(/card content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
```

#### Componentes y tests de integración

Los test de los componentes suelen considerarse **test de integración**, ya que implican un componente con su interfaz gráfica y su lógica y muchas veces incluyen además la interacción con otros componentes incluidos en el que estamos testando. En este tipo, gracias a la Testing Library, lo primero que debemos hacer es **renderizar** el componente, junto con sus "hijos", en un contenedor del DOM simulado. A continuación, podemos **interactuar** con el componente y comprobar que se comporta de la forma esperada.

##### 👁️‍🗨️Test del componente App con componentes hijos

Nuestro componente App incluye varios componentes hijos, como Header, Counter y Footer.

```tsx
// src/components/app.tsx
import { Header } from './header';
import { Counter } from './counter';
import { Footer } from './footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Counter />
      </main>
      <Footer />
    </>
  );
};
```

Lo hemos refactorizado como arrow y exportado con nombre para seguir el mismo patrón que en los otros componentes, reubicándolo en su propia carpeta `src/components/app`.

Como consecuencia haremos un ajuste en el fichero `src/main.tsx` para importar el componente App correctamente y respetar las normas de TypeScript no utilizando el null assertion operator (!):

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Failed to find the root element');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

###### Test de integración o de aceptación

Podemos a testar el componente App completo, comprobando que se renderizan correctamente los componentes hijos y que se comportan de la forma esperada.

```tsx
// src/components/app.acceptance.test.tsx
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App component (acceptance test)', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should render Header', () => {
    const headerElement = screen.getByRole('heading', {
      name: /react with typescript/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  test('should render Counter', () => {
    const counterElement = screen.getByRole('button', {
      name: /count is/i,
    });
    expect(counterElement).toBeInTheDocument();
  });

  test('should render Footer', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});
```

De esta forma, estarían¡mos haciendo un test de integración del componente App, comprobando que se renderizan correctamente los componentes hijos y que se comportan de la forma esperada. Igualmente podríamos entenderlo como un test de aceptación, ya que estamos comprobando que el componente App cumple con los requisitos funcionales establecidos.

Creamos el test válido en la medida en que conocemos realmente los componentes hijos y su funcionamiento,

- el Header muestra un título concreto en un elemento con rol de heading,
- el Counter muestra un botón con un texto concreto en un elemento con rol de button,
- el Footer muestra un elemento con un rol concreto.

En un entorno real, donde los componentes hijos pueden ser más complejos y tener su propia lógica interna, este tipo de test puede ser más difícil de implementar y mantener.

###### Test de unitario del componente App

La alternativa estrictamente unitaria para App, ya que los otros componentes ya han sido testados por separado, sería hacer un mock de los componentes hijos, para centrarnos exclusivamente en el componente App. Para ello, podemos utilizar la función **vi.mock** de Vitest para simular los componentes hijos y devolver un componente ficticio que no haga nada.

```tsx
// src/components/app.test.tsx
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { App } from './App';
import type { JSX } from 'react';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Footer } from '../footer/footer';

vi.mock('../header/header', () => ({
  Header: vi.fn((): JSX.Element => <header>Mocked Header</header>),
}));
vi.mock('../counter/counter', () => ({
  Counter: vi.fn((): JSX.Element => <div>Mocked Counter</div>),
}));
vi.mock('../footer/footer', () => ({
  Footer: vi.fn((): JSX.Element => <footer>Mocked Footer</footer>),
}));

describe('App component (unit test)', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should render mocked Header', () => {
    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
    expect(Header).toHaveBeenCalled();
  });
  test('should render mocked Counter', () => {
    const counterElement = screen.getByText(/counter/i);
    expect(counterElement).toBeInTheDocument();
    expect(Counter).toHaveBeenCalled();
  });

  test('should render mocked Footer', () => {
    const footerElement = screen.getByText(/footer/i);
    expect(footerElement).toBeInTheDocument();
    expect(Footer).toHaveBeenCalled();
  });
});
```

En realidad la responsabilidad del componente App es invocar a sus hijos, por lo que podríamos simplificar el test, eliminando la simulación del DOM y limitándonos a comprobar que los componentes hijos son invocados correctamente:

```tsx
// src/components/app.test.tsx
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { App } from './App';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Footer } from '../footer/footer';

vi.mock('../header/header', () => ({
  Header: vi.fn(),
}));
vi.mock('../counter/counter', () => ({
  Counter: vi.fn(),
}));
vi.mock('../footer/footer', () => ({
  Footer: vi.fn(),
}));

describe('App component (minimal unit test)', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should call Header component', () => {
    expect(Header).toHaveBeenCalled();
  });
  test('should call Counter component', () => {
    expect(Counter).toHaveBeenCalled();
  });

  test('should call Footer component', () => {
    expect(Footer).toHaveBeenCalled();
  });
});
```

#### 👁️‍🗨️Test del componente Layout

Se plantea de nuevo la misma cuestión que en el caso de App. El componente Layout tiene como responsabilidad estructurar la página, incluyendo el Header y el Footer, y renderizando el contenido principal a través de la propiedad children.

```tsx
// src/components/layout.tsx
import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
```

Por tanto su test unitario podría ser similar al de App, haciendo un mock de los componentes hijos Header y Footer con una implementación básica, y comprobando

- que son invocados correctamente Header y Footer,
- que se renderizan las implementaciones mock de ambos componentes,
- que se renderizan los elementos hijos a través de la propiedad children:

```tsx
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import type { JSX } from 'react';

vi.mock('../header/header', () => ({
  Header: vi.fn((): JSX.Element => <header>Mocked Header</header>),
}));

vi.mock('../footer/footer', () => ({
  Footer: vi.fn((): JSX.Element => <footer>Mocked Footer</footer>),
}));

describe('Layout component', () => {
  beforeEach(() => {
    render(
      <Layout title="Test">
        <div>Child Content</div>
      </Layout>
    );
  });

  test('should render mocked Header', () => {
    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
    expect(Header).toHaveBeenCalledWith({ title: 'Test' }, undefined);
  });

  test('should render mocked Footer', () => {
    const footerElement = screen.getByText(/footer/i);
    expect(footerElement).toBeInTheDocument();
    expect(Footer).toHaveBeenCalled();
  });

  test('should render children content', () => {
    const childElement = screen.getByText(/child content/i);
    expect(childElement).toBeInTheDocument();
  });
});
```

#### 👁️‍🗨️En resumen ... y el coverage

Hemos convertido la App inicial creada por Vite en un conjunto de componentes de React, cada uno con su propio carpeta:

- App,
- Header
- Counter
- Footer
- Card

De cada componente se ha creado un test, utilizando la librería Testing Library para facilitar la interacción con el DOM simulado y la simulación de eventos del usuario. En el caso de App, hemos creado tres versiones del test: aceptación, unitario con mocks y unitario minimalista.

```shell

✓ src/components/core/footer/footer.test.tsx (1 test) 133ms
 ✓ src/components/core/layout/layout.test.tsx (3 tests) 163ms
 ✓ src/components/core/header/header.test.tsx (1 test) 129ms
 ✓ src/components/core/app/App.test.tsx (2 tests) 150ms
 ✓ src/components/counter/counter.test.tsx (4 tests) 1462ms
   ✓ Counter component > should increase after click the button with click()  576ms
   ✓ Counter component > should increase after click the button with fireEvent  369ms
   ✓ Counter component > should increase after click the button with userEvent  407ms
 ✓ src/components/core/app/App.acceptance.test.tsx (3 tests) 1584ms
   ✓ App component (acceptance test) > should render Header  689ms
   ✓ App component (acceptance test) > should render Counter  720ms
 ✓ src/tests/02-matchers.test.ts (16 tests) 23ms
 ✓ src/tests/03-errors.test.ts (2 tests) 9ms
 ✓ src/components/core/card/card.test.tsx (2 tests) 120ms
 ✓ src/components/core/app/App.minimal.test.tsx (2 tests) 80ms
 ✓ src/components/counter2/counter.test.tsx (15 tests) 4122ms
   ✓ Counter2Buttons component > should increase after click the button ➕  776ms
   ✓ Counter2Buttons component > should decrease after click the button ➖  386ms
```

En el conjunto de la aplicación tenemos 14 tests que se ejecutan en menos de 2 segundos, lo cual es un buen resultado. El coverage report nos indica que tenemos un 100% de cobertura en statements, branches, functions y lines.

```shell
 % Coverage report from v8
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   96.34 |    95.23 |      95 |   96.34 |
 components/core/app    |     100 |      100 |     100 |     100 |
  App.tsx               |     100 |      100 |     100 |     100 |
 components/core/card   |     100 |      100 |     100 |     100 |
  card.tsx              |     100 |      100 |     100 |     100 |
 components/core/footer |     100 |      100 |     100 |     100 |
  footer.tsx            |     100 |      100 |     100 |     100 |
 components/core/header |     100 |      100 |     100 |     100 |
  header.tsx            |     100 |      100 |     100 |     100 |
 components/core/layout |     100 |      100 |     100 |     100 |
  layout.tsx            |     100 |      100 |     100 |     100 |
 components/counter     |     100 |      100 |     100 |     100 |
  counter.tsx           |     100 |      100 |     100 |     100 |
 components/counter2    |     100 |      100 |     100 |     100 |
  counter-2buttons.tsx  |     100 |      100 |     100 |     100 |
  counter-dataset.tsx   |     100 |      100 |     100 |     100 |
------------------------|---------|----------|---------|---------|-------------------
```

## 🌐Eventos y formularios. Uso en React y tipado con TypeScript

### Tipado de eventos del DOM

Cuando se registra un callback como manejador (handler) de un evento del DOM, como `onClick`, `onChange`, etc., en el momento que se ejecute la función recibirá como parámetro un objeto de evento (event object) que contiene información sobre el evento que se ha producido.

#### El objeto evento en React: SyntheticEvent

En React, este objeto de evento es un objeto de tipo `SyntheticEvent` o ``, que es una envoltura (wrapper) del objeto de evento nativo del DOM.

`SyntheticEvent` es un interface que extiende el interface `BaseSyntheticEvent`

```ts
interface SyntheticEvent<T = Element, E = Event>
  extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
```

El interface `BaseSyntheticEvent` es un interface genérico que permite definir el tipo del evento y el tipo del elemento al que se aplica el evento. Esto permite a TypeScript inferir el tipo del evento y el tipo del elemento al que se aplica el evento.

```ts
interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}
```

La forma en que se realiza la extensión hace que el SyntheticEvent no pueda definir el tipo del target, que siempre será de tipo `EventTarget`, y no de un tipo más específico, como `HTMLInputElement` o `HTMLButtonElement`.

Esto es un problema, ya que al acceder a las propiedades del target, TypeScript no puede inferir el tipo correcto y se produce un error.

```tsx
const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
  const element = event.target;
  //  element: EventTarget
};
```

Por el contrario, el currentTarget es del tipo `C` en el interface `BaseSyntheticEvent`, que corresponde al tipo `EventTarget & T`, del interface `SyntheticEvent`, donde `T` es el tipo del elemento al que se aplica el evento. Esto significa que el currentTarget puede ser de un tipo más específico, como `HTMLInputElement` o `HTMLButtonElement`.

```tsx sample4.counters.tsx
const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
  const element = event.currentTarget;
  //  element: EventTarget & HTMLButtonElement
};
```

#### Interfaces de eventos específicos

En lugar de los interfaces tan poco específicos, React proporciona otros para los eventos más comunes, como `React.MouseEvent`, `React.PointerEvent`, `React.ChangeEvent`, `React.KeyboardEvent`, etc. En algunos casos, estos interfaces permiten a TypeScript inferir el tipo correcto del target. No es asi en los casos de
`React.MouseEvent` y `React.PointerEvent`.

Ambos extienden en último caso de `UIEvent`, que lo hace de `SyntheticEvent`, por lo que no pueden definir el tipo del target, que siempre será de tipo `EventTarget`, y no de un tipo más específico, como `HTMLInputElement` o `HTMLButtonElement`.

```tsx
interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
  detail: number;
  view: AbstractView;
}
```

Estos interfaces pueden usarse para tipar los manejadores (handlers) de eventos de la siguiente manera:

```tsx sample4.counters.tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const element = event.currentTarget;
  //  element: HTMLButtonElement
};
```

Una alternativa son los tipos de utilidad `React.MouseEventHandler` y `React.PointerEventHandler`, que permiten definir el tipo del manejador (handler) de eventos directamente, sin necesidad de definir el tipo del parámetro.

```tsx
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  const element = event.currentTarget;
  //  element: HTMLButtonElement
};
```

#### Atributos `target` y `currentTarget`

Hay que tener en cuenta lo que significan en el DOM los atributos `target` y `currentTarget`:

- `target`: es el elemento que ha desencadenado el evento. Puede ser un elemento hijo del elemento al que se ha aplicado el evento.
- `currentTarget`: es el elemento al que se ha aplicado el evento. Es el elemento que está escuchando el evento.

Si el manejador (handle) esta registrado en el elemento que desencadena el evento, que es lo más habitual, ambos atributos serán el mismo elemento. En ese caso, usar currenTarget soluciona el problema de inferencia de tipos.

#### Casting de tipos para event.target

En caso de que el manejador (handle) no esté registrado en el elemento que desencadena el evento, como en el caso de un botón dentro de un formulario, el target y currentTarget serán diferentes. En este caso, para solucionar este problema, se puede usar el casting o aserción de tipos que permite modificar el tipo de un elemento, siempre que estemos absolutamente seguros de que esta modificación es válida.

```tsx
const handleClick = (event: SyntheticEvent): void => {
  const element = event.target as HTMLButtonElement;
  //  element: HTMLButtonElement
};
```

#### 🧿Componente Counter2 refactorizar: CounterDatasets

En nuestro componente Counter, una vez definido correctamente el tipo del elemento, se puede acceder a su propiedad `dataset`, que almacena como objeto todas las propiedades `data-*` del elemento. En este caso, queremos acceder a la propiedad `data-value`, que es un atributo personalizado que se ha añadido al botón.

```tsx
export const CounterWithEvent4: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    // código del manejador
  };

  return (
    <Card>
      <p>
        <button onClick={handleClick} data-value={-1}>
          ➖
        </button>
        <span className="count-value">count is {count}</span>
        <button onClick={handleClick} data-value={1}>
          ➕
        </button>
      </p>
    </Card>
  );
};
```

El manejador de eventos, que tiparemos de cualquiera de las formas descritas, accederá al dataset del elemento para obtener el valor del atributo `data-value`, que se usará para incrementar o decrementar el contador.

```tsx
// const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const element = event.currentTarget; // tipo EventTarget & HTMLButtonElement
  const { value } = element.dataset as DOMStringMap;
  setCount(count + Number(value));
};
```

El dataset esta tipado con el interface `DOMStringMap`, que es una **firmas de índice** (index signatures), que permiten definir un **tipo de objeto** con **propiedades dinámicas**, como sucede con objetos que contienen un número variable de propiedades de nombre no conocido a priori.

```tsx
interface DOMStringMap {
  [key: string]: string;
}
```

Esto significa que el dataset puede contener cualquier número de propiedades, y cada propiedad es de tipo `string`. Esto es útil para acceder a propiedades personalizadas que se han añadido al elemento, siempre de tipo `string`, porque es el único tipo que se puede almacenar en cualquier atributo HTML.

#### 👁️‍🗨️Tests del componente CounterDatasets

Al tener el mismo interfaz que el componente Counter2Buttons, los tests serán iguales, dado que el enfoque de la Testing Library es comprobar las funcionalidades con independencia de su implementación.

```tsx
describe('Counter2Buttons component', () => {
  test('should start with 0', () => {
    render(<Counter2Buttons />);
    const textElement = screen.getByText(/count is 0/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should increase after click the button ➕', async () => {
    render(<Counter2Buttons />);
    const buttonElement = screen.getByRole('button', { name: /➕/i });
    await userEvent.click(buttonElement);
    const textElement = screen.getByText(/count is 1/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should decrease after click the button ➖', async () => {
    render(<Counter2Buttons />);
    const buttonElement = screen.getByRole('button', { name: /➖/i });
    await userEvent.click(buttonElement);
    const textElement = screen.getByText(/count is -1/i);
    expect(textElement).toBeInTheDocument();
  });
});
```

### Formularios

En React los formularios se pueden manejar de dos formas diferentes: **formularios controlados** y **formularios no controlados**.

#### Tipado de eventos de formularios controlados

En el caso de los formularios, los eventos más habituales son React.ChangeEvent, React.FormEvent, etc.

```tsx
interface FormEvent<T = Element> extends SyntheticEvent<T> {}
interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}
```

El evento `ChangeEvent` es un evento que se produce cuando el valor de un elemento de formulario cambia. Este evento se utiliza para manejar los cambios en los elementos de formulario, como los campos de texto, los selectores y los checkboxes.

De esa manera se puede crear lo que se conoce como un **formulario controlado** de React, donde el valor del campo de texto se almacena en el estado interno del componente formulario y se actualiza cada vez que el campo cambia (el usuario escribe en el campo o selecciona un valor).

```tsx sample5.forms.tsx
export const SimpleForm = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // .target: EventTarget & HTMLInputElement
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};
```

El evento de tipo `FormEvent` es el evento `submit` que se produce cuando se envía un formulario. Este evento se utiliza para manejar el envío de formularios y evitar el comportamiento por defecto del navegador, que es recargar la página.

En un formulario controlado, el valor del campo de texto se almacena en el estado interno del componente y se actualiza cada vez que el campo cambia. Esto permite que el componente tenga un control total sobre el valor del campo de texto y se pueda manejar el envío del formulario de manera más eficiente, sin necesitar acceder al target para obtener el valor del campo.

##### 🧿Componente LoginForm: formulario controlado con multiples campos

Veamos un ejemplo de un formulario controlado con múltiples campos, donde

- se define como un tipo el objeto que almacena los valores de los campos del formulario, y
- otro tipo para almacenar los errores de validación del formulario.
- se utiliza una función genérica para manejar el cambio de cualquiera de los campos del formulario, y
- una función para manejar el envío del formulario.

```tsx
// login.form.tsx
const initialState: Login = {
  email: '',
  passwd: '',
  rememberMe: false,
};

type Props = {
  manageStates?: (loginData: Login) => Promise<void>;
};

export const LoginForm: React.FC<Props> = ({
  manageStates = manageLoginService,
}) => {
  const [userData, setUserData] = useState<Login>(initialState);

  const handleSubmit = async (
    ev: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    //...
  };

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    //...
  };

  return (
    <Card title="Formulario de Login">
      <form onSubmit={handleSubmit}>
        <div className="group-control">
          <input
            type="email"
            name="email"
            placeholder="Dime tu email"
            aria-label="email"
            required
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="group-control">
          <input
            type="password"
            name="passwd"
            placeholder="Dime tu password"
            aria-label="password"
            required
            value={userData.passwd}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              aria-label="rememberMe"
              checked={userData.rememberMe}
              onChange={handleChange}
            />
            Recuérdame
          </label>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Card>
  );
};
```

Si el formulario incluye un campo de tipo `checkbox`, `radiobutton` o `select`, el evento `ChangeEvent` se tipará de forma más extensa, utilizando una unión de tipos, que incluye el tipo `HTMLInputElement` o `HTMLSelectElement`, dependiendo del tipo de elemento al que se aplica el evento. Ademas es código del handler tiene que contemplar el comportamiento de los checkbox, accediendo a pa propiedad checked en lugar de al value.

```tsx sample6.a.course.register.tsx
const handleChange = (
  ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
): void => {
  const { name, value, type } = ev.target;
  const val =
    type === 'checkbox' ? (ev.target as HTMLInputElement).checked : value;
  setUserData({
    ...userData,
    [name]: val,
  });
};
```

La respuesta al evento `submit` del formulario se maneja en el método `handleSubmit`, que evita el comportamiento por defecto del navegador y llama a la función `manageStates` que se ha pasado como prop al componente, pasando como parámetro el objeto con los valores de los campos del formulario.

```tsx
const handleSubmit = async (
  ev: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  ev.preventDefault();
  await manageStates(userData);
  setUserData(initialState);
};
```

Al final del envío del formulario, se puede resetear el estado interno del componente, para limpiar los campos del formulario.

##### Mock del servicio de usuario: Login

El valor por defecto de la prop `manageStates` es la función `manageLoginService`, un mock de servicio que simula una llamada a un servicio de login.

```tsx
// Simula la gestión del login (por ejemplo, llamada a una API)
export const manageLoginService = async (loginData: Login): Promise<void> => {
  console.log('Login data:', loginData);
};
```

##### 👁️‍🗨️Test del Formulario controlado LoginForm

El test del formulario controlado LoginForm se centrará en comprobar que los campos del formulario se actualizan correctamente cuando el usuario escribe en ellos, y que el envío del formulario llama a la función `manageStates` con los valores correctos.

```tsx
describe('Login', () => {
  const mockManageStates = vi.fn(async () => undefined);

  beforeEach(() => {
    render(<LoginForm manageStates={mockManageStates} />);
  });

  test('should render correctly', () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('should submit form with valid data', async () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const rememberMeCheckbox = screen.getByLabelText(/rememberMe/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(rememberMeCheckbox);
    await userEvent.click(submitButton);

    expect(mockManageStates).toHaveBeenCalledWith({
      email: 'test@example.com',
      passwd: 'password',
      rememberMe: true,
    });
    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
    expect(rememberMeCheckbox).not.toBeChecked();
  });
});
```

Para simular el proceso en el que el uuario completa el formulario y lo envía, utilizamos la librería `userEvent`, que permite simular eventos del usuario de una forma más realista que la función `fireEvent`.

- el evento `type` para escribir en los campos de texto,
- el evento `click` para marcar el checkbox y enviar el formulario.
- el evento `clear` para limpiar los campos de texto.

Tenemos un **mock** de la función `manageStates`, que se pasa como prop al componente LoginForm, y comprobamos que se llama con los valores correctos cuando se envía el formulario.

Un mock es una función sin implementación (devuelve undefined) que nos permite comprobar si ha sido llamada, con qué parámetros y cuántas veces. En Vitest se crea con la función `vi.fn()`. Como veremos en test posteriores, se le puede añadir una implementación simulada si es necesario.

Por otra parte, podemos comprobar que los campos del formulario muestran errores de validación cuando se intenta enviar el formulario con campos vacíos. En realidad, basta con comprobar que los campos son inválidos (toBeInvalid) después de intentar enviar el formulario con campos vacíos.

```tsx
describe('Login', () => {
  const mockManageStates = vi.fn(async () => undefined);

  beforeEach(() => {
    render(<LoginForm manageStates={mockManageStates} />);
  });

  test('should show email error when email is empty', async () => {
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.clear(emailInput);
    expect(emailInput).toHaveValue('');
    await userEvent.click(submitButton);
    expect(emailInput).toBeInvalid();
  });

  test('should show password error when password is empty', async () => {
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await userEvent.clear(passwordInput);
    expect(passwordInput).toHaveValue('');
    await userEvent.click(submitButton);
    expect(passwordInput).toBeInvalid();
  });
});
```

#### Formularios no controlados

Una alternativa a los formularios controlados son los formularios no controlados, donde el valor los campos (HTMLInput, HTMLSelect o HTMLTextArea) se almacena en el DOM y se accede a ellos solo en el momento de enviar el formulario, sin necesidad de almacenarlos en el estado interno del componente. Esto se puede hacer utilizando una referencia (ref) al elemento del DOM del propio formulario, que se puede obtener del evento submit.

```tsx
// sample6.b.course.register.tsx
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
      ev.preventDefault();
      const form = ev.currentTarget; // EventTarget & HTMLFormElement
      ...
  }
```

A partir de ahí existen diversas posibilidades

- obtener las referencias a los elementos del formulario y acceder a sus valores directamente. Todas las referencias a los controles están incluidas en el HTMLFormElement

- utilizar un FORMData, que es un objeto que representa los datos de un formulario y permite acceder a los valores de los campos del formulario de manera más sencilla.

##### 🧿Componente RegisterForm

```tsx
// register.form.tsx
return (
  <form onSubmit={handleSubmit}>
    <legend>Contacta con nosotros</legend>
    <p>Ejemplo de 'UnControlled Form'</p>

    <div className="group-control">
      <input
        type="text"
        placeholder="Dime tu nombre"
        required
        name="userName"
        defaultValue={userDataInitial.userName}
      />
    </div>

    <div className="group-control">
      <input
        type="email"
        placeholder="Dime tu email"
        required
        name="email"
        defaultValue={userDataInitial.email}
      />
    </div>

    <div className="group-control">
      <input
        type="password"
        placeholder="Dime tu password"
        required
        name="passwd"
        defaultValue={userDataInitial.passwd}
      />
    </div>

    <div className="group-control">
      <input
        type="checkbox"
        id="is-ok"
        name="isOkConditions"
        defaultChecked={userDataInitial.isOkConditions}
      />
      <label htmlFor="is-ok">Acepto las condiciones...</label>
    </div>

    <fieldset name="turn">
      <legend>Selecciona un turno</legend>
      <input type="radio" name="turn" id="turno-m" value="M" />
      <label htmlFor="turno-m">Mañana</label>
      <input type="radio" name="turn" id="turno-t" value="T" />
      <label htmlFor="turno-t">Tarde</label>
      <input type="radio" name="turn" id="turno-n" value="N" />
      <label htmlFor="turno-n">Noche</label>
    </fieldset>

    <label htmlFor="course">Elige un curso</label>
    <select name="course" id="course" defaultValue={userDataInitial.course}>
      <option value=""></option>
      <option value="A">Angular</option>
      <option value="R">React</option>
      <option value="N">Node</option>
    </select>

    <div>
      <button type="submit">Enviar</button>
    </div>
  </form>
);
```

En el método `handleSubmit`, se puede acceder a los valores de los campos del formulario utilizando las propiedades del objeto `HTMLFormElement`, que es el tipo del elemento del formulario. Esto permite acceder a los valores de los campos del formulario sin necesidad de almacenarlos en el estado interno del componente.

```tsx
// sample6.b.course.register.tsx

const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
  ev.preventDefault();
  const form = ev.currentTarget; // EventTarget & HTMLFormElement
  const formElements = form.elements;

  const userNameElement = formElements.namedItem(
    'userName'
  ) as HTMLInputElement;
  /// ...
};
```

Si utilizamos un bucle para recorrer los elementos del formulario, obtendríamos algo como esto:

```tsx
// sample6.b.course.register.tsx
const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
  ev.preventDefault();
  const form = ev.currentTarget; // EventTarget & HTMLFormElement
  const result: Record<string, string | boolean> = {};
  for (const key of keys) {
    const element = formElements.namedItem(key) as HTMLInputElement;
    // Si el elemento es un checkbox, se obtiene el valor del atributo checked
    result[key] =
      typeof userData[key] === 'boolean'
        ? element.checked
        : (result[key] = element.value);
  }
  return result as User;
};
```

###### FormData

El objeto `FormData` es un objeto que representa los datos de un formulario y permite acceder a los valores de los campos del formulario de manera más sencilla. Se puede crear un objeto `FormData` a partir de un elemento HTML de formulario.
La interfaz FormData proporciona una iterador que permite obtener un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores.

```tsx
  const formData = new FormData(form);
);
```

- accediendo manualmente a cada elemento del formData gracias al método get y el nombre del campo

```tsx
// sample6.b.course.register.tsx
const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
  ev.preventDefault();
  const formData = new FormData(form);
  const result = {
    userName: formData.get('userName') as string,
    // ...
  };
  return result;
};
```

- utilizando los métodos de la clase Object, como `Object.entries`, `Object.keys` o `Object.values`, se puede obtener un array de pares clave/valor, donde cada par representa un campo del formulario y su valor.

```tsx sample6.b.course.register.tsx
const formData = new FormData(form);
const data: Record<string, FormDataEntryValue> = Object.fromEntries(formData);
const result = {
  userName: data.userName as string,
  email: data.email as string,
  passwd: data.passwd as string,
  // isOkConditions es un booleano, pero FormData devuelve un string
  isOkConditions: data.isCondition === 'on',
  turn: data.turn as string,
  course: data.course as string,
};
return result;
```

En lugar de crear el objeto result de forma manual, convendría hacerlo en la iteración, sustituyendo el uso de `fromEntries` por nuestro propio bucle for, que nos permita decidir el resultado en cada caso.

```tsx sample6.b.course.register.tsx
const formData = new FormData(form);
const data: Record<string, FormDataEntryValue | boolean> = { ...user };

for (const [key, value] of formData) {
  if (typeof user[key as keyof typeof user] === 'boolean') {
    data[key] = value === 'on';
  }
}

return data;
```

###### Funciones auxiliares

El proceso de obtención de datos desde un HTMLFormElement o desde un FormData lo podemos encapsular en una función que reciba el formulario y devuelva un objeto con los datos del formulario.

```tsx
// sample6.b.course.register.tsx
const getDataForm = (form: HTMLFormElement, user: User): User => {
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue | boolean> = { ...user };

  for (const [key, value] of formData) {
    if (typeof user[key as keyof typeof user] === 'boolean') {
      data[key] = value === 'on';
    } else {
      data[key] = value;
    }
  }

  return data as User;
```

El problema de este método es que esta acoplado a que la entidad de los datos sea User. Usando genéricos, se puede hacer más genérica y reutilizable, incluyendo la posibilidad de recibir tanto un `HTMLFormElement` como un `FormData`.

```tsx
// sample6.b.course.register.tsx
type ValidT<T> = T extends Record<string, FormDataEntryValue | boolean>
  ? T
  : never;
const getDataForm = <T,>(form: HTMLFormElement, entity: ValidT<T>): T => {
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue | boolean> = { ...entity };

  for (const [key, value] of formData) {
    if (typeof entity[key as keyof typeof entity] === 'boolean') {
      data[key] = value === 'on';
    } else if (typeof entity[key as keyof typeof entity] === 'string') {
      data[key] = value;
    }
  }

  return data as T;
};
```

###### Formulario final RegisterForm

El formulario, finalmente será algo así:

```tsx
type Props = {
  registerUser?: (userData: Register) => Promise<void>;
};

export const RegisterForm: React.FC<Props> = ({
  registerUser = registerUserService,
}) => {
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    const form = ev.currentTarget;

    // Acceso a los datos como elementos del formulario
    const userData1 = getDataOfForm(form, userDataInitial);
    registerUser(userData1).then(() => {
      // form.reset();
      console.log('Enviado (elements): Usuario registrado');
    });

    // Acceso a los datos como FormData
    const formData = new FormData(form);
    const userData2 = getDataOfForm(formData, userDataInitial);
    registerUser(userData2).then(() => {
      form.reset();
      console.log('Enviado (formData): Usuario registrado');
    });
  };

  return (
    <Card title="Formulario de Registro">
      <form onSubmit={handleSubmit} aria-label="register-form">
        <p>Ejemplo de 'UnControlled Form'</p>

        <div className="group-control">
          <input
            type="text"
            name="userName"
            placeholder="Dime tu nombre"
            aria-label="name"
            required
            defaultValue={userDataInitial.userName}
          />
        </div>

        <div className="group-control">
          <input
            type="email"
            name="email"
            placeholder="Dime tu email"
            aria-label="email"
            required
            defaultValue={userDataInitial.email}
          />
        </div>

        <div className="group-control">
          <input
            type="password"
            name="passwd"
            placeholder="Dime tu password"
            aria-label="password"
            required
            defaultValue={userDataInitial.passwd}
          />
        </div>

        <div className="group-control">
          <input
            type="checkbox"
            name="isOkConditions"
            aria-label="conditions"
            id="cr-is-ok"
            defaultChecked={userDataInitial.isOkConditions}
          />
          <label htmlFor="is-ok">Acepto las condiciones...</label>
        </div>

        <fieldset name="turn">
          <legend>Selecciona un turno</legend>
          <input
            type="radio"
            name="turn"
            aria-label="turn"
            id="cr-turno-m"
            value="M"
          />
          <label htmlFor="turno-m">Mañana</label>
          <input type="radio" name="turn" id="cr-turno-t" value="T" />
          <label htmlFor="turno-t">Tarde</label>
          <input type="radio" name="turn" id="cr-turno-n" value="N" />
          <label htmlFor="turno-n">Noche</label>
        </fieldset>

        <label htmlFor="course">Elige un curso</label>
        <select
          name="course"
          aria-label="course"
          id="cr-course"
          defaultValue={userDataInitial.course}
        >
          <option value=""></option>
          <option value="A">Angular</option>
          <option value="R">React</option>
          <option value="N">Node</option>
        </select>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Card>
  );
};
```

##### Mock del servicio de usuario: Register

El valor por defecto de la prop `registerUser` es la función `registerUserService`, un mock de servicio que simula una llamada a un servicio de login.

```tsx
// Simula el registro de un usuario (por ejemplo, llamada a una API)
export const registerUserService = async (
  userData: Register
): Promise<void> => {
  console.log('Registrando usuario', userData);
};
```

##### 👁️‍🗨️Test del Formulario no controlado RegisterForm

Los test del formulario no controlado RegisterForm serán similares a los del formulario controlado LoginForm, comprobando que los campos del formulario se actualizan correctamente y que el envío del formulario llama a la función `manageStates` con los valores correctos. La implementación del formulario controlado o no controlado es irrelevante para los tests, que se centran en la funcionalidad del formulario.

```tsx
const mockRegisterUser = vi.fn(async () => undefined);

const mockData = {
  userName: 'John Doe',
  email: 'john@example.com',
  passwd: 'password',
  isOkConditions: true,
  turn: 'M',
  course: 'R',
};

describe('RegisterForm', () => {
  beforeEach(() => {
    render(<RegisterForm registerUser={mockRegisterUser} />);
  });

  test('should render correctly', async () => {
    const form = screen.getByRole('form', {
      name: /register-form/i,
    });
    expect(form).toBeInTheDocument();
  });

  test('should submit form with correct data', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    vi.spyOn(console, 'dir').mockImplementation(() => undefined);

    const userNameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwdInput = screen.getByLabelText(/password/i);
    const isOkConditionsInput = screen.getByRole('checkbox', {
      name: /conditions/i,
    });
    const turnInput = screen.getByRole('radio', { name: /turn/i });
    const courseInput = screen.getByRole('combobox', { name: /course/i });

    await userEvent.type(userNameInput, mockData.userName);
    await userEvent.type(emailInput, mockData.email);
    await userEvent.type(passwdInput, mockData.passwd);
    await userEvent.click(isOkConditionsInput);
    await userEvent.click(turnInput);
    await userEvent.selectOptions(courseInput, mockData.course);

    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(mockRegisterUser).toHaveBeenCalledWith(mockData);

    expect(console.log).toHaveBeenCalledWith(
      'Enviado (elements): Usuario registrado'
    );

    expect(console.log).toHaveBeenCalledWith(
      'Enviado (formData): Usuario registrado'
    );
  });
});
```

##### 👁️‍🗨️Test de las funciones auxiliares

Al usar las funciones auxiliares para obtener los datos del formulario, las hemos testado indirectamente en el test del componente RegisterForm. Pero también es conveniente testearlas de forma independiente, para asegurarnos de que funcionan correctamente en cualquier circunstancia.

Simplemente necesitamos crear un formulario de prueba como elemento HTMLFormElement con unos valores en los campos y el DataForm correspondiente, y comprobar que la función devuelve el objeto esperado.

```tsx
describe('FormTools', () => {
  const formElement = document.createElement('form');
  formElement.innerHTML = `
        <input type="text" name="username" value="test user"/>
        <input type="password" name="password" value="test pass" />
    `;

  const mockInitialData = {
    username: '',
    password: '',
  };

  const mockData = {
    username: 'test user',
    password: 'test pass',
  };

  const formData = new FormData(formElement);

  test('getDataOfForm should extract HTML form values', () => {
    const result = getDataOfForm(formElement, mockInitialData);
    expect(result).toEqual(mockData);
  });

  test('getDataOfForm should extract formdata values', () => {
    const result = getDataOfForm(formData, mockInitialData);
    expect(result).toEqual(mockData);
  });
});
```

##### 👁️‍🗨️Test del mock de servicio de usuario

Tanto desde el LoginForm como desde el RegisterForm se llama a un mock de servicio que simula una llamada a un servicio de login o registro de usuario. En los tests de los formularios hemos utilizado un mock de estas funciones para comprobar que se llaman con los parámetros correctos.

```ts
const mockRegisterUser = vi.fn(async () => undefined);
// ....
render(<RegisterForm registerUser={mockRegisterUser} />);
// ...
expect(mockRegisterUser).toHaveBeenCalledWith(mockData);
```

EL servicio en si mismo lo vamos a testar a pesar de ser una simulación que realmente no hace nada mas que mostrar la información por consola. Para ello utilizaremos otro tipo de **stub**, conocido como **spy** que nos permita espiar la llamada a la función y comprobar que se llama con los parámetros correctos.

```tsx
describe('UserService', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    vi.spyOn(console, 'dir').mockImplementation(() => undefined);
  });

  test('should register a user', async () => {
    const userData: Register = {
      userName: 'JohnDoe',
      email: 'john.doe@example.com',
      passwd: 'password123',
      isOkConditions: true,
      turn: 'M',
      course: 'R',
    };
    await registerUserService(userData);
    expect(console.log).toHaveBeenCalledWith('Registrando usuario', userData);
  });

  test('should login a user', async () => {
    const loginData: Login = {
      email: 'john.doe@example.com',
      passwd: 'password123',
      rememberMe: true,
    };
    await manageLoginService(loginData);
    expect(console.log).toHaveBeenCalledWith('Login data:', loginData);
  });
});
```

#### 👁️‍🗨️Finalmente, en resumen ... y el coverage

El resultado de los test de nuestro proyecto es el siguiente:

```shell
 ✓ src/components/user/servicio/user.service.mock.test.ts (2 tests) 16ms
 ✓ src/components/core/app/App.test.tsx (2 tests) 339ms
 ✓ src/components/counter/counter.test.tsx (4 tests) 1357ms
   ✓ Counter component > should increase after click the button with click()  597ms
   ✓ Counter component > should increase after click the button with userEvent  378ms
 ✓ src/components/core/app/App.acceptance.test.tsx (3 tests) 2255ms
   ✓ App component (acceptance test) > should render Header  772ms
   ✓ App component (acceptance test) > should render Counter  1258ms
 ✓ src/components/core/app/App.minimal.test.tsx (2 tests) 176ms
 ✓ src/components/user/login/login.form.test.tsx (4 tests) 3705ms
   ✓ Login > should show email error when email is empty  953ms
   ✓ Login > should show password error when password is empty  480ms
   ✓ Login > should submit form with valid data  2134ms
 ✓ src/components/counter2/counter.test.tsx (15 tests) 4359ms
   ✓ Counter2Buttons component > should increase after click the button ➕  774ms
   ✓ Counter2Buttons component > should decrease after click the button ➖  505ms
   ✓ CounterWithEvent1 component > should increase after click the button ➕  338ms
   ✓ CounterWithEvent1 component > should decrease after click the button ➖  451ms
   ✓ CounterWithEvent2 component > should increase after click the button ➕  373ms
   ✓ CounterWithEvent2 component > should decrease after click the button ➖  378ms
   ✓ CounterWithEvent3 component > should increase after click the button ➕  354ms
   ✓ CounterWithEvent3 component > should decrease after click the button ➖  337ms
   ✓ CounterWithEvent4 component > should increase after click the button ➕  350ms
   ✓ CounterWithEvent4 component > should decrease after click the button ➖  335ms
 ✓ src/components/core/card/card.test.tsx (2 tests) 134ms
 ✓ src/components/user/register/register.form.test.tsx (2 tests) 5450ms
   ✓ RegisterForm > should render correctly  734ms
   ✓ RegisterForm > should submit form with correct data  4711ms
 ✓ src/components/core/header/header.test.tsx (1 test) 173ms
 ✓ src/components/core/layout/layout.test.tsx (3 tests) 143ms
 ✓ src/tests/02-matchers.test.ts (16 tests) 22ms
 ✓ src/components/core/footer/footer.test.tsx (1 test) 90ms
 ✓ src/components/user/tools/form-tools.test.ts (4 tests) 21ms
 ✓ src/tests/03-errors.test.ts (2 tests) 16ms
 ✓ src/tests/01-calc.test.ts (6 tests) 9ms
```

Y el coverage global es del 100% en todas las métricas:

```shell
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |     100 |      100 |     100 |     100 |
 components/core/app      |     100 |      100 |     100 |     100 |
  App.tsx                 |     100 |      100 |     100 |     100 |
 components/core/card     |     100 |      100 |     100 |     100 |
  card.tsx                |     100 |      100 |     100 |     100 |
 components/core/footer   |     100 |      100 |     100 |     100 |
  footer.tsx              |     100 |      100 |     100 |     100 |
 components/core/header   |     100 |      100 |     100 |     100 |
  header.tsx              |     100 |      100 |     100 |     100 |
 components/core/layout   |     100 |      100 |     100 |     100 |
  layout.tsx              |     100 |      100 |     100 |     100 |
 components/counter       |     100 |      100 |     100 |     100 |
  counter.tsx             |     100 |      100 |     100 |     100 |
 components/counter2      |     100 |      100 |     100 |     100 |
  counter-2buttons.tsx    |     100 |      100 |     100 |     100 |
  counter-dataset.tsx     |     100 |      100 |     100 |     100 |
 components/user/login    |     100 |      100 |     100 |     100 |
  login.form.tsx          |     100 |      100 |     100 |     100 |
 components/user/register |     100 |      100 |     100 |     100 |
  register.form.tsx       |     100 |      100 |     100 |     100 |
 components/user/servicio |     100 |      100 |     100 |     100 |
  user-service.mock.ts    |     100 |      100 |     100 |     100 |
 components/user/tools    |     100 |      100 |     100 |     100 |
  form-tools.ts           |     100 |      100 |     100 |     100 |
--------------------------|---------|----------|---------|---------|-------------------
```
