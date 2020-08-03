const Operacoes = require('../../infraestrutura/operations')
const Pets = new Operacoes('pet')

const resolvers = {
  Query: {
    pets: () => Pets.lista(),
    pet: (root, params) => Pets.buscaPorId(params.id),
  },
  Mutation: {
    adicionarPet: (root, params) => Pets.adiciona(params),
    atualizarPet: (root, params) => Pets.atualiza(params),
    deletarPet: (root, params) => Pets.deleta(params.id),
  }
}

module.exports = resolvers
