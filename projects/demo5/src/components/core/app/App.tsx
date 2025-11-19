import './App.css';
import { Layout } from '../layout/layout';

export const App: React.FC = () => {
    const title = 'Vite + React';

    return (
        <Layout appTitle={title}>
            <main>Demo 5</main>
        </Layout>
    );
};
