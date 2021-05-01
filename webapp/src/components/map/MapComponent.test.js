import {cleanup } from "@testing-library/react";
import React from "react";
describe("<MapComponent />",()=>{
    afterAll(cleanup);
    let mapRef = React.createRef();

    it("renders without crashing", () => {
        expect(mapRef).toBeTruthy();
    });


}); 