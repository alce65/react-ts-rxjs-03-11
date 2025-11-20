import React, { useContext } from 'react';


import { Card } from '@/components/core/card/card';
import { AppContext } from '@/context/context';

export const NoteAdd: React.FC = () => {
    const { notesState } = useContext(AppContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const titleInput = form.elements.namedItem('title') as HTMLInputElement;
        const authorInput = form.elements.namedItem(
            'author'
        ) as HTMLInputElement;
        const title = titleInput.value;
        const author = authorInput.value;
        const isImportantInput = form.elements.namedItem(
            'isImportant'
        ) as HTMLInputElement;
        const isImportant = isImportantInput.checked;
        console.log('Adding note:', { title, author, isImportant });
        notesState.addNote({ title, author, isImportant });
        form.reset();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Título" required />
                <br />
                <input
                    type="text"
                    name="author"
                    placeholder="Autor"
                    required
                ></input>
                <br />
                <label>
                    Important
                    <input type="checkbox" name="isImportant" />
                </label>
                <br />
                <button>Add Note</button>
            </form>
        </Card>
    );
};
