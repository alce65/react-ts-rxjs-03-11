import { Card } from '@/components/core/card/card';
import { List } from '@/components/core/list/list';
import { AppContext } from '@/context/context';
import { useObservable } from '@/hooks/use-observable.v4';
import React, { useContext } from 'react';
import { NoteAdd } from './note-add/note-add';

export const Notes: React.FC = () => {
    const { notesState } = useContext(AppContext);

    const notes$ = notesState.getState().data;

    const [notes] = useObservable(notes$);
    if (!notes) return <div>Loading...</div>;

    return (
        <Card title="Notes">
            <details>
                <summary>Add Note</summary>
                <NoteAdd />
            </details>
            <List
                items={notes}
                renderItem={(note) => (
                    <div key={note.id}>
                        {note.title} - {note.author}
                    </div>
                )}
            />
        </Card>
    );
};
