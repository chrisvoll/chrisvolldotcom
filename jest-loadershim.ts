import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('gatsby');

// @ts-ignore - assigning to global is ok here
global.___loader = {
  enqueue: jest.fn()
};
