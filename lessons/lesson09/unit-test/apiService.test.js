const axios = require('axios');

jest.mock('axios');

describe("Testando chamada para Api Externa", () =>{
    it("Deve retornar os dados simulados da API", async() => {
        const mockedRespones = {data: {id:1}, nome: 'teste'};

        axios.get.mockResolvedValue(mockedRespones);

        const result = await apiService.getData();

        expect(result).toEqual(mockedRespones.data);
    });
});

