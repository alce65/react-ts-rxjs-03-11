import { BehaviorSubject } from 'rxjs';
import type { ID, Note, NoteDTO } from '../types/notes';
import type { NotesErrors, NotesStateType } from '../types/notes-state';
import type { Repository } from '../types/repo';
import type { HttpError } from '@/types/http-error';

export class NotesState {
    private notes = new BehaviorSubject<Note[]>([]);
    private error = new BehaviorSubject<NotesErrors>({});
    private repo: Repository<Note, NoteDTO>;
    constructor(repo: Repository<Note, NoteDTO>) {
        this.repo = repo;
    }

    getState(): NotesStateType {
        return {
            data: this.notes.asObservable(),
            errors: this.error.asObservable(),
        };
    }

    loadAll(): void {
        this.repo.getAll().subscribe({
            next: (notes: Note[]) => {
                this.notes.next(notes);
                this.error.next({});
            },
            error: (err: HttpError) => {
                this.error.next({
                    load:
                        'Error fetching notes: ' +
                        err.status +
                        ' ' +
                        err.statusText,
                });
            },
        });
    }

    deleteNote(id: ID): void {
        this.repo.delete(id).subscribe({
            next: () => {
                this.notes.next(
                    this.notes.getValue().filter((n) => n.id !== id)
                );
            },
            error: (err: HttpError) => {
                this.error.next({
                    delete:
                        'Error deleting notes: ' +
                        err.status +
                        ' ' +
                        err.statusText,
                });
            },
        });
    }

    addNote(note: NoteDTO): void {
        this.repo.create(note).subscribe({
            next: (newNote: Note) => {
                this.notes.next([...this.notes.getValue(), newNote]);
                this.error.next({});
            },
            error: (err: HttpError) => {
                this.error.next({
                    add:
                        'Error adding notes: ' +
                        err.status +
                        ' ' +
                        err.statusText,
                });
            },
        });
    }

    updateNote(id: ID, note: NoteDTO): void {
        this.repo.update(id, note).subscribe({
            next: () => {
                this.notes.next(
                    this.notes
                        .getValue()
                        .map((n) => (n.id === id ? { ...n, ...note } : n))
                );
                this.error.next({});
            },
            error: (err: HttpError) => {
                this.error.next({
                    update:
                        'Error updating notes: ' +
                        err.status +
                        ' ' +
                        err.statusText,
                });
            },
        });
    }
}
