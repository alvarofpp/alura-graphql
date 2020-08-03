const Operacoes = require('../../infraestrutura/operations')
const Clientes = new Operacoes('cliente')

const resolvers = {
  Query: {
    clientes: () => Clientes.lista(),
    cliente: (root, params) => Clientes.buscaPorId(params.id),
  },
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
    atualizarCliente: (root, params) => Clientes.atualiza(params),
    deletarCliente: (root, params) => Clientes.deleta(params.id),
  }
}

module.exports = resolvers
