import React from 'react';
import { shallow } from 'enzyme';
import Guests from 'components/main/Guests.js';

describe('<Guests />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Guests />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "guests-component"', function () {
      expect(component.hasClass('guests-component')).to.equal(true);
    });
  });
});
