import React from 'react';
import { shallow } from 'enzyme';
import Createitem from 'components/rsvp/menu/Createitem.js';

describe('<Createitem />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Createitem />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "createitem-component"', function () {
      expect(component.hasClass('createitem-component')).to.equal(true);
    });
  });
});
