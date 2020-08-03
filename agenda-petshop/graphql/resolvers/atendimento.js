const Operacoes = require('../../infraestrutura/operations')
const Atendimentos = new Operacoes('atendimento')

const resolvers = {
  Query: {
    atendimentos: () => Atendimentos.lista(),
    atendimento: (root, params) => Atendimentos.buscaPorId(params.id),
  },
  Mutation: {
    adicionarAtendimento: (root, params) => Atendimentos.adiciona(params),
    atualizarAtendimento: (root, params) => Atendimentos.atualiza(params),
    deletarAtendimento: (root, params) => Atendimentos.deleta(params.id),
  }
}

module.exports = resolvers
