import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import { MainContext, MainContextProvider } from '../../context/mainContext'; 
import Login from '../../pages/login';

describe("Login Page Testing", () => {
    it("Login Proceed Testing", () => {

        const subParentCallback = jest.fn();
        
        const MockLogin = () => (
            <MainContextProvider>
                <Login subParentCallback={subParentCallback}>
                    {onSubmit => <div>Some message</div>} 
                </Login>
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockLogin />);
        const data = getByTestId('loginForm');

        fireEvent.submit(
            data,
            {
                target: {
                    login: {value: '111'},
                    pass: {value: '222'},
                }
            }
        );
        
        expect( subParentCallback ).toBeCalledWith( "map" ); 
    });

    it("Login go to Register Testing", () => {

        const subParentCallback = jest.fn();
        
        const MockLogin = () => (
            <MainContextProvider>
                <Login subParentCallback={subParentCallback}>
                    {onSubmit => <div>Some message</div>} 
                </Login>
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockLogin />); 

        fireEvent.click(
            getByTestId('registerLink') 
        );
        
        expect( subParentCallback ).toBeCalledWith( "register" ); 
    });
    
});
