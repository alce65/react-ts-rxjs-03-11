import type { Login, Register } from '../types/user';
import { manageLoginService, registerUserService } from './user.service';


describe('UserService', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => undefined);
        vi.spyOn(console, 'dir').mockImplementation(() => undefined);
    });

    test('should register a user', async () => {
        const userData: Register = {
            userName: 'JohnDoe',
            email: 'john.doe@example.com',
            passwd: 'password123',
            isOkConditions: true,
            turn: 'M',
            course: 'R',
        };
        await registerUserService(userData);
        expect(console.log).toHaveBeenCalledWith(
            'Registrando usuario',
            userData
        );
    });

    test('should login a user', async () => {
        const loginData: Login = {
            email: 'john.doe@example.com',
            passwd: 'password123',
            rememberMe: true,
        };
        await manageLoginService(loginData);
        expect(console.log).toHaveBeenCalledWith('Login data:', loginData);
    });
});
