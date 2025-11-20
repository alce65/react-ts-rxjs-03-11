
import { CounterClicks } from './counter-clicks/counter-clicks';
import { ReadInfo } from './read-info/read-info';
import { SendInfo } from './send-info/send-info';

export const DemoPage: React.FC = () => {
    return (
        <>
            <div>Demo de Observables</div>
            <p>Uso de Observables para la comunicación entre componentes</p>
            <CounterClicks />
            <SendInfo />
            <ReadInfo />
        </>
    );
};
