import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@/components/withHooks/list-names';
import { CounterClicks } from '@/components/withHooks/counter-clicks';
import { UserLogged } from '@/components/withHooks/user/user-load-rx';
import { Fibonacci } from '@/components/fibonacci/fibonacci';


export const App: React.FC = () => {
    const title = 'TS + React + RxJS';

    return (
        <Layout appTitle={title}>
            <main>
                <p>Demo 2 y 3</p>
                <ListNames />
                <CounterClicks />
                <UserLogged />
                <hr />
                <Fibonacci />
            </main>
        </Layout>
    );
};
