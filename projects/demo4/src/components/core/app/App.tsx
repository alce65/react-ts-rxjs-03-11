import { GetData } from '@/components/get-data/get-data';
import { Layout } from '../layout/layout';


export const App: React.FC = () => {
    const title = 'RxJS + API REST';

    return (
        <Layout appTitle={title}>
            <main>
                <GetData />
            </main>
        </Layout>
    );
};
