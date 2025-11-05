import {
    getDataOfForm,
    getDataOfFormData,
    getDataOfHTMLForm,
} from './form-tools';

describe('FormTools', () => {
    const formElement = document.createElement('form');
    formElement.innerHTML = `
        <input type="text" name="username" value="test user"/>
        <input type="password" name="password" value="test pass" />
        <input type="checkbox" name="rememberMe" checked />
    `;

    const mockInitialData = {
        username: '',
        password: '',
        rememberMe: false,
    };

    const mockData = {
        username: 'test user',
        password: 'test pass',
        rememberMe: true,
    };

    const formData = new FormData(formElement);

    test('getDataOfHTMLForm should extract form data', () => {
        const result = getDataOfHTMLForm(formElement, mockInitialData);
        expect(result).toEqual(mockData);
    });

    test('getDataOfHTMLForm should extract form data', () => {
        const result = getDataOfFormData(formData, mockInitialData);
        expect(result).toEqual(mockData);
    });

    test('getDataOfForm should extract HTML form values', () => {
        const result = getDataOfForm(formElement, mockInitialData);
        expect(result).toEqual(mockData);
    });

    test('getDataOfForm should extract formdata values', () => {
        const result = getDataOfForm(formData, mockInitialData);
        expect(result).toEqual(mockData);
    });
});
