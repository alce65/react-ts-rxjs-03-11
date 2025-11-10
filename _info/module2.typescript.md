# Módulo 2: Typescript avanzado para programación reactiva

- [Módulo 2: Typescript avanzado para programación reactiva](#módulo-2-typescript-avanzado-para-programación-reactiva)
  - [Propuesta inicial del módulo](#propuesta-inicial-del-módulo)
  - [Refinando el uso de tipos en React](#refinando-el-uso-de-tipos-en-react)
    - [Tipos de unión, intersección aplicados en componentes React](#tipos-de-unión-intersección-aplicados-en-componentes-react)
      - [Unión de tipos primitivos](#unión-de-tipos-primitivos)
        - [🧿Componente Button](#componente-button)
        - [👁️‍🗨️Test del componente Button](#️️test-del-componente-button)
      - [Unión de tipos complejos. Uniones discriminadas](#unión-de-tipos-complejos-uniones-discriminadas)
        - [🧿Componente ProfileCard](#componente-profilecard)
        - [👁️‍🗨️Test del componente ProfileCard](#️️test-del-componente-profilecard)
      - [Tipos de intersección aplicados en componentes React](#tipos-de-intersección-aplicados-en-componentes-react)
        - [🧿Componente CustomCard](#componente-customcard)
        - [👁️‍🗨️Test del componente CustomCard](#️️test-del-componente-customcard)
    - [Tipado de useState, useEffect y hooks básicos](#tipado-de-usestate-useeffect-y-hooks-básicos)
      - [useState](#usestate)
        - [Tipos never y unknown](#tipos-never-y-unknown)
          - [🧿Componente SampleUnknown](#componente-sampleunknown)
      - [Hook useEffect y el array de dependencias](#hook-useeffect-y-el-array-de-dependencias)
      - [Hook useCallback](#hook-usecallback)
        - [🧿Componente Items: sin useCallback](#componente-items-sin-usecallback)
        - [👁️‍🗨️Test del componente Items con useEffect](#️️test-del-componente-items-con-useeffect)
      - [Hook useRef: acceso a elementos del DOM](#hook-useref-acceso-a-elementos-del-dom)
        - [🧿Componente Focus](#componente-focus)
        - [👁️‍🗨️Test del componente Focus](#️️test-del-componente-focus)
      - [Paso de referencias entre componentes: forwardRef](#paso-de-referencias-entre-componentes-forwardref)
      - [La prop `ref` en React 19](#la-prop-ref-en-react-19)
    - [Tipos genéricos](#tipos-genéricos)
      - [Concepto de tipos genéricos](#concepto-de-tipos-genéricos)
        - [Genéricos en interfaces y clases](#genéricos-en-interfaces-y-clases)
        - [Restricciones con `extends`](#restricciones-con-extends)
      - [Genéricos en componentes de React](#genéricos-en-componentes-de-react)
        - [🧿Componente List mejorado](#componente-list-mejorado)
        - [👁️‍🗨️Test del componente List](#️️test-del-componente-list)
    - [Manipulación de tipos con operadores](#manipulación-de-tipos-con-operadores)
      - [Keyof y typeof: operadores de consulta de tipos (Type Queries)](#keyof-y-typeof-operadores-de-consulta-de-tipos-type-queries)
      - [Operadores de combinación (unión e intersección)](#operadores-de-combinación-unión-e-intersección)
      - [Tipos indexados (Indexed Access Types)](#tipos-indexados-indexed-access-types)
        - [Posibles claves en tipos indexados](#posibles-claves-en-tipos-indexados)
        - [Tipos indexados y Record](#tipos-indexados-y-record)
      - [Tipos mapeados (Mapped Types)](#tipos-mapeados-mapped-types)
      - [Tipos condicionales](#tipos-condicionales)
        - [Uniones discriminadas v. tipos condicionales genéricos](#uniones-discriminadas-v-tipos-condicionales-genéricos)
          - [🧿Componente User](#componente-user)
        - [Inferencia avanzada con `infer`](#inferencia-avanzada-con-infer)
      - [Otros operadores](#otros-operadores)
    - [Tipos utilitarios](#tipos-utilitarios)
      - [Awaited\<T\>](#awaitedt)
      - [Partial\<T\> y Required\<T\>](#partialt-y-requiredt)
      - [Readonly\<T\>](#readonlyt)
      - [Pick\<T, K\> y Omit\<T, K\>](#pickt-k-y-omitt-k)
      - [Record\<K, T\>](#recordk-t)
      - [Extract\<T, U\> y Exclude\<U, T\>](#extractt-u-y-excludeu-t)
      - [NonNullable\<T\>](#nonnullablet)
      - [ReturnType\<T\>](#returntypet)
  - [Tipado de flujos asíncronos](#tipado-de-flujos-asíncronos)
    - [Tipos genéricos y su aplicación en flujos](#tipos-genéricos-y-su-aplicación-en-flujos)
      - [Contratos tipados para funciones reactivas y streams](#contratos-tipados-para-funciones-reactivas-y-streams)
      - [Promesas](#promesas)
      - [Observables](#observables)
    - [Tipos condicionales aplicados a flujos de datos](#tipos-condicionales-aplicados-a-flujos-de-datos)
  - [Manejo de errores en flujos asíncronos](#manejo-de-errores-en-flujos-asíncronos)
    - [Errores asíncronos en promesas](#errores-asíncronos-en-promesas)
    - [Errores asíncronos en observables](#errores-asíncronos-en-observables)
    - [Modelado de errores con tipos literales y unions (sin try/catch)](#modelado-de-errores-con-tipos-literales-y-unions-sin-trycatch)
    - [Tipado de errores específicos](#tipado-de-errores-específicos)
    - [Estrategias de manejo de errores](#estrategias-de-manejo-de-errores)

## Propuesta inicial del módulo

- Refinando el uso de tipos en React
  - Uso avanzado de tipos en componentes funcionales
    - Uso de React.FC y tipado de props
    - Tipado de eventos y hooks en React con TypeScript
- Tipos avanzados en programación reactiva
- Uso de Promise, Observable y otros tipos para flujos de datos
- Tipado para operaciones asíncronas: async, await, y flujos de datos reactivos
- Manejo de errores en flujos asíncronos con TypeScript

## Refinando el uso de tipos en React

### Tipos de unión, intersección aplicados en componentes React

Unión (|): permite que una variable tenga más de un tipo.
Intersección (&): combina varios tipos en uno solo.

#### Unión de tipos primitivos

La unión de tipos puede utilizarse con literales primitivos o con tipos más complejos, como objetos o arrays.

##### 🧿Componente Button

En el primero de los casos, la unión de tipos es útil para definir props que solo pueden aceptar un conjunto limitado de valores.

Como en el siguiente ejemplo, donde se define un tipo `ButtonVariant` que puede ser "primary" o "secondary", y un tipo `Size` que puede ser "small", "medium" o "large".

```tsx
// sample1.buttons.tsx
type ButtonVariant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

type BaseProps = {
  variant: ButtonVariant;
  size: Size;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type Props = PropsWithChildren<BaseProps>;

export const Button: React.FC<Props> = ({
  variant,
  size,
  onClick,
  children,
}): JSX.Element => {
  return (
    <Card>
      <button className={`btn ${variant} ${size}`} onClick={onClick}>
        {children}
      </button>
    </Card>
  );
};
```

En el ejemplo anterior, el componente `Button` acepta props `variant` y `size` que son de tipo `ButtonVariant` y `Size`, respectivamente. Esto significa que solo se pueden pasar los valores definidos en esos tipos.

##### 👁️‍🗨️Test del componente Button

Comprobamos que:

- el componente se renderiza correctamente con las props adecuadas,
- el manejador de eventos onClick se llama correctamente al hacer click en el botón. Para ello hemos creado un mock de la función onClick usando `vi.fn()`.

```tsx
// sample1.button.test.tsx
describe('sample1.buttons component (vitest)', () => {
  const mockHandler = vi.fn().mockImplementation(() => {
    console.log('Clicked button');
  });

  beforeEach(() => {
    // Configuración previa a cada test si es necesario
    render(
      <Button variant="primary" size="medium" onClick={mockHandler}>
        Primary Button
      </Button>
    );
  });

  test('renders a primary medium button', () => {
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn primary medium');
  });

  test('button click calls onClick handler', () => {
    const button = screen.getByRole('button', { name: /primary button/i });
    button.click();
    expect(mockHandler).toHaveBeenCalled();
  });
});
```

#### Unión de tipos complejos. Uniones discriminadas

El mismo principio se puede aplicar a cualquier tipo más complejo, por ejemplo definiendo las props como la unión de varios tipos objeto.

##### 🧿Componente ProfileCard

```tsx
// sample2.profile.tsx
// Tipos para las distintas formas del perfil
type AdminProfile = {
  type: 'admin';
  name: string;
  permissions: string[];
};

type UserProfile = {
  type: 'user';
  name: string;
  email: string;
};

// Unión de tipos para la prop
type ProfileProps = {
  profile: AdminProfile | UserProfile;
};
```

En el componente `ProfileCard`, se puede usar el tipo `ProfileProps` para definir la prop `profile`, que puede ser de tipo `AdminProfile` o `UserProfile`. Esto permite que el componente acepte diferentes tipos de perfiles y maneje cada uno de ellos de manera diferente.

```tsx sample7.profile.tsx
const ProfileCard: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <Card title={profile.name}>
      {profile.type === 'admin' ? (
        <div>
          <strong>Permisos:</strong>
          <List items={profile.permissions} />
          {/* <ul>
            {profile.permissions.map((perm, index) => (
                <li key={index}>{perm}</li>
            ))}
          </ul> */}
        </div>
      ) : (
        <p>Email: {profile.email}</p>
      )}
    </Card>
  );
};
```

Al recibir la prop del tipo union, solo las propiedades comunes serían accesibles, como `name`, y el resto de propiedades específicas de cada tipo solo serían accesibles si se hace una **guarda de tipos**. Al haber definido un propiedad que diferencia cada uno de los tipos que participan en la unión (`profile.type`) la guarda en base a esa propiedad da lugar a una técnica conocida como **uniones discriminadas**, donde un tipo literal de un elemento compartido por varios tipos participantes en una unión se usa como discriminador para determinar el tipo de otros elementos.

Combinando esto con el **renderizado condicional** re React, se pueden mostrar diferentes elementos en función del tipo de perfil que se recibe como prop.

Para generar la lista de permisos, usamos un componente `List` genérico que acepte un array de cualquier tipo y renderice cada elemento utilizando una función de renderizado proporcionada como prop. Más adelante veremos como crear este componente al hablar de genéricos.

##### 👁️‍🗨️Test del componente ProfileCard

En el test del componente `ProfileCard`, comprobamos que:

- el componente se renderiza correctamente con un perfil de administrador
- el componente se renderiza correctamente con un perfil de usuario

En cada caso con sus propiedades específicas, accesibles gracias a la guarda de tipos basada en la propiedad discriminadora `type`.

```tsx
// sample2.profile.test.tsx
describe('sample2.profile component', () => {
  const mockProfile1: AdminProfile = {
    type: 'admin',
    name: 'Pepe',
    permissions: ['All'],
  };
  const mockProfile2: UserProfile = {
    type: 'user',
    name: 'Maria',
    email: 'maria@example.com',
  };

  beforeEach(() => {
    render(<ProfileCard profile={mockProfile1} />);
  });

  describe('Using an Admin Profile', () => {
    test('renders profile name', () => {
      const name = screen.getByRole('heading', { name: /pepe/i });
      expect(name).toBeInTheDocument();
    });

    test('renders profile permissions', () => {
      const permissions = screen.getByText(/all/i);
      expect(permissions).toBeInTheDocument();
    });
  });

  describe('Using a User Profile', () => {
    beforeEach(() => {
      render(<ProfileCard profile={mockProfile2} />);
    });

    test('renders profile name', () => {
      const name = screen.getByRole('heading', { name: /maria/i });
      expect(name).toBeInTheDocument();
    });

    test('renders profile email', () => {
      const email = screen.getByText(/maria@example.com/i);
      expect(email).toBeInTheDocument();
    });
  });
});
```

#### Tipos de intersección aplicados en componentes React

Como ya hemos visto, se puede usar el operador de intersección `&` para combinar varios tipos en uno solo. Esto es útil cuando se quiere crear un tipo que combine varias propiedades de diferentes tipos, incluyendo todas las propiedades de los tipos que se combinan.

##### 🧿Componente CustomCard

Esto es muy útil para reutilizar estructuras y extender props en componentes complejos. Esta extensión de un tipo base es igual que la que conseguiríamos con los interfaces heredando (`extends`) de otros interfaces, pero con la ventaja de que se pueden combinar tipos de diferentes formas, no solo objetos.

Así por ejemplo podemos crear una versión personalizable del componente Card que venimos usando en los ejemplos, añadiendo propiedades de estilo y otras propiedades comunes.

```tsx
// sample3.card.tsx
type BaseProps = {
  id: string;
  visible: boolean;
  children: React.ReactNode;
};

type StyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

type ComponentProps = BaseProps & StyleProps;

const CustomCard: React.FC<ComponentProps> = ({
  id,
  visible,
  className,
  style,
  children,
}) => {
  if (!visible) return null;

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};
```

Aquí ComponentProps hereda todas las propiedades de BaseProps y StyleProps. Esto es más limpio que redefinirlas todas a mano y mejora la reutilización de tipos.

Como ya hemos visto, un alternativa sería la extensión de interfaces, que permite crear un nuevo tipo a partir de otro, heredando todas las propiedades del tipo base.

```tsx sample8.card.tsx
interface BaseProps {
  id: string;
  visible: boolean;
  children: React.ReactNode;
}
interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}
interface ComponentProps extends BaseProps, StyleProps {}
```

##### 👁️‍🗨️Test del componente CustomCard

Comprobamos que:

- el componente se renderiza correctamente. Accedemos al elemento parent del contenido y comprobamos que tiene las props adecuadas,
- el componente maneja correctamente los cambios en las props, mostrando u ocultando el contenido según el valor de la prop `visible`.

```tsx
describe('CustomCard', () => {
  test('renders children when visible', () => {
    render(
      <CustomCard id="card1" visible={true}>
        <p>Card Content</p>
      </CustomCard>
    );

    const cardContent = screen.getByText('Card Content');
    const card = cardContent.parentElement;
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('id', 'card1');
  });

  test('does not render when not visible', () => {
    render(
      <CustomCard id="card1" visible={false}>
        <p>Card Content</p>
      </CustomCard>
    );

    const cardContent = screen.queryByText('Card Content');
    expect(cardContent).not.toBeInTheDocument();
  });
});
```

### Tipado de useState, useEffect y hooks básicos

(Los hooks personalizados se tratarán en el módulo 3: hooks avanzados)

#### useState

Como ya hemos visto, `useState<T>()` permite utilizar genéricos para definir el tipo explícitamente, aunque TypeScript lo puede inferir a partir del valor inicial. Es es recomendable cuando

- el valor inicial es `undefined` o `null`,
- el tipo inicial no es primitivo y el tipo debe corresponder a un tipo nombrado.

Por ejemplo, si tienes un estado que es un objeto inicialmente inexistente, puedes definirlo así:

```tsx
const [count, setCount] = useState<User | undefined>();
const [count, setCount] = useState<User | null>(null);
```

En caso de que el estado sea un array inicialmente vacío, puedes definirlo así:

```tsx
const [count, setCount] = useState<User[]>([]);
```

De esta forma el array se inicializa como vacío, pero el tipo de los elementos del array es `User`, y no `never`.

##### Tipos never y unknown

Si se proporciona un array vacío como valor inicial, TypeScript infiere el tipo como `never[]`, lo que puede causar problemas si se intenta añadir elementos de un tipo específico al array.

```tsx
// sample4.state.tsx
const [items, setItems] = useState([]); // items es inferido como never[]
setItems([{ id: 1, name: 'Item 1' }]);

useEffect(() => {
  //@ts-expect-error El tipo 'string' no se puede asignar al tipo 'never'.
  // Error: Type '{ id: number; name: string; }' is not assignable to type 'never'.
  setState(['Pepe', 'Luis', 'Juana']);
}, []);
```

###### 🧿Componente SampleUnknown

En caso de que fuera imposible conocer a priory el tipo de los elementos del array, el tipo de `useState` podría ser `unknown[]`, pero esto no es recomendable, ya que

- permite asignar al estado cualquier tipo de valor, lo que puede llevar a errores en tiempo de ejecución,
- no permite utilizar loas valores del array sin un casting (aserción) de tipo previo.

```tsx sample9.1.state.tsx
// sample4.state
const [items, setItems] = useState<unknown[]>([]);
useEffect(() => {
  // Simulate a state change
  setState(['Pepe', 'Luis', 'Juana']);
}, []);

return (
  <div>
    <h1>Sample 9.1</h1>
    <p>State management with useState</p>
    <p>{state.length}</p>
    <ul>
      {state.map((item, index) => (
        <li key={index}>{item as string}</li>
      ))}
    </ul>
  </div>
);
```

Al intentar usar los elementos del array, es necesario hacer un casting a `string`, ya que TypeScript no sabe el tipo real de los elementos del array.

````tsx


#### useEffect

useEffect no necesita tipado explícito, pero el uso interno debe ser coherente con los tipos de estado y props.
Por ejemplo, si tienes un efecto que depende de un estado de tipo `number`, asegúrate de que el efecto maneje correctamente ese tipo.

```tsx
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount((c) => c + 1)}>Clicks: {count}</button>
  );
};
````

#### Hook useEffect y el array de dependencias

El hook useEffect con un array de dependencias vacío se ejecuta solo una vez al montar el componente, y no se vuelve a ejecutar a menos que cambie el valor de alguna de las variables del array.

Uno de sus usos es para cargar datos al montar el componente, ejecutando una llamada a una función asíncrona que cargue los datos. Como ya sabemos, el acceso a los datos externos a la aplicación debería estar encapsulado en una capa independiente, que puede ser un servicio, o un hook personalizado.

En cualquiera de los casos, el componente importará desde un módulo externo o recibirá como prop una función que cargue los datos. Dicha función será asíncrona, ya que normalmente implicará una llamada a una API externa o a una base de datos y por tanto devolverá una promesa.

En el modo async/await no podrá usarse directamente en el callback del useEffect, que no puede ser asíncrono, por lo que habrá que definir una función asíncrona interna que se llame desde el efecto.

```tsx
export const Items: React.FC = ({ getData }) => {
    const [items, setItems] = useState<Item[]>([]);

    const loadData = async (): Promise<void> => {
      // Lógica para cargar datos
        const data = await getData();
        setItems(data);
      };

    useEffect(() => {
      loadData();
    }, []);
}};
```

Usando then/catch, podemos definir el efecto directamente:

```tsx
export const Items: React.FC = ({ getData }) => {
    const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);
```

En caso de crear una función `loadData` dentro del componente, se produce un problema: si se incluye en el efecto una llamada a una función que directa o indirectamente sea una dependencia del componente, por llegar como prop, desde el contexto o desde un hook, es necesario añadirla al array de dependencias.

En este caso, `loadData` llama a la función `getData`, una función que se pasa como prop, por lo que sería necesario incluir a la primera (`loadData`) en el array de dependencias. Así nos lo indica el Linter de React:

```linter
React Hook useEffect has a missing dependency: 'loadData'. Either include it or remove the dependency array.
```

El problema es doble:

- si no se incluye, es que la función `loadData` no se volverá a ejecutar si cambia el valor de `getData`, y por tanto no se cargarán los nuevos datos.

- si se incluye, el efecto se ejecutará cada vez que cambie el valor de `getData`, lo que puede ser innecesario y provocar **bucles infinitos**.

  - Cuando se reciben los datos, se actualiza el estado con setItems
  - Esto provoca una nueva renderización del componente, es decir que se ejecuta la función del componente de nuevo
  - La función recibe una nueva referencia de la función `getData`, aunque sea la misma función
  - El useEffect lo detecta así y vuelve a ejecutar el componente, que recibe un nuevo objeto `getData`, y así sucesivamente.

Si incluimos la función en el array de dependencias, el linter nos avisa del problema y nos sugiere la solución.

```linter
The 'loadData' function makes the dependencies of useEffect Hook (at line 26) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'loadData' in its own useCallback() Hook
```

#### Hook useCallback

La solución es envolver la función `loadData` en un `useCallback`, que se encargará de 'memoizar' (memoize) la función y evitar que cambie su referencia, a menos que cambien las dependencias del callback.

```tsx
const loadData = useCallback(async (): Promise<void> => {
  // Lógica para cargar datos
  const data = await getData();
  setItems(data);
}, [getData]);
```

Al estar `getData` en el array de dependencias del `useCallback` se repite el problema con esta segunda función, que también deberá 'memoizarse' con un nuevo useCallback para evitar que cambie su referencia, a menos que cambien las dependencias del callback.

```tsx
const getData = useCallback(async (): Promise<Item[]> => {
  // Lógica para cargar datos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
    }, 1000);
  });
}, []);
```

##### 🧿Componente Items: sin useCallback

las soluciones alternativa sin necesitar usar useCallback son

- es definir la función asíncrona `loadData` dentro del useEffect, para que no se detecte como una dependencia y no haya que incluirla en el array de dependencias.
- usar then/catch directamente en el useEffect, sin definir una función asíncrona intermedia.

En ambos casos, el efecto tendrá como dependencia el valor de `getData`, por lo que se ejecutará solo una vez al montar el componente, y no habrá problemas de dependencias ni bucles infinitos.

```tsx
type Props = {
  getData: () => Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ getData }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      // Lógica para cargar datos
      const data = await getData();
      setItems(data);
    };

    loadData();
  }, [getData]);

  return <div>Items number: {items.length}</div>;
};
```

Para utilizar el componente en estas circunstancia, creamos un wrapper, como si fuera la página y un servicio que proporciona la función `getData`.

```tsx
import { getData } from './items-service';

export const ItemsWrapper: React.FC = () => {
  return (
    <Card title="Items">
      <Items getData={getData}></Items>;<ItemsA getData={getData}></ItemsA>;
    </Card>
  );
};
```

```ts
export type Item = {
  id: number;
};

export const getData = async (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
    }, 1000);
  });
};
```

##### 👁️‍🗨️Test del componente Items con useEffect

El test del componente `Items` comprueba que:

- Se llama a la función `getData` al montar el componente.
- Se actualiza el estado `items` con los datos devueltos por `getData`.
- Se renderiza el número correcto de items en el componente.

Como ya vimos, podemos usar `findByText` para esperar a que se renderice el número de items después de cargar los datos, pero en este caso usaremos `waitFor`, que permite esperar a que se cumpla una condición específica.

```tsx
test('should render itemsA after loading data (using waitFor)', async () => {
  render(<Items getData={getData} />);

  // Verificar que inicialmente no hay items
  const itemsNumber = screen.getByText(/items number/i);
  expect(itemsNumber).toBeInTheDocument();
  expect(itemsNumber).toHaveTextContent('0');

  // Esperar a que se carguen los datos
  await waitFor(() => {
    expect(itemsNumber).toHaveTextContent('3');
  });
});
```

El servicio `getData` original ya es de por si un mock que se ha simulado para devolver 3 items después de un retardo de 1 segundo. Por tanto no es necesario crear un mock adicional en el test.

#### Hook useRef: acceso a elementos del DOM

El hook `useRef` permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente. Se utiliza principalmente para acceder a elementos del DOM o para almacenar valores mutables que no causan una re-renderización cuando cambian. En este segundo uso ya lo vimos en el módulo anterior, al crear el componente con debounce y abortController.

Veremos ahora como el hook `useRef` permite acceder a elementos del DOM directamente, sin necesidad de usar `document.querySelector` o `document.getElementById`. Se utiliza para obtener una referencia a un elemento y manipularlo directamente.

Cuando se usa como referencia a un elemento del DOM, el tipo de `useRef` utiliza el tipo genérico pare definir que elemento HTML concreto va a referenciar. Además es necesario inicializarlo como `null` para evitar errores de referencia.

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

En otros casos, el tipo de `useRef` es `React.RefObject<T>`, donde `T` es el tipo del elemento al que se hace referencia. Por ejemplo, si se quiere referenciar un input, el tipo sería `HTMLInputElement`.

Existe una forma alternativa de crear una referencia, usando una función que no es un hook, pero es menos habitual

```tsx
const inputRef = React.createRef<HTMLInputElement>();
```

Una vez creada la referencia, se puede asignar a un elemento del DOM utilizando la propiedad `ref` del elemento. Esto permite acceder al elemento directamente y manipularlo.

```tsx
<input ref={inputRef}>
```

##### 🧿Componente Focus

Como ejemplo, se puede crear un componente que enfoca un input al hacer clic en un botón. El componente utiliza `useRef` para referenciar el input y un `handle` para enfocar el input cuando se hace click en el botón.

```tsx
export const FormFocus: React.FC = () => {
  // const inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (): void => {
    // Enfocar el input
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert('Form submitted');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={inputRef} // Referencia al input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={focusInput}>
          Focus
        </button>
      </form>
    </Card>
  );
};
```

##### 👁️‍🗨️Test del componente Focus

En el test del componente `FormFocus`, comprobamos que:

1. El input de nombre recibe el foco al hacer clic en el botón "Focus".
2. Se muestra una alerta con el mensaje "Form submitted" al enviar el formulario.

```tsx
describe('FormFocus', () => {
  beforeEach(() => {
    // Mock de window.alert
    vi.spyOn(window, 'alert').mockImplementation(() => undefined);
    render(<FormFocus />);
  });

  afterEach(() => {
    // Limpiar los mocks después de cada test
    vi.clearAllMocks();
  });

  test('should focus input on mount', async () => {
    const focusButton = screen.getByRole('button', { name: /focus/i });
    await userEvent.click(focusButton);
    const inputElement = screen.getByLabelText('Name');
    expect(inputElement).toHaveFocus();
  });

  test('should submit form without focusing input', async () => {
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    expect(window.alert).toHaveBeenCalledWith('Form submitted');
  });
});
```

#### Paso de referencias entre componentes: forwardRef

El problema se produce cuando tenemos un componente hijo que tiene que recibir una referencia de un componente padre. En este caso, el componente hijo no puede recibir la referencia directamente, ya que no es un elemento del DOM. Para solucionar esto, se utiliza `forwardRef`, que permite pasar la referencia al componente hijo.

Veamos un ejemplo con un componente `Input` que recibe una referencia y la pasa a un elemento `input` dentro de su implementación. El componente padre puede crear la referencia y pasarla al componente hijo.

```tsx
import React, { forwardRef, useRef } from 'react';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// type InputProps ={
//     name: string;
//     // id?: string;
//     // value?: string;
//     // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     // onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
//     // onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
//     // placeholder?: string;
//     // className?: string;
//     // style?: React.CSSProperties;
// };

const Input = forwardRef<HTMLInputElement, InputProps>(({ name }, ref) => {
  return (
    <input
      ref={ref} // Referencia al input
      type="text"
      id="fc2-name"
      name={name}
    />
  );
});
```

El tipado de `InputProps` es el mismo que el de un elemento `input`, pero se puede personalizar para incluir solo los props que se necesiten. En este caso, en los comentarios, se ha dejado solo el `name`, pero se pueden añadir más props según sea necesario.

El tipado genérico de `forwardRef` es `forwardRef<T, P>`, donde `T` es el tipo del elemento al que se hace referencia y `P` son los props del componente. Curiosamente al revés de como se reciben los parámetros. En este caso, el tipo de referencia es `HTMLInputElement` y el tipo de props es `InputProps`.

Desde el componente padre, se puede crear una referencia y pasarla al componente hijo. El componente padre puede crear la referencia y pasarla al componente hijo.

```tsx
export const FormFocusDS: React.FC = () => {
  // const inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (): void => {
    // Enfocar el input
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <Input name="name" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={focusInput}>
        Focus
      </button>
    </form>
  );
};
```

#### La prop `ref` en React 19

En React 19, se a añadido la prop `ref`, que se puede usar directamente en componentes funcionales sin necesidad de `forwardRef`.

```tsx
const Input: React.FC<InputProps> = ({ name, ref }) => {
  return (
    <input
      ref={ref} // Referencia al input
      type="text"
      id="fc3-name"
      name={name}
    />
  );
};
```

### Tipos genéricos

#### Concepto de tipos genéricos

Los **genéricos** permiten crear componentes que pueden trabajar con **múltiples tipos de datos** sin perder la seguridad de tipos.

Los **genéricos** son esenciales para crear flujos **reutilizables y seguros** y constituyen la base para el tipado fuerte en **programación reactiva** con TypeScript.

Veamos un ejemplo básico en una función genérica:

```ts
function identity<T>(value: T): T {
  return value;
}

let num = identity(42); // T es number
let text = identity('Hola'); // T es string
```

Usar genéricos en una función no significa tener que explicitarlos cunado luego se invoca; aquí `T` es un **parámetro de tipo** que se infiere automáticamente. El compilador mantiene el tipo de retorno coherente con el tipo de entrada.

Sin embargo, hay que recordar que si fueran `const` las variables, el tipo inferido sería el literal.

En el caso de arrow functions, la sintaxis es similar:

```ts
const identity = <T>(value: T): T => {
  return value;
};
```

En ficheros tsx puede ser necesario añadir una coma después del parámetro genérico para evitar ambigüedades con el JSX:

```ts
const identity = <T>(value: T): T => {
  return value;
};
```

##### Genéricos en interfaces y clases

Los genéricos en OOP permiten crear estructuras reutilizables, seguras y fuertemente tipadas.

Ejemplo de interfaz genérica:

```ts
interface DataObject<T> {
  value: T;
}

const dataString: DataObject<string> = { value: 'Texto' };
const dataNumber: DataObject<number> = { value: 123 };
```

Un ejemplo más realista puede ser la definición del interfaz de los repositorios que manejan datos de distintos tipos:

```ts
interface Repository<T> {
  getAll: () => T[];
  getById: (id: string) => T | null;
  save: (item: T) => void;
  update: (id: string, item: T) => void;
  delete: (id: string) => void;
}
```

Ejemplo de clase genérica:

```ts
class Container<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  get(): T {
    return this.content;
  }
}

const container1 = new Container<boolean>(true);
const container2 = new Container(true);
```

Al tener una clase genérica, el tipo se define al instanciarla, y todos los métodos mantienen la coherencia de tipos.

Como en todos los genéricos, el tipo puede ser inferido automáticamente si se proporciona un valor inicial.

##### Restricciones con `extends`

Extends es un operador de restricción, equivalente a una intersección de tipos (&), que limita los tipos que se pueden usar como argumentos genéricos.

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength('Hola'); // OK (string tiene length)
getLength([1, 2, 3]); // OK (array también)
getLength(123); // ❌ Error (number no tiene length)
```

Esto es útil cuando definimos flujos que solo deben aceptar datos con ciertas propiedades.

Por ejemplo, en el interface de repositorio que definíamos antes, podemos restringir `T` a objetos que tengan un `id`.

```ts
interface Repository<T extends { id: string | number }> {
  getAll: () => T[];
  getById: (id: T['id']) => T | null;
  save: (item: T) => void;
  update: (id: T['id'], item: T) => void;
  delete: (id: T['id']) => void;
}
```

Al haber aplicado la restricción podemos usar la expresión `T['id']` para referirnos al tipo de esa propiedad. Es lo que se conoce como **index access types** o tipos de acceso por índice.

#### Genéricos en componentes de React

Los genéricos en componentes de React permiten crear componentes reutilizables que pueden manejar diferentes tipos de datos sin perder la seguridad de tipos.

Ejemplo de un componente genérico:

```tsx
import React from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

const List = <T,>({ items, renderItem }: ListProps<T>): JSX.Element => {
  return (
    <ul>
      {items.map((item) => (
        <li key={String(item.id)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
```

En este ejemplo, `List` es un componente genérico que acepta una lista de elementos de tipo `T` y una función `renderItem` para renderizar cada elemento. El tipo `T` se define al usar el componente.

Este componente puede hacerse más restringido si se añade una restricción para `T`, por ejemplo, que tenga una propiedad `id` para usarla como clave en el renderizado:

```tsx
import React from 'react';

type ListProps<T extends { id: string | number }> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

const List = <T extends { id: string | number }>({
  items,
  renderItem,
}: ListProps<T>): JSX.Element => {
  return (
    <ul>
      {items.map((item) => (
        <li key={String(item.id)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
```

##### 🧿Componente List mejorado

Por contra podría ser más flexible si:

- renderItem fuera opcional y se usara un renderizado por defecto
- no se restringiera `T` a tener una propiedad `id`,
- otro método opcional generara las claves de los elementos del array, usando id si existe o el índice del array si es necesario, aunque esto podría afectar el rendimiento.

```tsx
type ListProps<T> = {
  items: T[];
  renderItem?: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
};

// Guard para detectar si un valor tiene una propiedad `id` de tipo string|number
const hasId = (item: unknown): item is { id: string | number } => {
  if (item == null || typeof item !== 'object') return false;
  const id = (item as Record<string, unknown>)['id'];
  return typeof id === 'string' || typeof id === 'number';
};

export const List = <T,>({
  items,
  renderItem,
  keyExtractor,
}: ListProps<T>): JSX.Element => {
  const defaultKeyExtractor = (item: T, index: number): string | number => {
    return hasId(item) ? (item.id as string | number) : index;
  };

  const getKey = keyExtractor ?? defaultKeyExtractor;
  const render = renderItem ?? ((item: T): ReactNode => item as ReactNode);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={String(getKey(item, index))}>{render(item, index)}</li>
      ))}
    </ul>
  );
};
```

La función `hasId` es una guarda de tipos que permite verificar si un elemento tiene una propiedad `id` de tipo `string` o `number`.

- La guardia de tipos es una función que devuelve un valor booleano y se usa para **restringir** el tipo de una variable en función de una **condición**.
- El operador `is` se usa para definir la función como guardia de tipos en TypeScript y le indica al compilador que tipo debe inferir en caso de que el valor devuelto sea `true`. En esta caso si se evalúa a true, el tipo de `item` será `{ id: string | number }`.

Esto permite usar esa propiedad como clave en el renderizado si existe, o usar el índice del array como clave en caso contrario.

##### 👁️‍🗨️Test del componente List

En los test de un componente genérico, igual que al usarlo en una aplicación particularizaremos su tipo genérico a un tipo concreto. Esto no implica que sea necesario indicarlo explícitamente, sino que si TypeScript puede inferirlo a partir de los props, lo hará automáticamente.

En los test del componente `List`, comprobamos que:

- Se renderizan los elementos de la lista correctamente.
- Se utilizan las claves adecuadas para cada elemento.
- Se aplica el renderizado por defecto si no se proporciona `renderItem`.

En un primer test, usamos el componente `List` con un array de strings y comprobamos que se renderizan correctamente los elementos sin necesidad de proporcionar una función `renderItem`.

```tsx
import { render, screen } from '@testing-library/react';
import { List } from './List';

describe('List', () => {
  test('renders list items with default renderItem and keyExtractor', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(<List items={items} />);

    items.forEach((item) => {
      const listItem = screen.getByText(item);
      expect(listItem).toBeInTheDocument();
    });
  });
});
```

En una segunda prueba, usamos el componente `List` con un array de objetos que tienen una propiedad `id`, y proporcionamos una función `renderItem` personalizada para renderizar cada elemento.

```tsx
test('renders list items with custom renderItem and keyExtractor', () => {
  type Item = { id: number; label: string };
  const items: Item[] = [
    { id: 1, label: 'Custom Item 1' },
    { id: 2, label: 'Custom Item 2' },
  ];

  const customRenderItem = (item: Item): JSX.Element => (
    <span>{item.label}</span>
  );
  const customKeyExtractor = (item: Item): number => item.id;

  render(
    <List
      items={items}
      renderItem={customRenderItem}
      keyExtractor={customKeyExtractor}
    />
  );

  items.forEach((item) => {
    const listItem = screen.getByText(item.label);
    expect(listItem).toBeInTheDocument();
  });
});
```

### Manipulación de tipos con operadores

Antes de continuar con otros tipos avanzados en TypeScript, es importante recordar los operadores que proporciona typeScript para manipular tipos:

#### Keyof y typeof: operadores de consulta de tipos (Type Queries)

Estos operadores permiten crear **Type Queries**, para construir tipos basados en valores existentes en tiempo de compilación.

- `typeof`: obtiene el tipo de una variable o expresión. Por ejemplo, `typeof variable` devuelve el tipo de `variable`.

Es como el operador estándar `typeof` de JavaScript, pero en el contexto de tipos.

```ts
const x = 10;
type XType = typeof x; // number
```

- `keyof T`: obtiene las claves de un tipo T como una unión de cadenas. Por ejemplo, `keyof { a: number; b: string }` devuelve `'a' | 'b'`.

keyof crea una unión literal de las claves de una interface o tipo

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = 'name';
```

La combinación de `keyof` y `typeof` es muy útil para trabajar con tipos dinámicos basados en objetos existentes.

Partiendo de un objeto, podemos obtener su tipo "al vuelo" usando `typeof`, y luego obtener las claves de ese tipo usando `keyof`. Es posible combinar ambos en una sola expresión.

Por ejemplo:

```ts
const person = {
  name: 'Alice',
  age: 30,
};
type PersonKeys = keyof typeof person; // 'name' | 'age'
```

Las type queries son muy útiles cuando se combinan con las utilidades de tipos, que permiten obtener un tipo complejo a partir de otro. Por ejemplo, a partir de una función podemos extraer el tipo de sus parámetros o su tipo de retorno.

```ts
const makeQuery = (
  _url: string,
  _opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type MParams = Parameters<typeof makeQuery>; // [string, { method?: string | undefined; headers?: { [key: string]: string; } | undefined; body?: string | undefined; }?]
type MReturnType = ReturnType<typeof makeQuery>; // void
```

#### Operadores de combinación (unión e intersección)

- `T & U`: crea un nuevo tipo que es la intersección de los tipos T y U.
- `T | U`: crea un nuevo tipo que es la unión de los tipos T y U.

Ya hemos visto numerosos ejemplos de estos operadores en componentes de React.

#### Tipos indexados (Indexed Access Types)

- `T[K]`: accede al tipo de la propiedad K de un tipo T.

Permiten extraer el tipo de un miembro de una interface o tipo.
Se basa en el uso de la notación [] de los objetos aplicada a los tipos

Por ejemplo, si `T` es `{ a: number; b: string }`, entonces `T['a']` es `number`.

Es muy habitual usarla para referirse a tipos de propiedades dentro de tipos genéricos. Por ejemplo en el caso del id:

```ts
interface Entity {
  id: string | number;
  name: string;
}

type EntityId = Entity['id']; // string | number
```

Se pueden utilizar junto a otros operadores, como keyof o la unión de tipos, para crear tipos más complejos.

```ts
interface TextVariants {
  primary: 'black';
  secondary: 'grey';
  danger: 'red';
}

type PrimaryColor = TextVariants['primary']; // 'black'

type NoDangerColor = TextVariants['primary' | 'secondary']; // 'black' | 'grey'

type Color = TextVariants[keyof TextVariants]; // 'black' | 'grey' | 'red'
```

También se pueden utilizar en eln cso de arrays y tuplas:

```ts
type Letters = ['a', 'b', 'c']; // tupla de 3 elementos

type AorB = Letters[0 | 1]; // 'a' | 'b'

type Letter = Letters[number]; // 'a' | 'b' | 'c'
```

Se pueden anidar tipos indexados, como en el siguiente ejemplo.

```ts
interface UserRoleConfig {
  user: ['view', 'create', 'update'];
  admin: ['view', 'create', 'update', 'delete'];
}

export type Actions = UserRoleConfig[keyof UserRoleConfig][number];
```

##### Posibles claves en tipos indexados

- No pueden ser directamente variables de tipo string
- Pero si sus tipos

```ts
interface TextVariants {
  primary: 'black';
  secondary: 'grey';
  danger: 'red';
}

export const keyTV = 'primary';

export type Primary1 = TextVariants['primary'];

// @ts-expect-error -- El tipo 'string' no se puede usar como tipo de índice
export type Primary2 = TextVariants[key];
// El tipo 'key' no se puede usar como tipo de índice

export type Primary3 = TextVariants[typeof keyTV];
```

##### Tipos indexados y Record

Los tipos indexados permiten definir objetos dinámicos, como pares clave valor, indicando

- el tipo de la clave, que puede limitarse a un conjunto específico de valores
- el tipo del valor, que puede ser cualquier tipo

```ts
const numbers: { [K: string]: string } = {
  uno: '1',
  dos: '2',
};
```

Si el conjunto de claves es limitado, se puede usar una unión de literales para definir las claves y el operador in para acceder a ellas:

```ts
type TextVariants = 'primary' | 'secondary' | 'danger';

const colors: { [K in TextVariants]: string } = {
  primary: 'black',
  secondary: 'grey',
  danger: 'red',
};
```

En cualquiera de los casos, una regla de eslint nos sugiere usar el tipo `Record` en lugar de definir el tipo manualmente.

El tipo `Record<K, T>` permite crear un objeto cuyas claves son de tipo K y cuyos valores son de tipo T. Es una forma de mapear un conjunto de claves a un tipo específico.

```ts
const numbersRecord: Record<string, string> = {
  uno: '1',
  dos: '2',
};

type TextVariants = 'primary' | 'secondary' | 'danger';
const colors: Record<TextVariants, string> = {
  primary: 'black',
  secondary: 'grey',
  danger: 'red',
};
```

#### Tipos mapeados (Mapped Types)

Permiten reutilizar tipos ya creado y crear modelos partiendo de los existentes

Su potencial radica en poder inferir valores a nuevos tipos para reutilizarlos

Disponemos del siguiente operador

- `in`: itera sobre las propiedades de un tipo. Por ejemplo `[P in K]` crea un nuevo tipo mapeando las propiedades K. Suponiendo que K es `'a' | 'b'`, entonces `[P in K]: T[P]` crea un nuevo tipo con las propiedades `a` y `b` de T.

  - `[P in K]`: mapea propiedades de un tipo.
  - `[P in keyof T]`: mapea todas las propiedades de un tipo T.

Veamos un ejemplo un poco más elaborado:

Tenemos un formulario con una serie de campos y una función de validación para controlarlo.
Queremos crear un tipo que represente el estado de validación de cada campo mediante un objeto con las propiedades hasError, message y value

```ts
interface UserForm {
  firstName: string;
  lastName: string;
  address: String;
}

type ValidationForm<Form> = {
  [key in keyof Form]: {
    hasError: boolean;
    message: string;
    value: Form[key];
  };
};
```

Al obtener en cada iteración la clave `key`, podemos usar `Form[key]` para obtener el tipo del valor correspondiente en el formulario original.

En los tipos es habitual usar letras mayúsculas para los parámetros genéricos, como `F` o `K`, , pero en este caso hemos usado `Form` y `Key` para mayor claridad.

Usando este tipo genérico, podemos definir el estado de validación para un formulario específico:

```ts
type UserValidationForm = ValidationForm<UserForm>;

const userFormValidation: UserValidationForm = {
  firstName: {
    hasError: false,
    message: '',
    value: 'Alejandro',
  },
  lastName: {
    hasError: true,
    message: 'Last name is required',
    value: '',
  },
  address: {
    hasError: false,
    message: '',
    value: 'Calle Falsa 123',
  },
};
```

Usándolo con funciones, podíamos querer partir de un interfaz, y por cada uno de sus miembros, definir una función que devuelva su tipo.

```ts
interface UserForm {
  firstName: string;
  lastName: string;
  address: String;
}

type FormGetters<Form> = {
  [Key in keyof Form as `get${Capitalize<string & Key>}`]: () => Form[Key];
};

const userFormGetters: FormGetters<UserForm> = {
  getFirstName: () => 'Alejandro',
  getLastName: () => 'González',
  getAddress: () => 'Calle Falsa 123',
};
```

Muchas de las utilidades de tipos son en realidad un atajo para tipos mapeados comunes. Por ejemplo, el tipo `Readonly<T>` crea un nuevo tipo a partir de T, pero con todas sus propiedades marcadas como de solo lectura (readonly).

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

#### Tipos condicionales

Los **tipos condicionales** permiten definir un tipo en función de una condición entre otros tipos, similar a un `if` a nivel de tipos.

Disponemos de dos operadores

- `T extends U ? X : Y`: define un tipo basado en una condición. Si T extiende U, el tipo es X; de lo contrario, es Y. También se utiliza para restringir los tipos genéricos, como ya hemos visto.
- `infer`: extrae tipos dentro de condiciones.

La sintaxis básica de un tipo condicional con `extends` es:

```ts
T extends U ? X : Y
```

- Si `T` extiende de `U`, el resultado es `X`.
- En caso contrario, el resultado es `Y`.

Ejemplo básico:

```ts
type isNumber<T> = T extends number ? number : 'Not number';

export type A = isNumber<number>; // number
export type B = isNumber<string>; // "Not number"
```

Esto permite generar tipos dinámicos según las propiedades del tipo de entrada.

Por ejemplo, podemos usar tipos condicionales para crear alias de tipos específicos.

```ts
type JsonValue<T> = T extends object ? string : T;

let data1: JsonValue<number> = 10;
let data2: JsonValue<{ id: number }> = '{"id":1}'; // string, ya que es un objeto
```

Este patrón es muy útil cuando transformamos estructuras dentro de flujos reactivos (por ejemplo, convertir objetos a JSON antes de emitirlos).

Podemos utilizarlo para crear tipos true/false basados en condiciones. Por ejemplo, de las siguientes tres interfaces, solo las dos primeras deben permitirse un determinado update:

```ts
export interface User {
  role: 'user';
}
export interface Admin {
  role: 'admin';
}
export interface Guest {
  role: 'guest';
}

export type CanUpdate<T> = T extends { role: 'guest' } ? false : true;
```

##### Uniones discriminadas v. tipos condicionales genéricos

Como vimos, las uniones discriminadas permiten definir tipos que pueden ser uno de varios tipos posibles, basándose en una propiedad común que actúa como discriminador. Los tipos condicionales son otro enfoque para esta misma idea, pero con una sintaxis diferente y más flexible.

Tomemos un ejemplo de una unión discriminada:

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number };

const area = (shape: Shape): number => {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.size ** 2;
  }
};

console.log(area({ kind: 'circle', radius: 5 })); // 78.53981633974483
console.log(area({ kind: 'square', size: 4 })); // 16
```

Veamos como se plantea el mismo ejemplo usando tipos condicionales:

```ts
type Circle = { radius: number };
type Square = { size: number };

type Shape<T> = T extends 'circle'
  ? Circle
  : T extends 'square'
  ? Square
  : never;

const area = <T extends 'circle' | 'square'>(shape: Shape<T>): number => {
  if ('radius' in shape) {
    return Math.PI * shape.radius ** 2;
  } else if ('size' in shape) {
    return shape.size ** 2;
  }
  throw new Error('Unknown shape');
};

console.log(area({ radius: 5 })); // 78.53981633974483
console.log(area({ size: 4 })); // 16
```

- el tipo de la función restringe T a ser 'circle' o 'square'
- el tipo `Shape<T\>` se resuelve dinámicamente según el valor de T, pudiendo ser `Circle` o `Square`.

###### 🧿Componente User

Llevado a React podríamos tener un componente User que renderice diferente según si el usuario está autenticado o no:

```tsx
type Props =
  | {
      authenticated: true;
      level: 'basic' | 'admin';
      profileData: {
        name: string;
        email: string;
      };
    }
  | {
      authenticated: false;
      level: 'guest';
    };

const User = (props: Props) => {
  if (props.authenticated) {
    return (
      <Card>
        Profile ({props.level})<div>Name: {props.profileData.name}</div>
        <div>Email: {props.profileData.email}</div>
      </Card>
    );
  }
  return <>{props.level}</>;
};
```

El mismo ejemplo usando tipos condicionales:

```tsx
type UserProps<T extends boolean> = T extends true
  ? {
      authenticated: true;
      level: 'basic' | 'admin';
      profileData: {
        name: string;
        email: string;
      };
    }
  : {
      authenticated: false;
      level: 'guest';
    };

const User = <T extends boolean>(props: UserProps<T>) => {
  if (props.authenticated) {
    return (
      <Card>
        Profile ({props.level})<div>Name: {props.profileData.name}</div>
        <div>Email: {props.profileData.email}</div>
      </Card>
    );
  }
  return <>{props.level}</>;
};
```

##### Inferencia avanzada con `infer`

La palabra clave `infer` permite **extraer tipos internos** dentro de una condición.

Ejemplo:

```ts
type Return<T> = T extends (...args: any[]) => infer R ? R : never;

type A = Return<() => number>; // number
type B = Return<() => Promise<string>>; // Promise<string>
```

`infer R` captura el tipo de retorno de la función analizada y lo hace reutilizable.

Veamos un ejemplo de uso en una función, donde queremos extraer el tipo de datos ...

Si tenemos la siguiente función:

```ts
function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${
    person.age
  } years old and loves ${person.hobbies.join(' and  ')}.`;
}
```

Y tratamos de usarla en el siguiente código

```ts
const user1 = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'hiking'],
};

const personDescription = describePerson(user1);
// El tipo 'string[]' no se puede asignar al tipo '[string, string]'
```

Veremos que hay un error de tipos, ya que la función `describePerson` espera una tupla `[string, string]` para la propiedad `hobbies`, pero para el valor que estamos pasando se infiere su tipo como un array `string[]`.

La solución más sencilla es definir explícitamente el tipo de `alice` como una tupla o hacer un casting del array a una tupla:

```ts
const user1: {
  name: string;
  age: number;
  hobbies: [string, string];
} = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'hiking'] as [string, string],
};
```

Otra solución más elegante es usar `infer` para extraer el tipo de la propiedad `hobbies` y asegurarnos de que es una tupla:

```ts
type HobbiesType<T> = T extends { hobbies: infer H } ? H : never;
type PersonHobbies = HobbiesType<{
  name: string;
  age: number;
  hobbies: [string, string];
}>; // [string, string]
const user1 = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'hiking'] as PersonHobbies,
};
```

El tipo `HobbiesType<T\>` extrae el tipo de la propiedad `hobbies` del tipo `T`, y luego lo usamos para definir el tipo de `alice.hobbies` como una tupla.

Otra forma de hacerlo sería

```ts
type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: unknown[]
) => unknown
  ? FirstArgument
  : never;

const user2: GetFirstArgumentOfAnyFunction<typeof describePerson> = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'],
};

describePerson(user2); /* No TypeScript errors */
```

#### Otros operadores

- `as`: renombra o transforma tipos. Se utiliza para las aserciones o casting de tipo, como ya hemos visto

- `as const`: infiere tipos literales en lugar de tipos generales. Permite que un array o un objeto se trate como una constante inmutable, infiriendo tipos literales en lugar de tipos generales.

```ts
const colors = ['red', 'green', 'blue'] as const;
```

- `extends`: establece restricciones en tipos genéricos.

- `?`: marca propiedades como opcionales.
- `-?`: marca propiedades como requeridas.
- `+readonly` y `-readonly`: marca propiedades como de solo lectura o modificables.

### Tipos utilitarios

TypeScript proporciona varios tipos utilitarios integrados que facilitan la manipulación y transformación de tipos existentes. Estos tipos son especialmente útiles en la programación reactiva para definir flujos de datos con estructuras específicas.

#### Awaited<T\>

Espera a que un Promise T se resuelva y devuelve el tipo de sus valores resueltos.

```ts
type ResolvedType = Awaited<Promise<number>>; // number
```

#### Partial<T\> y Required<T\>

Partial<T\> crea un nuevo tipo en el que todas las propiedades del tipo original T son opcionales.
Es útil para trabajar con objetos que pueden tener un subconjunto de sus propiedades definidas.

```ts
type PartialUser = Partial<{
  id: number;
  name: string;
  email: string;
}>;
// Equivalente a:
// {
//   id?: number;
//   name?: string;
//   email?: string;
// }
```

Por contra, `Required<T>` genera un nuevo tipo donde todas las propiedades de T son obligatorias.

```ts
type RequiredUser = Required<{
  id?: number;
  name?: string;
  email?: string;
}>;
// Equivalente a:
// {
//   id: number;
//   name: string;
//   email: string;
// }
```

Partial<T\> y Required<T\> son útiles para trabajar con flujos con datos incompletos o completos.

#### Readonly<T\>

Genera un nuevo tipo donde todas las propiedades de T no son modificables después de la creación.
Ideal para proteger objetos de cambios accidentales.

```ts
type ReadonlyUser = Readonly<{
  id: number;
  name: string;
}>;
// Equivalente a:
// {
//   readonly id: number;
//   readonly name: string;
// }
```

Readonly<T\> permite asegurar inmutabilidad en flujos reactivos.

#### Pick<T, K> y Omit<T, K>

Pick<T, K> Construye un nuevo tipo seleccionando un subconjunto de propiedades (K) de un tipo existente T.
Permite crear un tipo más pequeño a partir de uno más grande.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, 'id' | 'name'>;
// Equivalente a:
// {
//   id: number;
//   name: string;
// }
```

Omit<T, K> crea un nuevo tipo que es igual a T pero omite las propiedades especificadas en K.
Es la operación inversa de Pick.

```ts
type UserWithoutEmail = Omit<User, 'email'>;
// Equivalente a:
// {
//   id: number;
//   name: string;
// }
```

Pick<T, K> y Omit<T, K>: selección de propiedades relevantes para un flujo.

#### Record<K, T>

Crea un tipo de objeto donde las claves son de tipo K y los valores son de tipo T.
Es muy útil para definir diccionarios u objetos con un conjunto fijo de claves.

```ts
type UserRoles = 'admin' | 'editor' | 'viewer';
type RolePermissions = Record<UserRoles, string[]>;
// Equivalente a:
// {
//   admin: string[];
//   editor: string[];
//   viewer: string[];
// }
```

#### Extract<T, U> y Exclude<U, T>

Son equivalentes a Pick y Omit pero para tipos de unión.

Extract<T, U> Devuelve el tipo T seleccionando solo las partes que también están en U.

```ts
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

type C = Extract<A, B>; // 'b' | 'c'
```

Exclude<U, T> Devuelve el tipo U eliminando todos los tipos que también están en T.

```ts
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

type C = Exclude<A, B>; // 'a'
```

#### NonNullable<T\>

Excluye null y undefined del tipo T.

#### ReturnType<T\>

Infiere el tipo de retorno de una función T.

Ejemplo práctico:

```ts
type User = { id: number; name: string; email?: string };

type StreamUser = Readonly<Pick<User, 'id' | 'name'>>;
// Emisiones inmutables y reducidas solo a datos esenciales
```

Cuando tenemos una entidad de datos, estas utilidades nos ayudan a definir sus DTOs (Data Transfer Objects) para flujos específicos, mejorando la seguridad y claridad del código.

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
type UserDTO = Omit<User, 'id'>; // DTO sin 'id'
type UserUpdateDTO = Partial<UserDTO>; // Todos los campos del DTO opcionales
```

## Tipado de flujos asíncronos

Los flujos de datos asíncronos, tanto las promesas como los observables pueden beneficiarse del tipado estricto para garantizar la seguridad y claridad del código.

Para ello son fundamentales los tipos genéricos y los tipos condicionales, junto con las utilidades de tipos y los demás mecanismos de manipulación de tipos que hemos visto.

### Tipos genéricos y su aplicación en flujos

En la programación asíncrona y reactiva, los flujos de datos (streams) pueden manejar distintos tipos de información. Los genéricos permiten definir estos flujos de manera flexible y segura tanto en el caso de **promesas** como de **observables**.

Es fácil deducir los beneficios del tipado estricto basado en genéricos:

- Previene errores de tipo en tiempo de compilación.
- Mejora el autocompletado y la documentación.
- Facilita la interoperabilidad entre Promise y Observable.

#### Contratos tipados para funciones reactivas y streams

Al margen de APIs como la de `Promise` o de librerías como RxJS, podemos definir conceptualmente un flujo simple, utilizando el tipado genérico para definir el tipo de datos que emite el flujo:

```ts
interface Stream<T> {
  emit: (value: T) => void;
  subscribe: (next: (value: T) => void) => void;
}
```

Para implementar este interfaz podemos crear una **clase** simple que almacene los suscriptores y emita valores a todos ellos:

```ts
class SimpleStream<T> implements Stream<T> {
  private subscribers: Array<(value: T) => void> = [];

  emit(value: T): void {
    this.subscribers.forEach((sub) => sub(value));
  }

  subscribe(next: (value: T) => void): void {
    this.subscribers.push(next);
  }
}
```

Lo mismo podríamos hacer con una **función factory** que devuelva un objeto que implemente el interfaz:

```ts
function createStream<T>(): Stream<T> {
  const subscribers: Array<(value: T) => void> = [];
  return {
    emit: (value: T) => {
      subscribers.forEach((sub) => sub(value));
    },
    subscribe: (next: (value: T) => void) => {
      subscribers.push(next);
    },
  };
}

const numberStream = createStream<number>();
numberStream.subscribe((v) => console.log(v.toFixed(2))); // OK
// numberStream.subscribe((v) => console.log(v.toUpperCase())); ❌ Error

numberStream.subscribe((v) => console.log(v.toFixed(2))); // OK
// numberStream.subscribe((v) => console.log(v.toUpperCase())); ❌ Error
```

Igualmente podríamos definir una función transformadora que tome un flujo y devuelva otro flujo con un tipo diferente, aplicando una función de transformación:

```ts
function mapStream<T, U>(stream: Stream<T>, fn: (value: T) => U): Stream<U> {
  const newStream = createStream<U>();
  stream.subscribe((value) => newStream.emit(fn(value)));
  return newStream;
}

const names = createStream<string>();
const lengths = mapStream(names, (n) => n.length);

lengths.subscribe((len) => console.log('Longitud:', len));
names.emit('Reactive'); // Salida: Longitud: 8
```

En esta línea podríamos implementar un tipo genérico DataStream<T\> con métodos map, filter, además de subscribe.

```ts
interface DataStream<T> {
  map<U>(fn: (v: T) => U): DataStream<U>;
  filter(fn: (v: T) => boolean): DataStream<T>;
  subscribe(fn: (v: T) => void): void;
}
```

#### Promesas

Las promesas deben estar correctamente tipadas, especialmente en funciones async. Son un ejemplo del uso de genéricos, ya que el tipo de retorno puede variar según el caso. En este caso, se utiliza `Promise<T>` para indicar que la función retorna una promesa que resolverá a un tipo específico.

```ts
type User = { id: number; name: string };

const fetchUser = async (): Promise<User> => {
  const res = await fetch('/api/user');
  if (!res.ok) throw new Error('Error al obtener el usuario');
  return await res.json();
};

const handleClick = async (): Promise<void> => {
  try {
    const user = await fetchUser();
    console.log(user.name);
  } catch (error) {
    const isError = (error: unknown): error is Error => {
      return error instanceof Error;
    };

    if (isError(error)) {
      console.error(error.message);
    } else {
      console.error('Unknown error', error);
    }
  }
};
```

El error en el catch de las promesas que usan await es unknown y solo puede tiparse como unknown o com any, por lo que es recomendable usar **type guards** para identificar su tipo real.

#### Observables

En RxJS, los observables, subjects y muchos operadores son genéricos. La definición precisa del genérico implica disponer del tipo correcto de los datos tanto en los operadores como en la suscripción al observable.

```ts
import { Observable, map } from 'rxjs';

const numberObservable$ = new Observable<number>((subscriber) => {
  subscriber.next(42);
});

numberObservable$.pipe(
  //@ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
  map((v) => v.toUpperCase()) //❌ Error
);

numberObservable$.subscribe({
  next: (v) => {
    console.log(v.toFixed(2));
    // @ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
    console.log(v.toUpperCase()); // ❌ Error
  },
  error: (err: Error) => {
    console.error('Error:', err.message);
  },
  complete: () => {
    console.log('Completed');
  },
});
```

A diferencia de lo que ocurre en el catch de las promesas, en los observables el tipo del error puede definirse explícitamente en el suscriptor. Si no se conoce el tipo con certeza, se debe usar `unknown` y aplicar type guards para identificar su tipo real.

### Tipos condicionales aplicados a flujos de datos

En programación reactiva, los tipos condicionales permiten modelar operaciones que cambian el tipo emitido según la transformación.

- Casos prácticos en programación reactiva:

  - Determinar el tipo emitido por un flujo.
  - Condicionar el tipo de error o éxito en un stream.

Ejemplo con `Promise`:

```ts
type AwaitedType<T> = T extends Promise<infer U> ? U : T;

type A = AwaitedType<Promise<number>>; // number
type B = AwaitedType<string>; // string
```

Si T es una promesa, se extrae su tipo resuelto; de lo contrario, se mantiene el tipo original.

Ejemplo aplicado a un flujo reactivo simplificado:

```ts
interface Stream<T> {
  map<U>(fn: (v: T) => U): Stream<U>;
}

type InferValue<T> = T extends Stream<infer U> ? U : never;

type Value = InferValue<Stream<boolean>>; // boolean
```

Si T es un stream, se extrae su tipo resuelto; de lo contrario, se mantiene el tipo original.

Esto permite definir operadores que “infieren” automáticamente el tipo de datos que fluyen en una cadena reactiva.

## Manejo de errores en flujos asíncronos

Los **errores síncronos:** ocurren dentro de la ejecución inmediata de una función y se manejan frecuentemente con bloques `try/catch`.

```ts
const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error('División por cero');
  return a / b;
};

try {
  divide(10, 0);
} catch (err) {
  console.log('Error atrapado:', (err as Error).message);
}
```

Los **errores asíncronos:** ocurren dentro de promesas, `async/await` o flujos reactivos. Tanto las promesas como los observables tienen mecanismos específicos para manejar estos errores.

### Errores asíncronos en promesas

En las **promesas**, los errores se manejan con `.catch()` o bloques `try/catch` en funciones `async`.

```ts
async function fetchData() {
  throw new Error('Error de red');
}

fetchData().catch((err: Error) => console.log('Error capturado:', err.message));
```

Al capturar un error en el `catch` de una promesa, puede asignarsele un tipo concreto de error, o si es desconocido utilizar un type guard para identificar su tipo real.

Utilizando `async/await` y `try/catch`:

```ts
async function getUser(id: number) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    if (!response.ok) throw new Error('Usuario no encontrado');
    return await response.json();
  } catch (error) {
    const isError = (error: unknown): error is Error => {
      return error instanceof Error;
    };

    if (isError(error)) {
      console.error(error.message);
    } else {
      console.error('Unknown error', error);
    }
  }
}
```

Al usar `try/catch` dentro de una función `async`, podemos manejar errores de manera similar a como lo haríamos en código síncrono. En este caso, el error es unknown y solo puede tiparse como unknown o como any, por lo que es recomendable usar **type guards** para identificar su tipo real.

### Errores asíncronos en observables

En los **observables**, los errores se manejan inicialmente con la propiedad `error` en el suscriptor

```ts
import { Observable } from 'rxjs';
const source$ = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.error(new Error('Error en el flujo'));
  subscriber.next(3); // No se emite
});

source$.subscribe({
  next: (value) => console.log('Valor emitido:', value),
  error: (err: Error) => console.log('Error atrapado en suscriptor:', err.message),
});
```

Existen además operadores como `catchError` que permiten interceptar errores en flujos reactivos y definir diferentes estrategias de recuperación que veremos más adelante.

```ts
import { catchError } from 'rxjs/operators';

source$.pipe(
  catchError((err: Error) => {
    console.log('Error atrapado en pipe:', err.message);
    return of(-1); // Valor de recuperación
  })
);
```

### Modelado de errores con tipos literales y unions (sin try/catch)

Al margen del uso de `try/catch`, es posible modelar los errores en flujos asíncronos incluyendo el error como parte del resultado, utilizando tipos literales y **uniones discriminadas**. Esto mejora la seguridad del tipado y facilita el manejo de diferentes tipos de errores.

```ts
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

async function safeGetUser(
  id: number
): Promise<Result<{ id: number; name: string }>> {
  try {
    const user = await getUser(id);
    if (!user) return { status: 'error', message: 'No data' };
    return { status: 'success', data: user };
  } catch (error) {
    return { status: 'error', message: (error as Error).message };
  }
}
```

La función `safeGetUser` devuelve un objeto que puede ser de dos tipos: éxito o error. Esto permite al consumidor manejar ambos casos de manera explícita.

```ts
const handleUser = async (id: number) => {
  const result = await safeGetUser(id);
  if (result.status === 'success') {
    console.log('Usuario:', result.data.name);
  } else {
    console.log('Error al obtener usuario:', result.message);
  }
};
```

La misma técnica puede aplicarse a flujos reactivos, emitiendo objetos que representen tanto datos como errores.

```ts
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const userStream$ = of(1, 2, 3).pipe(
  map((id) => {
    if (id === 2) {
      return { status: 'error', message: 'Usuario no encontrado' } as Result<{
        id: number;
        name: string;
      }>;
    }
    return { status: 'success', data: { id, name: `User${id}` } } as Result<{
      id: number;
      name: string;
    }>;
  })
);
userStream$.subscribe((result) => {
  if (result.status === 'success') {
    console.log('Usuario:', result.data.name);
  } else {
    console.log('Error en flujo:', result.message);
  }
});
```

### Tipado de errores específicos

Los propios errores pueden tener tipos específicos, permitiendo un manejo más detallado según el tipo de error.

```ts
type NetworkError = { type: 'network'; message: string };
type ValidationError = { type: 'validation'; message: string };
type FlowError = NetworkError | ValidationError;

function handleError(error: FlowError) {
  switch (error.type) {
    case 'network':
      console.log('Error de red:', error.message);
      break;
    case 'validation':
      console.log('Error de validación:', error.message);
      break;
  }
}
```

Gracias a la herencia entre clases este tipado puede integrarse con los errores nativos de ES, creando clases específicas para diversos tipos de errores

```ts
class NetworkError extends Error {
  type = 'network';
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

class ValidationError extends Error {
  type = 'validation';
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
function handleError(error: NetworkError | ValidationError) {
  switch (error.type) {
    case 'network':
      console.log('Error de red:', error.message);
      break;
    case 'validation':
      console.log('Error de validación:', error.message);
      break;
  }
}
```

Tipar explícitamente los errores evita el uso de `any` y mejora la seguridad del flujo.

### Estrategias de manejo de errores

- Implementación de estrategias de manejo de errores (catchError, retry, finalize).
- Tipado de flujos con errores (Observable<Resultado | Error>).

```ts
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4);

source$
  .pipe(
    map((x) => {
      if (x === 3) throw new Error('Valor no permitido');
      return x * 2;
    }),
    catchError((err) => {
      console.log('Error atrapado en flujo:', err.message);
      return of(0); // flujo de recuperación
    })
  )
  .subscribe((val) => console.log('Valor emitido:', val));
```

El flujo sigue emitiendo valores después de manejar el error.
