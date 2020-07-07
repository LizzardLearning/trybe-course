const jokeApi = require('./bonus');

const resolvedValue = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200
};

describe('Testando api de piadas ruins', () => {
  const jokeRequest = jest.spyOn(jokeApi, 'requestJoke');
  test('Request piada', async () => {
    jokeRequest.mockResolvedValue(resolvedValue);
    jokeRequest();
    expect(jokeRequest).toHaveBeenCalled();
    expect(jokeRequest).toHaveBeenCalledTimes(1);
    expect(jokeRequest()).resolves.toBe(resolvedValue);
  });
});