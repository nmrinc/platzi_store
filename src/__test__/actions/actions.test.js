/**
 * @concept TEST ACTIONS
 * @context As part of the unit testing, you need to test the actions used on the project
 */

//@a Import the actions from the project
import actions from '../../actions';
//@a As depending on the actions needs a payload to function, import a mock to pass it as payload.
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;

    //@a Describe what it's expected to happen
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };

    //@a test if it's equal to the action functionality
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart Action', () => {
    const payload = ProductMock;

    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
