const ProdutoService = require ('../services/ProdutoService')

describe('ProdutoService - Testes Unitários com Mocks', () => {
    let service;
    let mockRepository;

    beforeEach(() => {
        mockRepository = {
            findAll: jest.fn(), // função vazia, retorna nada - no teste isso vai ser configurado
            findById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
        };
        service = new ProdutoService(mockRepository);  // Instanciando produto service
    });

    describe('Listar', () => { // Aqui é o teste
        test('Chama repository.findAll uma vez e retorna o resultado', () => { // Aqui é o caso de teste
            const produtos = [{id: 1, nome: "Coxinha", preco: 5}];
            mockRepository.findAll.mockReturnValue(produtos) // vai retornar produtos quando o service faz 'findAll'

            const resultado = service.listar();

            expect(mockRepository.findAll).toHaveBeenCalledTimes(1); // Verificar qnts vezes foi chamado
            expect(resultado).toEqual(produtos)
        });
    }); 

    describe('Listar por ID', () => {
        test('Chama repository.findById uma vez e retorna o resultado', () => {
            const produto = [{}]
            mockRepository.findById.mockReturnValue(1)

            const resultado = service.listar(produto.id);

            expect(mockRepository.findById).toHaveBeenCalledTimes(1);
            expect(resultado).toEqual(produto)
        })
    })
})