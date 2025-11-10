import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@/components/feature/list-names/list-names';
import { ClicksCounter } from '@/components/feature/click-counter/clicks-counter';
import { IntervalCounter } from '@/components/feature/interval-counter/interval-counter';

export const App: React.FC = () => {
    const title = 'TS + React + RxJS';

    return (
        <Layout appTitle={title}>
            <main>
                <p>Demo 1b.rx</p>
                <ListNames />
                <ClicksCounter />
                <IntervalCounter />
            </main>
        </Layout>
    );
};
