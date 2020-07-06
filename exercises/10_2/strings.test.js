const strings = require('./strings');

describe('Testando funcoes strings', () => {
  jest.mock("./strings");
  //afterEach(strings..mockReset);
  test('Retornando caixa baixa', () => {
    const mockToUpperCase = jest
      .spyOn(strings, 'toUpperCase')
      .mockImplementation((str) => str.toLowerCase());

    mockToUpperCase('LIZZARD');

    expect(mockToUpperCase).toHaveBeenCalledTimes(1);
    expect(mockToUpperCase('LIZZARD')).toBe('lizzard');
  });

  test('Retornando só a primeira letra', () => {
    const mockOnlyFirstChar = jest
      .spyOn(strings, 'onlyFirstChar')
      .mockImplementation((str) => str.charAt(str.length - 1));

    mockOnlyFirstChar('Lizzard');

    expect(mockOnlyFirstChar).toHaveBeenCalledTimes(1);
    expect(mockOnlyFirstChar('Lizzard')).toBe('d');
  });

  test('Retornando a concatenação de 3 strings', () => {
    const mockConcatenate = jest
      .spyOn(strings, 'concatenate')
      .mockImplementation((str1, str2, str3) => [...str1, ...str2, ...str3].join(''));

      mockConcatenate('Lizzard', 'Medeiros', 'Mock');

      expect(mockConcatenate).toHaveBeenCalledTimes(1);
      expect(mockConcatenate('Lizzard', 'Medeiros', 'Mock')).toBe('LizzardMedeirosMock');
  });

});
