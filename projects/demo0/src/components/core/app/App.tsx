import './App.css';
import { Layout } from '../layout/layout';
import { Counter } from '@/components/counter/counter';

export const App: React.FC = () => {
    const title = 'Vite + React';

    return (
        <Layout appTitle={title}>
            <main>
                <Counter />
            </main>
        </Layout>
    );
};
