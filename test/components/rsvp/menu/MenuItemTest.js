import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from 'components/rsvp/menu/MenuItem.js';

describe('<MenuItem />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MenuItem />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "menuitem-component"', function () {
      expect(component.hasClass('menuitem-component')).to.equal(true);
    });
  });
});
