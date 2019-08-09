import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './Components/Navigation';
import renderer from 'react-test-renderer';


it('should need to find Navigation ', () =>
{
     const wrapper = shallow(<Navigation {...props} />);
     assert.lengthOf(wrapper.find(".nav__container"), 1);

  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
