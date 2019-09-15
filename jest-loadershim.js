import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('gatsby');

global.___loader = {
  enqueue: jest.fn() // eslint-disable-line
};
