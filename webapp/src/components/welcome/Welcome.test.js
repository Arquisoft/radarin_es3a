import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

// import App from './App';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';


configure({adapter: new Adapter()});
describe('<Welcome />',()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Welcome />, div);
    });
    // it('renders the welcome message header1', () => {
    //     const editor = shallow(<App />);
    //     console.log(editor.find('h1').length);
    //     expect(editor.find('h1').length).toEqual(1);


    // });
    // it('renders an welcome div', () => {
    //     const editor = shallow(<App />);
    //     expect(editor.find('div.welcome').length).toEqual(1);

    // });

    // it('renders the message of the welcome div', () => {
    //     const editor = shallow(<App />);
    //     const expectedOutput = '<div class="welcome"><h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p></div>';
    //     const realOutput = editor.find('div.welcome').html();


    //     expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);

    // });

    // it('renders an output area', () => {
    //     const editor = shallow(<App />);
    //     const expectedOutput = '<div class="welcome"><h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p></div>';
    //     const realOutput = editor.find('div.welcome').html();

    //     editor.setState({ value: ""});
    //     expect(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
    //     console.log(realOutput.indexOf(expectedOutput));
    // });


});