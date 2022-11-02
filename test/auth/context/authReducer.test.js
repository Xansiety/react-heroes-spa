import { authReducer, types } from "../../../src/auth"; 


const initialState = { 
    logged: false 
  }
  
describe('Pruebas en authReducer', () => {  
   
    test('Debe de retornar el estado por defecto', () => { 
        const newState = authReducer(initialState, {});
        expect( newState ).toEqual( initialState );
     })


     test('Debe de (login) llamar el login autenticar y establer el usuario', () => {  
        const user = { id: "ABC", name: 'Xansiety' };
        const action = { type: types.login, payload: user };  
        const newState = authReducer({logged: false }, action);
        expect( newState ).toEqual({ 
            logged: true,
            user: action.payload
          });
     })
 
     test('Debe de (logout) boorar el usuario, y logged en false', () => {  
        const user = { id: "ABC", name: 'Xansiety' };
        const state = { 
            logged: true,
            user
        };   
        const action = { type: types.logout };  
        const newState = authReducer(state, action);
        expect( newState ).toEqual({ 
            logged: false 
          });
     })
 
})