import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import { MainContext, MainContextProvider } from '../../context/mainContext'; 
import Map from '../../pages/map'; 

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}));

describe("Map Page Testing", () => {
    it("Map NoAuthorized Testing", () => {
        const subParentCallback = jest.fn();
        
        const MockMap = () => (
            <MainContextProvider >
                <Map subParentCallback={subParentCallback}>  
                    
                </Map>
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockMap />);

        expect(getByTestId("mapNeedLogin")).toBeTruthy(); 
    }); 

    it("Map Authorized Testing", () => {

        const subParentCallback = jest.fn();
        
        // Передаем isLogin = 1 
        const MockMap = () => (
            <MainContextProvider isLogin={1} >
                <Map subParentCallback={subParentCallback} />  
            </MainContextProvider>
        );

        const { getByTestId, getByTest, queryByTestId } = render(<MockMap />);

        expect(getByTestId("mapContainer")).toBeTruthy(); 

        

    }); 
});
