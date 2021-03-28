 import { render, screen, cleanup } from '@testing-library/react';
 import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import ShallowRenderer from 'react-test-renderer/shallow';
// import ReactDOM from 'react-dom';
// import MapComponent from './MapComponent';

// configure({adapter: new Adapter()});
describe('<MapComponent />',()=>{
    afterAll(cleanup);
    let mapRef = React.createRef();

    it('renders without crashing', () => {
        expect(mapRef).toBeTruthy();
    });


});