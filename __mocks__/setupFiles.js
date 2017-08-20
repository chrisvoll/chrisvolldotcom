import { graphql } from 'graphql';
import { shallow, mount } from 'enzyme';

global.graphql = graphql;
global.shallow = shallow;
global.mount = mount;
