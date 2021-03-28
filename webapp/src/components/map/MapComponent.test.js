// import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import ShallowRenderer from 'react-test-renderer/shallow';
// import ReactDOM from 'react-dom';
// import MapComponent from './MapComponent';

configure({adapter: new Adapter()});
describe('<MapComponent />',()=>{
    it('renders without crashing', () => {
        // const div = document.createElement('div');
        // ReactDOM.render(<MapComponent />);
    });


});