/*jshint esversion: 6 */


import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configurable({ adapter: new Adapter() });


describe("ExampleWork component", () => {

  it("Should be a 'section' element", () => {
    let component = shallow(<ExampleWork />);
  });
});
