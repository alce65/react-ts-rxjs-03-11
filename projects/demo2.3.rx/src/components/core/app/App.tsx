import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@/components/withHooks/list-names';
import { CounterClicks } from '@/components/withHooks/counter-clicks';
import { UserLogged } from '@/components/withHooks/user/user-load-rx';
import { Fibonacci } from '@/components/fibonacci.v3/fibonacci';
import { GetData } from '@/components/get-data/get-data';
import { GetDataMerge } from '@/components/get-data/get-data-merge';
import { IntervalCounter3 } from '@/components/interval-counter3/counter3';
import { IntervalCounter4 } from '@/components/interval-counter3/counter4';

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
                <hr />
                <GetData />
                <GetDataMerge />
                <hr />
                <IntervalCounter3 />
                <IntervalCounter4 />
            </main>
        </Layout>
    );
};
