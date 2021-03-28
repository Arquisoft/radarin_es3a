import { render, cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';


it('App renders without crashing', () => {
    afterAll(cleanup);
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });