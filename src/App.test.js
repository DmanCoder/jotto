import { shallow } from 'enzyme';

// Component
import App from './App';

// UTILS
import allUTL from './utils/allUTL';

const { findByTestAttribute } = allUTL.testingUTL;

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('<App />', () => {
  it('Should render without errors', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttribute(wrapper, 'app-component');
    expect(appComponent.length).toBe(1);
  });
});
