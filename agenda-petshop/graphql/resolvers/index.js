const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')

const arquivos = path.join(__dirname, './')
const {
  fileLoader
} = mergeGraphQLSchemas
const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados