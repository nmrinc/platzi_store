import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {

  test('Footer Component Render', () => {
    const footer = mount(Footer);
    expect(footer.length).toEqual(1);
  });

});
