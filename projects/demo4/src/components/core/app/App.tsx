import { GetUsers } from '@/components/get-user.data/get-user-data';
import { Layout } from '../layout/layout';
import { GetUserById } from '@/components/get-user.data/get-user-button';
import { ReadInput } from '@/components/search/read-input';
import { SearchCountries } from '@/components/search/search-countries';

export const App: React.FC = () => {
    const title = 'RxJS + API REST';

    return (
        <Layout appTitle={title}>
            <main>
                <GetUsers />
                <GetUserById />
                <hr />
                <ReadInput />
                <hr />
                <SearchCountries />
            </main>
        </Layout>
    );
};
