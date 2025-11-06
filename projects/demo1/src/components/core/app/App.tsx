import './App.css';
import { Layout } from '../layout/layout';
import { Search } from '@/components/search-page/search/search';
import { SearchDb } from '@/components/search-page/search-db/search-db';

export const App: React.FC = () => {
    const title = 'Demo1';

    return (
        <Layout appTitle={title}>
            <main>
                <Search />
                <SearchDb />
            </main>
        </Layout>
    );
};
