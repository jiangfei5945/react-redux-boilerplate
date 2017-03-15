import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../../src/components/Button';

function setup() {
  const props = {
    color: '#111'
  }

  const enzymeWrapper = shallow(<Button {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Button', () => {
    it('color should be same as color of props', () => {
      const { enzymeWrapper, props} = setup();

      expect(enzymeWrapper.find('button').prop('style')['backgroundColor']).to.equal(props.color);
    })
  });
});