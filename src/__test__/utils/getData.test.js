// @concept TEST FETCH CALL
// @a Import the fetch util function
import getData from '../../utils/getData';

describe('Fetch API', () => {
  // @a Setup a fetch function that will resolver before each test.
  beforeEach(() => {
    // @o With the help of the jest-fetch-mock, call a reset to the fetch
    fetch.resetMocks();
  });

  // @a Test the fetch util
  test('Call API and return data', () => {
    // @a setup a mock reponse as a JSON data with a string and parse it
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    // @a Use the getData util with any url. As we only need to make a connection as mock
    getData('https://google.com')
      .then((response) => {
        // @a inside the response test it as equal to the mock response
        expect(response.data).toEqual('12345');
      });

    // @a Test if the fetch really pass the url to the function
    // @o With the calls array, in the 0 and 0 position must return the given url
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});
