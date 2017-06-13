import React from 'react';
import { shallow } from 'enzyme';
import ListItems from 'components/rsvp/menu/ListItems.js';

describe('<ListItems />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ListItems />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "listitems-component"', function () {
      expect(component.hasClass('listitems-component')).to.equal(true);
    });
  });
});
