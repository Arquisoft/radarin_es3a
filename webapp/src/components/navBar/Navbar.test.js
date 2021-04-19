import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });
describe('<Navbar />', () => {
    afterAll(cleanup);


    it('renders without crashing', () => {
        const editor = shallow(<Navbar />);
        expect(editor.find('nav.navbar').length).toEqual(1);
    });
});