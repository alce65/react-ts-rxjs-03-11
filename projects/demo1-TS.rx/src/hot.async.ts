import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();
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

console.log('Emitido 3');
subject.next(3);

// subject.error(new Error('Se produjo un error en el observable'));
// Consola: Error: Se produjo un error en el observable

subject.next(100);
subject.complete(); // Se llama a complete

// Consola: Valor recibido: 100
// Consola: Observable completado

subscription.unsubscribe();
