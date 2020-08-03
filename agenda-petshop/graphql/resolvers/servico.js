const Operacoes = require('../../infraestrutura/operations')
const Servicos = new Operacoes('servico')

const resolvers = {
  Query: {
    servicos: () => Servicos.lista(),
    servico: (root, params) => Servicos.buscaPorId(params.id),
  },
  Mutation: {
    adicionarServico: (root, params) => Servicos.adiciona(params),
    atualizarServico: (root, params) => Servicos.atualiza(params),
    deletarServico: (root, params) => Servicos.deleta(params.id),
  }
}

module.exports = resolvers
