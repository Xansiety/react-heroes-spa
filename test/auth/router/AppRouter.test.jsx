import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { AppRouter } from '../../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrar el login si no está autenticado', () => { 
        const context = { logged: false } 
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ context }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        ); 
        // screen.debug()
        expect( screen.getAllByText('Login').length ).toBe(2) 
    });

    test('debe de mostrar el componente de Marvel si está autenticado', () => { 
        const context = {
            logged: true,
            user: { id: 'ABC', name: 'Xansiety' }
        } 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ context }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        ); 
        // screen.debug()
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);  
    });


});