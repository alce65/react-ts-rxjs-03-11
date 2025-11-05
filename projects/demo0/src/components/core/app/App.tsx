import './App.css';
import { Layout } from '../layout/layout';
import { Counter } from '@/components/counters/counter/counter';
import { CounterWithEvent4 } from '@/components/counters/counter2/counter-dataset';
import { LoginForm } from '@/components/users/components/login/login.form';
import { RegisterForm } from '@/components/users/components/register/register.form';

export const App: React.FC = () => {
    const title = 'Vite + React';

    return (
        <Layout appTitle={title}>
            <main>
                <Counter />
                <CounterWithEvent4 initialCount={10} />
                <LoginForm />
                <RegisterForm />
            </main>
        </Layout>
    );
};
