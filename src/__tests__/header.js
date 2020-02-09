import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import { MainContext, MainContextProvider } from '../context/mainContext'; 
 
import Header from '../header'; 


describe("Header Page Testing", () => {
    it("Header Authorized Testing", () => {
 
        
        const parentCallback = jest.fn();

        const MockHeader = () => ( 
            <MainContextProvider isLogin={1} >
                <Header page="map" parentCallback={parentCallback} /> 
            </MainContextProvider>
        );

        const { getByTestId } = render(<MockHeader />);

        expect(getByTestId("userInfo")).toBeTruthy();
    });
     
    it("Header NoAuthorized Testing", () => {
 
        const parentCallback = jest.fn();
        
        const MockHeader = () => ( 
            <MainContextProvider isLogin={0} >
                <Header page="map" parentCallback={parentCallback} /> 
            </MainContextProvider>
        );

        const { getByTestId } = render(<MockHeader />);

        expect(getByTestId("noUserInfo")).toBeTruthy();
    });
});
 