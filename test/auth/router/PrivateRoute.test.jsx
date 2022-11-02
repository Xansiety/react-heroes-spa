import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { PrivateRoute } from '../../../src/router/PrivateRoute';


describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si está autenticado', () => {
        Storage.prototype.setItem = jest.fn();

        const context = {
            logged: true,
            user: { id: 'abc', name: 'xansiety' }
        }

        render(
            <AuthContext.Provider value={ context }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });


    
});