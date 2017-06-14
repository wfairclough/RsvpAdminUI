import React from 'react';
import { shallow } from 'enzyme';
import Invitations from 'components/main/Invitations.js';

describe('<Invitations />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Invitations />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "invitations-component"', function () {
      expect(component.hasClass('invitations-component')).to.equal(true);
    });
  });
});
