import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject<number>();
subject.next(1);
subject.next(2);

console.log('Suscripción');

const subscription = subject.subscribe({
  next: (data) => console.log('Valor recibido:', data),
  error: (error) => console.log('Error:', error.message),
  complete: () => {
    console.log('Observable completado');
  },
});

// Valor recibido: 1
// Valor recibido: 2

console.log('Emitido 3');

subject.next(3);

// Consola: Valor recibido: 3

subject.error(new Error('Se produjo un error en el observable'));

// Consola: Error: Se produjo un error en el observable

// Al emitir un error, el observable se cancela y no se emiten más valores ni se llama a complete
subject.next(3); // Este valor no se emitirá

subscription.unsubscribe();
