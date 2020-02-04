import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
 
import Profile from '../../pages/profile';

describe("Profile Page Testing", () => {
    it("Profile Page Testing", () => {
 
        const subParentCallback = jest.fn();
        
        const MockProfile = () => ( 
                <Profile subParentCallback={subParentCallback}  /> 
        );

        const { getByTestId } = render(<MockProfile />);

        expect(getByTestId("profileForm")).toBeTruthy();
    });
     
});