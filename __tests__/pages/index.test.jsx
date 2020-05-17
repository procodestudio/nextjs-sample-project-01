import React from 'react';
import { shallow } from 'enzyme';
import App from '../../pages';

describe('App', () => {
  let component;

  beforeAll(() => {
    component = shallow(<App />);
  });

  it('should have a main page', () => {
    const title = component.find('[data-test="welcome-title"]');

    expect(title).toHaveLength(1);
  });
});
