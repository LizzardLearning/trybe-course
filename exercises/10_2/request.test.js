const req = require('./request');

describe('Testando request API', () => {
  const requestApi = jest.spyOn(req, 'requestApi');
  afterEach(requestApi.mockReset);

  test('Teste sucesso', async () => {
    requestApi.mockResolvedValue('Requisição feita com sucesso');

    requestApi();
    expect(requestApi).toHaveBeenCalled();
    expect(requestApi).toHaveBeenCalledTimes(1);
    expect(requestApi()).resolves.toBe('Requisição feita com sucesso');
  });

  test('Teste falha', async () => {
    requestApi.mockRejectedValue('Requisição falha');

    requestApi();
    expect(requestApi).toHaveBeenCalled();
    expect(requestApi).toHaveBeenCalledTimes(1);
    expect(requestApi()).rejects.toBe('Requisição falha');
  });
});