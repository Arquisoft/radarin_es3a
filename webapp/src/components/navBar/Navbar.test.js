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
        const expectedOutput = '<p class="logoLetra"><img src="/navbarIcon.svg" to="/" class="logo" class="navbar-brand " alt="Radarin"/>RADARIN</p>';
        const realOutput = editor.find('p').html();
        console.log(realOutput);
        expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
    });
});