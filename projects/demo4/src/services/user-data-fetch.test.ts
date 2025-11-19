import { of } from 'rxjs';
import { getData } from './data-fetch';
;
import { getUserById, getUserData } from './user-data-fetch';

vi.mock('./data-fetch', () => ({
    getData: vi.fn().mockReturnValue(() => of([]))
}));

describe('user-data-fetch service', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });
    test('should fetch users by id', () => {
        getUserById('1');
        expect(getData).toHaveBeenCalledWith(
            expect.stringContaining('/1')
        );
    });

    test('should fetch users data', () => {
        getUserData()
        expect(getData).toHaveBeenCalledWith(
            expect.not.stringContaining('/1')
        );
    });
});
