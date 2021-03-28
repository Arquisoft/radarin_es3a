import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';

describe('<App />',()=>);

it('renders without crashing',() =>{
    const div = document.createElement('div');
    ReactDOM.render(<App/>,div);
});


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