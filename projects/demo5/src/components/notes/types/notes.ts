
export type ID = number | string;

export interface Note {
  id: ID;
  title: string;
  author: string;
  isImportant: boolean;
}

export type NoteDTO = Omit<Note, 'id'>;

export type NoteUpdateDTO = Omit<Partial<Note>, 'id'>;
