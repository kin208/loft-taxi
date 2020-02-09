import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import { MainContext, MainContextProvider } from '../../context/mainContext'; 
import Reg from '../../pages/reg';

describe("Register Page Testing", () => {
    it("Login Proceed Testing", () => {

        const subParentCallback = jest.fn();
        
        const MockReg = () => (
            <MainContextProvider>
                <Reg subParentCallback={subParentCallback}>
                    {onSubmit => <div>Some message</div>} 
                </Reg>
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockReg />);
        const data = getByTestId('regForm');

        fireEvent.submit(
            data,
            {
                target: {
                    email: {value: '111'},
                    password: {value: '222'},
                }
            }
        );
        
        expect( subParentCallback ).toBeCalledWith( "map" ); 
    });

    it("Register go to Login Testing", () => {

        const subParentCallback = jest.fn();
        
        const MockReg = () => (
            <MainContextProvider>
                <Reg subParentCallback={subParentCallback}>
                    {onSubmit => <div>Some message</div>} 
                </Reg>
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockReg />); 

        fireEvent.click(
            getByTestId('loginLink') 
        );
        
        expect( subParentCallback ).toBeCalledWith( "login" ); 
    });
    
});
