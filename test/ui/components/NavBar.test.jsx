import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));
 
describe('Pruebas en <Navbar />', () => {

    const context = {
        logged: true,
        user: {
            name: 'Xansiety'
        },
        onLogout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar el nombre del usuario', () => { 
        render(
            <AuthContext.Provider value={ context}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        ); 
        expect( screen.getByText('Xansiety') ).toBeTruthy(); 
    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={ context}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        // screen.debug()
        const logoutBtn = screen.getByRole('button'); 
        // console.log(logoutBtn)
        fireEvent.click( logoutBtn );  
        expect( context.onLogout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true}) 
    });

    
});
