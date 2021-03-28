import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';


configure({adapter: new Adapter()});
describe('<App />',()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    it('renders the welcome message', () => {
        const editor = shallow(<FriendList />);
        console.log(editor.find('h1').length);
        expected(editor.find('h1').length).toEqual(1);


    });
    // it('renders an output area', () => {
    //     const editor = shallow(<App />);
    //     expected(editor.find('div.welcome').length).toEqual(1);

    // });

    // it('renders an output area', () => {
    //     const editor = shallow(<App />);
    //     const expectedOutput = '<div class="welcome"><h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p></div>';
    //     const realOutput = editor.find('div.welcome').html();


    //     expected(realOutput.indexOf(expectedOutput)> -1).toEqual(true);

    // });

    // it('renders an output area', () => {
    //     const editor = shallow(<App />);
    //     const expectedOutput = '<div class="welcome"><h1>Bienvenidos a Radarin</h1><p>En esta aplicacion podras localizar a tus amigos cercanos</p></div>';
    //     const realOutput = editor.find('div.welcome').html();

    //     editor.setState({ value: ""});
    //     expected(realOutput.indexOf(expectedOutput)> -1).toEqual(true);
    //     console.log(realOutput.indexOf(expectedOutput));
    // });


});
// 




// test('<FriendList />', () => {
    // test('renders learn react link', () => {
    //     render(<App />);
    //     const linkElement = screen.getByText(/Source code/i);
    //     //'<button class="solid auth login">Log in</button>'
    //     expect(linkElement).toBeInTheDocument();
    // });

    // test('renders the friendlist list', () => {
    //     const editor = shallow(<FriendList />);
    //     const expectedOutput = '';
    //     const realOutput = editor.find('div.makeStyles-friend-7').html();

    // });
// });