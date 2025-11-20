import './App.css';
import { Layout } from '../layout/layout';
import { CounterClicks } from '@/components/feature/counter-clicks/counter-clicks';
import { Counter3Buttons } from '@/components/feature/counter-3buttons/counter-3buttons';
import { SearchPoke } from '@/components/feature/search-poke/search-poke';
import { DemoPage } from '@/components/page/page';

export const App: React.FC = () => {
    const title = 'Vite + React';

    return (
        <Layout appTitle={title}>
            <main>
                Demo 5
                <CounterClicks />
                <Counter3Buttons />
                <hr />
                <SearchPoke />
                <hr />
                <DemoPage />
            </main>
        </Layout>
    );
};
