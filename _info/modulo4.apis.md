# Módulo 6: Manejo avanzado de apis y programación reactiva

- [Módulo 6: Manejo avanzado de apis y programación reactiva](#módulo-6-manejo-avanzado-de-apis-y-programación-reactiva)
  - [Propuesta inicial del módulo](#propuesta-inicial-del-módulo)
  - [Consumir APIs asíncronas con RxJS: código en TypeScript](#consumir-apis-asíncronas-con-rxjs-código-en-typescript)
    - [Peticiones HTTP con fetch (Promise)](#peticiones-http-con-fetch-promise)
    - [Flujos de datos desde peticiones HTTP con fetch (fromFetch)](#flujos-de-datos-desde-peticiones-http-con-fetch-fromfetch)
    - [Tipado de peticiones y respuestas en TypeScript](#tipado-de-peticiones-y-respuestas-en-typescript)
    - [Éxito de la petición v. errores en la petición](#éxito-de-la-petición-v-errores-en-la-petición)
      - [Errores específicos: HttpError](#errores-específicos-httperror)
    - [⚙️Servicio fetchService. Reintentos](#️servicio-fetchservice-reintentos)
    - [⚙️Servicio fetchTodoService](#️servicio-fetchtodoservice)
  - [Manejo de APIs en React con RxJS](#manejo-de-apis-en-react-con-rxjs)
    - [🧿 Componente FetchButton: Fetch en respuesta a un botón](#-componente-fetchbutton-fetch-en-respuesta-a-un-botón)
      - [Fetch desde un campo de búsqueda](#fetch-desde-un-campo-de-búsqueda)
        - [🧿 Componente ReadInput: Input de texto para cualquier finalidad](#-componente-readinput-input-de-texto-para-cualquier-finalidad)
        - [⚙️Servicio SearchCountries](#️servicio-searchcountries)
        - [🧿 Componente Search: Input de búsqueda](#-componente-search-input-de-búsqueda)

## Propuesta inicial del módulo

- Consumir APIs asíncronas con RxJS
- Flujos de datos desde peticiones HTTP (fetch, Axios)
- Tipado de peticiones y respuestas en TypeScript
- Manejo de streams de datos en tiempo real
- WebSockets y Server-Sent Events con RxJS
- Flujos de datos en tiempo real con TypeScript y React

## Consumir APIs asíncronas con RxJS: código en TypeScript

Para consumir APIs asíncronas utilizando RxJS, podemos aprovechar los operadores que nos ofrece esta librería para manejar flujos de datos de manera eficiente.

- `fromFetch`: Este operador nos permite realizar peticiones HTTP de manera sencilla y trabajar con la respuesta como un observable.
- `ajax`: Proporcionado por `rxjs/ajax`, este operador facilita la realización de peticiones AJAX y el manejo de respuestas. Hoy en día, `fromFetch` es más recomendado para nuevas aplicaciones debido a su simplicidad y compatibilidad con la API Fetch.

### Peticiones HTTP con fetch (Promise)

El **API de fetch**, nativo de los navegadores y de las versiones recientes de Node.js, nos permite realizar peticiones HTTP de manera sencilla utilizando promesas. El resultado obtenido es una promesa que se resuelve con un objeto **Response**.

```ts
class Response extends BodyMixin {
  constructor(body?: BodyInit, init?: ResponseInit);

  readonly headers: Headers;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  readonly redirected: boolean;

  readonly clone: () => Response;
  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string | URL, status: ResponseRedirectStatus): Response;
}
```

Este objeto Response contiene información sobre la respuesta de la petición, incluyendo el cuerpo de la respuesta, los encabezados y el estado de la misma. Para extraer el cuerpo de la respuesta, podemos utilizar métodos como `.json()`, `.text()`, `.blob()`, entre otros, dependiendo del tipo de datos que esperamos recibir.

```ts
const apiUrl = 'https://api.example.com/data';
fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

### Flujos de datos desde peticiones HTTP con fetch (fromFetch)

A continuación, se presenta un ejemplo básico de cómo realizar una petición HTTP utilizando RxJS y el operador `fromFetch`, que podríamos incluir en un servicio genérico de peticiones HTTP (fetch.service.ts).

```ts
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

const apiUrl = 'https://api.example.com/data';

const data$ = fromFetch(apiUrl).pipe(
  switchMap((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la petición');
    }
  }),
  catchError((error) => {
    console.error(error);
    return of({ error: true, message: error.message });
  })
);
```

Como en el caso de fetch, el correspondiente operador de RxJS nos devuelve un objeto **Response** como datos emitidos por un observable: `Observable<Response>`. Este objeto como acabamos de ver contiene el método `json()` para extraer el cuerpo, que a su vez devuelve una promesa que se resuelve con los datos de la respuesta.

Podemos considerar una **promesa** como equivalente a **un inner observable que emite un único valor y luego completa**.

Es importante verificar si la respuesta fue exitosa (código de estado 200-299) antes de intentar procesar los datos. No necesitamos convertir la promesa a observable si utilizamos alguno de los operadores que trabajan "aplanando" observables de orden superior, como `switchMap`, `mergeMap`, etc.

Como en este caso la promesa emite un solo valor, podemos utilizar `switchMap` para manejar la conversión y extraer los datos de la respuesta.

### Tipado de peticiones y respuestas en TypeScript

Si tipamos el `switchMap`, podemos indicar el tipo de datos que esperamos recibir:

- mediante su tipo genérico: `switchMap<Response, Promise<Data[]>>`
- haciendo casting (aserción de tipo): `return response.json() as Promise<Data[]>`;

```ts
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

const data$ = fromFetch(apiUrl) // Observable<Response>
  .pipe(
    switchMap<Response, Promise<T>>((response) => {
      return response.json();
    }) // Observable<Data[]>
  );

data$.subscribe({
  next: (data) => console.log(data),
});
```

### Éxito de la petición v. errores en la petición

En una petición fetch, podemos encontrarnos tres posibles resultados:

- La petición fue exitosa (código de estado 200-299) y podemos procesar los datos.
- La petición fue realizada, pero el servidor respondió con un error (código de estado 400-599).
- La petición no pudo ser realizada debido a un error de red u otro problema.

Para **fetch**, el objeto Response siempre se resuelve exitosamente en la promesa, incluso si el servidor responde con un error (código de estado 400-599). Por lo tanto, es importante verificar si la respuesta fue exitosa (código de estado 200-299) antes de intentar procesar los datos. Y con frecuencia lanzar nuestro propio error en caso contrario

```ts
const apiUrl = 'https://api.example.com/data';
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la petición');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

En RxJS, podemos manejar estos casos de forma similar:

```ts
const data$ = fromFetch(apiUrl) // Observable<Response>
  .pipe(
    switchMap<Response, Promise<Data[]>>((response) => {
      if (!response.ok) {
        // El servidor está devolviendo un estado que requiere
        // que el cliente intente algo más.
        // Para indicarlo hay varias opciones
      }
      return response.json();
    }) // Observable<Data[]>
  );
```

Opciones para manejar errores en la petición:

1. Devolver un valor por defecto (e.g., un array vacío, null...)
2. Lanzar un error con `throw new Error(...)`

   ```ts
   throw new Error('Error en la petición. Status ' + response.status); // throw Error
   ```

3. Devolver un observable que emite un error con `throwError(...)`

   ```ts
   return throwError(() => new Error('Status ' + response.status));
   ```

En este último caso el tipo del switchMap sería Observable<never\> que habría que incluir en el genérico de switchMap, en caso de haberlo tipado

```ts
switchMap<Response, Promise<Data[]> | Observable<never>>((response) => {
```

Si optamos por cualquiera de las dos últimas opciones, el flujo del observable se interrumpirá y se dirigirá al manejador de errores definido en la suscripción o en un operador catchError posterior en el pipe.

#### Errores específicos: HttpError

Para mejorar la gestión de errores podemos crear una clase que extienda de Error y que incluya información adicional sobre el error HTTP.

```ts
class HttpError extends Error {
  status: number;
  statusText: string;
  constructor(
    status: number,
    statusText: string,
    message: string,
    cause?: Error,
    options?: ErrorOptions
  ) {
    super(message, { cause, ...options });
    this.name = 'HttpError';
    this.status = status;
    this.statusText = statusText;
  }
}
```

Desde el switch map podemos lanzar este error personalizado

```ts
return throwError(
  () =>
    new HttpError(
      response.status,
      response.statusText,
      'Fetch error code: ' + response.status
    )
);
```

Finalmente en un catchError controlaremos posibes errores inespecíficos (de red, timeouts...) y los convertiremos en HttpError

```ts
catchError((err: Error) => {
  // El error "aplanado" llega aquí
  // y se puede re-emitir o transformar
  if (!(err instanceof HttpError)) {
    err = new HttpError(0, '', 'Unknown fetch error', err);
  }
  return throwError(() => err);
});
```

### ⚙️Servicio fetchService. Reintentos

El resultado final del servicio de fetch con RxJS podría ser algo así:

```ts
export const getById =
  (url: string) =>
  <T>(id: string): Observable<T> => {
    return fromFetch(`${url}/${id}`).pipe(
      tap((response) => {
        console.log('Receiving data...', response);
      }),
      switchMap<Response, Promise<T> | Observable<never>>((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return throwError(
            () =>
              new HttpError(
                response.status,
                response.statusText,
                'Fetch error code: ' + response.status
              )
          );
        }
      }),
      retry(3),
      catchError((err: Error) => {
        // El error "aplanado" llega aquí
        // y se puede re-emitir o transformar
        if (!(err instanceof HttpError)) {
          err = new HttpError(0, '', 'Unknown fetch error', err);
        }
        return throwError(() => err);
      })
    );
  };
```

GetById es una función que recibe la URL base del recurso y devuelve otra función genérica que recibe el id del recurso a obtener y devuelve un observable del tipo esperado. Esto es lo que en programación funcional se conoce como función curried.

Antes de capturar el error para relanzarlo, utilizamos el operador `retry(3)` para reintentar la petición hasta 3 veces en caso de error antes de que finalmente se dirija al catchError.

### ⚙️Servicio fetchTodoService

Para utilizarla en un caso concreto, por ejemplo para obtener un Todo por su id, creariamos el correspondiente servicio con el siguiente código:

```ts
const URL_BASE = 'https://jsonplaceholder.typicode.com';
const URL = URL_BASE + '/todos';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodoById = getById(URL)<Todo>;
```

Tanto el tipo como la url base (deberían venir de otro módulo del proyecto, pero para simplificar el ejemplo los hemos incluido directamente aquí.

## Manejo de APIs en React con RxJS

El servicio que hemos creado se puede integrar en un componente funcional de React utilizando hooks como `useEffect` y `useState` para manejar el ciclo de vida del componente y el estado de los datos, o nuestros propios custom hooks como venimos haciendo.

- la carga de los datos puede ser parte del montaje del componente.
- la carga puede responder a un evento, como el clic en un botón o el input de un campo de búsqueda.

### 🧿 Componente FetchButton: Fetch en respuesta a un botón

Dentro del `useEffect`, podemos definir el proceso a partir de un evento de clic en un botón:

- El evento del botón se convierte en un primer observable que se dispara sucesivamente al hacer click en el botón.
- En cada caso usamos el servicio getTodoById para realizar la petición HTTP, que internamente usa el operador fromFetch para ello.
- Podemos tener por tanto un observable de orden superior: `Observable<Observable<Response>>`. El observable del evento del botón contiene a su vez observables que emiten la respuesta de la petición HTTP.

- Según la petición que nos interese (primera, última...) utilizaremos distintos operadores para "aplanar" el observable de orden superior en un observable simple que emita los datos de la respuesta.
  - con `switchMap` si el usuario hace click varias veces, cancelamos la petición anterior y hacemos una nueva
  - con `exhaustMap` se ignoran nuevos clicks mientras la petición anterior no haya terminado.

Del funcionamiento del servicio, ya hemos visto que:

- Dentro del fetch, necesitamos procesar la promesa del método json() de Response, por lo que usaremos `switchMap` para "aplanar" este inner like-observable (la promesa) y emitir los datos de la respuesta.
- La lógica de éxito y error de la petición se maneja dentro del operador switchMap del fetch, como ya hemos vito
- `retry` y `catchError` manejan los errores en la petición.
  - `retry` reintenta la petición un número determinado de veces antes de fallar.
  - `catchError` captura el error final y lo transforma en un observable que emite un error manejable desde la suscripción.

```tsx
const buttonRef = useRef<HTMLButtonElement | null>(null);

const id = '1';
const factory = (): Observable<Todo> | null => {
  const button = buttonRef.current;
  if (!button) return null;
  const button$ = fromEvent(button, 'click');
  const data$ = button$.pipe(
    tap(() => console.log('Button click')),
    exhaustMap(() => getTodoById(id))
  );
  return data$;
};
```

Nuestro hook useObservable se encargará de suscribirse al observable devuelto por la factory y gestionar el estado de los datos y errores.

```tsx
const [data, error] = useObservable<Todo | null>(factory, null);

return (
  <Card title="Fetch with Hooks (RxJS and React)">
    <button ref={buttonRef}>Fetch Data</button>
    {data && <p>Received: {data.title}</p>}
    {error && <p style={{ color: 'red' }}>{error.message}</p>}
  </Card>
);
```

Dentro del hook useObservable, en la función de limpieza del useEffect, cancelamos la suscripción al observable para evitar fugas de memoria.

#### Fetch desde un campo de búsqueda

El caso de un campo de búsqueda es bastante similar al del botón, pero en este caso el observable inicial se crea a partir de los eventos de input del campo de texto.

##### 🧿 Componente ReadInput: Input de texto para cualquier finalidad

Veamos este primer proceso, unicamente para obtener los datos de un input

- como ya hemos visto otras veces, gracias a su referencia, podemos acceder a un elemento input del DOM y crear un observable a partir de sus eventos de entrada (input)

```tsx
const inputRef = useRef<HTMLInputElement | null>(null);

const factory = (): Observable<string> | null => {
  const input = inputRef.current;
  if (!input) return null;

  const input$ = fromEvent<React.ChangeEvent<HTMLInputElement>>(
    input,
    'input'
  ).pipe(
    debounceTime(300),
    map((event) => {
      const { value } = event.target;
      return value;
    }),
    distinctUntilChanged()
  );

  return input$;
};
```

En el pipe del observable de eventos de input, podemos aplicar operadores para optimizar la experiencia del usuario

- `debounceTime`: para esperar un tiempo determinado después del último evento antes de procesarlo, evitando así múltiples peticiones mientras el usuario escribe.
- `map`: para extraer el valor actual del campo de texto desde el evento.
- `distinctUntilChanged`: para emitir el valor solo si ha cambiado respecto al anterior, evitando peticiones innecesarias si el usuario introduce el mismo valor varias veces.

El tipado correcto del evento es importante para que TypeScript reconozca las propiedades del objeto evento, infiriendo el target como un `EventTarget & HTMLInputElement`, que tiene la propiedad value.

De esta forma nuestro observable input$ sera del tipo `Observable<string>`, emitiendo el valor actual del campo de texto cada vez que el usuario escriba, con un retraso de 300 ms después del último carácter introducido.

Como solemos hacer, el hook useObservable se encargará de suscribirse al observable devuelto por la factory y gestionar el estado del valor del input.

```tsx
const [data, setData] = useState<string>('');

return (
  <Card title="React Input">
    <label>
      <span>Name</span>
      <input type="text" ref={inputRef} />
    </label>
    <p>
      Input: <span className="series">{data}</span>
    </p>
  </Card>
);
```

##### ⚙️Servicio SearchCountries

En nuestro servicio genérico de fetch, podemos crear una función getByUrl, similar a getById, pero que recibirá la url ya completa.

```ts
export const getByUrl =
  (url: string) =>
  <T>(): Observable<T> => {
    return fromFetch(`${url}`);
    // Todo lo demás igual que en getById
  };
```

El nuevo servicio searchCountry utilizará getByUrl para realizar la petición a la API de países

```ts
const URL_BASE = 'https://restcountries.com/v3.1';
const URL = URL_BASE + '/name';
const apiOptions = '?fields=name,capital';

export type Country = {
  name: { common: string; official: string };
  capital: string[];
};

export const searchCountry = (item: string): Observable<Country[]> => {
  const url = URL + '/' + item + apiOptions;
  return getByUrl(url)<Country[]>().pipe(
    tap((countries) => console.log('Countries', countries)),
    // Manejo el caso de que no haya resultados
    map((countries) => (countries instanceof Array ? countries : [])),
    // Extraigo solo los datos que me interesan
    map((countries) =>
      countries.map((country) => ({
        name: {
          common: country.name.common,
          official: country.name.official,
        },
        capital: country.capital,
      }))
    )
  );
};
```

Los datos recibidos se reorganizan de acuerdo a nuestras necesidades gracias al operador map, y se maneja el caso de que no haya resultados devolviendo un array vacío.

##### 🧿 Componente Search: Input de búsqueda

Combinamos lo descrito para cualquier input de texto con el fetch para realizar una búsqueda de países a partir del nombre introducido en el campo de texto.

```tsx
const factory = (): Observable<Country[]> | null => {
  const input = inputRef.current;
  if (!input) return null;

  const search$ = fromEvent<React.ChangeEvent<HTMLInputElement>>(
    input,
    'input'
  ).pipe(
    debounceTime(300),
    map((event) => {
      const { value } = event.target;
      return value;
    }),
    distinctUntilChanged(),
    exhaustMap((item) => {
      return searchCountry(item);
    })
  );
  return search$;
};
```

El operador exhaustMap se encarga de aplanar los resultados de la búsqueda, cancelando cualquier búsqueda anterior si el usuario introduce un nuevo valor antes de que la petición anterior haya finalizado.

El resto del componente se encarga de mostrar los resultados o los errores en la búsqueda.

```tsx
export const SearchCountries: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const factory = (): Observable<Country[]> | null => {
    // ... código de la factory ...
  };

  return (
    <Card title="Search Countries">
      <label>
        <span>Country</span>
        <input type="text" ref={inputRef} />
      </label>

      {data && data.length > 0 && <List items={data} renderItem={renderItem} />}
      {data && data.length === 0 && <p>No results found.</p>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </Card>
  );
};
```
