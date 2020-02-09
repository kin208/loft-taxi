import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import { MainContext, MainContextProvider } from '../context/mainContext'; 
 
import App from '../App';
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}));


describe("App Page Testing", () => {
    it("App Page Testing", () => {
 
        
        const MockApp = () => ( 
            <MainContextProvider isLogin={1} >
                <App  /> 
            </MainContextProvider>
        );

        const { getByTestId } = render(<MockApp />);

        expect(getByTestId("AppContainer")).toBeTruthy();
    });
     
});
 