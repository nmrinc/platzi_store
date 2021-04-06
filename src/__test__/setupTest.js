/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/**
 * @concept MOCK FOR FETCH TESTING
 * @context As we need to a mock for testing fetch actions
 * @a Require the jest-fetch-mock library as global. So we can use it on the test
 */
global.fetch = require('jest-fetch-mock');
