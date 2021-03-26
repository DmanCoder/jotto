import { shallow } from 'enzyme';

// Component
import Congrats from './congrats';

// UTILS
import allUTL from '../../utils/allUTL';

const { findByTestAttribute } = allUTL.testingUTL;

const setUp = (props = {}) => {
  const component = shallow(<Congrats {...props} />);
  return component;
};

describe('<Congrats />', () => {
  it('Should render without errors', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttribute(wrapper, 'congrats-component');
    expect(appComponent.length).toBe(1);
  });

  it('Should render not text when `success` prop is false', () => {});
  it('Should render non-empty congrats message when success prop is true', () => {});
});
