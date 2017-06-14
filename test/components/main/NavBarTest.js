import React from 'react';
import { shallow } from 'enzyme';
import NavBar from 'components/main/NavBar.js';

describe('<NavBar />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<NavBar />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "navbar-component"', function () {
      expect(component.hasClass('navbar-component')).to.equal(true);
    });
  });
});
