// schema module is responsible for loading the GraphQL schema from SDL from file
const fs = require('fs').promises;
const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./resolvers');


// loadSchema returns a GraphQLSchema object loaded from SDL file
// e.g. const {schema, err} = await loadSchema();
async function loadSchema() {
  try {
    const typeDefs = await fs.readFile('schema.graphql', 'utf8');
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });
    return {schema};
  } catch (err) {
    return { err };
  }
}

module.exports = {loadSchema};

