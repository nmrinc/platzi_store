// @concept TEST REDUCERS

//@a Import the reducer from the project
import reducer from '../../reducers';
//@a Import mock data to use it as payload
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  //@a First test if the reducer return the state when it doesn't receive any action
  test('Return InitialState', () => {
    expect(reducer({}, '')).toEqual({});
  });

  //@a Test an action passed to the reducer
  test('ADD_TO_CART', () => {
    //@a Declare an initialState
    const initialState = {
      cart: [],
    };

    //@a Construct an expected mock
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [
        ProductMock,
      ],
    };

    //@a Test if the action it's equal to the expected
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
