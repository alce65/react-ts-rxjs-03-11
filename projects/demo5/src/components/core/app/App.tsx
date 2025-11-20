import './App.css';
import { Layout } from '../layout/layout';
import { CounterClicks } from '@/components/feature/counter-clicks/counter-clicks';
import { Counter3Buttons } from '@/components/feature/counter-3buttons/counter-3buttons';
import { SearchPoke } from '@/components/feature/search-poke/search-poke';
import { DemoPage } from '@/components/page/page';
import { AppContextProvider } from '@/context/provider';
import { NotesState } from '@/components/notes/services/state';
import { ApiNoteRepository } from '@/components/notes/services/api-note-repo';
import { Notes } from '@/components/notes/components/notes';

export const App: React.FC = () => {
    const title = 'Vite + React + Rxjs';

    const notesURL = 'http://localhost:4000/notes';
    const notesRepo = new ApiNoteRepository(notesURL);
    const notesState = new NotesState(notesRepo);

    const context = {
        appTitle: title,
        notesState,
    };

    notesState.loadAll();

    return (
        <AppContextProvider context={context}>
            <Layout>
                <main>
                    Demo 5
                    <CounterClicks />
                    <Counter3Buttons />
                    <hr />
                    <SearchPoke />
                    <hr />
                    <DemoPage />
                    <hr />
                    <Notes />
                </main>
            </Layout>
        </AppContextProvider>
    );
};
