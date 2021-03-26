// import checkPropTypes from 'check-prop-types';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from '../redux/reducers/index';
// import { middleware } from '../redux/store';

const findByTestAttribute = (wrapper, attr) => {
  const component = wrapper.find(`[data-test='${attr}']`);
  return component;
};

// export const checkProps = (component, expectedProps) => {
//   const propsErr = checkPropTypes(
//     component.propTypes,
//     expectedProps,
//     'props',
//     component.name
//   );
//   return propsErr;
// };

// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
//   return createStoreWithMiddleware(rootReducer, initialState);
// };

export default {
  findByTestAttribute,
};
