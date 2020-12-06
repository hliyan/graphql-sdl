// schema module is responsible for loading the GraphQL schema from SDL from file
const fs = require('fs').promises;
const { buildSchema } = require('graphql');

// loadSchema returns a GraphQLSchema object loaded from SDL file
// e.g. const {schema, err} = await loadSchema();
async function loadSchema() {
  try {
    const schemaStr = await fs.readFile('schema.graphql', 'utf8');
    return {schema: buildSchema(schemaStr) };
  } catch (err) {
    return { err };
  }
}

module.exports = {loadSchema};

