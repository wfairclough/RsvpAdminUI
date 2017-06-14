import React from 'react';
import { shallow } from 'enzyme';
import Registry from 'components/main/Registry.js';

describe('<Registry />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Registry />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "registry-component"', function () {
      expect(component.hasClass('registry-component')).to.equal(true);
    });
  });
});
