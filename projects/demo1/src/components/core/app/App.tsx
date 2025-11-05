import './App.css';
import { Layout } from '../layout/layout';

export const App: React.FC = () => {
    const title = 'Demo1';

    return (
        <Layout appTitle={title}>
            <main>
                Demo 1
            </main>
        </Layout>
    );
};
