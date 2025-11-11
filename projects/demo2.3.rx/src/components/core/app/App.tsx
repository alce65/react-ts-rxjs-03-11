import './App.css';
import { Layout } from '../layout/layout';

export const App: React.FC = () => {
    const title = 'TS + React + RxJS';

    return (
        <Layout appTitle={title}>
            <main>
                <p>Demo 2 y 3</p>
            </main>
        </Layout>
    );
};
