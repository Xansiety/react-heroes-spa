import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { PublicRoute } from "../../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("Debe de mostrar el children si no esta autenticado", () => {
    const context = { logged: false };
    render(
      <AuthContext.Provider value={context}>
        <PublicRoute >
            <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    //screen.debug()
    expect(screen.getByText('Ruta publica')).toBeTruthy()
  });


  test('debe de navegar si está autenticado', () => {  
    const contextValue = {
        logged: true,
        user: {
            name: 'Xansiety',
            id: 'ABC123'
        }
    } 
    render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}> 
                <Routes>
                    <Route path='login' element={
                        <PublicRoute>
                            <h1>Ruta pública</h1>
                        </PublicRoute>
                    } />
                    <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                </Routes> 
            </MemoryRouter>
        </AuthContext.Provider>
    );
    // screen.debug()
    expect( screen.getByText('Página Marvel') ).toBeTruthy();


})



});
