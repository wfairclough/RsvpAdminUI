import React from 'react';
import { shallow } from 'enzyme';
import InvitationDetails from 'components/main/InvitationDetails.js';

describe('<InvitationDetails />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<InvitationDetails />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "invitationdetails-component"', function () {
      expect(component.hasClass('invitationdetails-component')).to.equal(true);
    });
  });
});
