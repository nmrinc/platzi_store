import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {

  const footer = mount(<Footer />);

  test('Footer Component Render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Title Render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

});

/**
 * @concept Snapshot
 * @context When a component won't change gradually, you can take a snapshot to compare it and know if there was changes
 * @o As the snapshot needs to be a json file. Will use the react-test-renderer dependency to convert the component to plain Js.
*/
describe('Footer Snapshot', () => {
  test('Check UI of <Footer />', () => {
    const footer = create(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});

/**
 * @concept Update Snapshot
 * @context When there's a previous snapshot, but a change it's required. You can update the snapshot with the change so can pass the test
 * @a You need to run the next codes
 * @tst >jest --updateSnapshot
 * ----------------------------------------------------------------
 * @o Additionally, you can add the script to package
 * @tst "test:update": "jest --updateSnapshot"
*/
