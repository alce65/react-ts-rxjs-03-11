import './App.css';
import { Layout } from '../layout/layout';
import { Search } from '@/components/search-page/search/search';

export const App: React.FC = () => {
    const title = 'Demo1';

    return (
        <Layout appTitle={title}>
            <main>
                <Search />
            </main>
        </Layout>
    );
};
