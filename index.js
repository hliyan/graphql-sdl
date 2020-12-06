// index module implements a simple GraphQL server that serves data from a MongoDB
// database. GraphQL schema is defined using the GraphQL SDL.
const fs = require('fs').promises;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { configs, loadConfigs } = require('./configs');
const { loadSchema } = require('./schema');
const resolvers = require('./resolvers');

// application starting point
startServer({ 
  dbUrl: configs.dbUrl, 
  dbName: configs.dbName 
});

// startServer starts the graphql server
async function startServer({dbUrl, dbName}) {
  loadConfigs();

  let res = await loadSchema();
  if (res.err) {
    console.log('Failed to load schema file');
    console.log(res.err);
    return;
  }

  const {schema} = res;
  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema, 
    rootValue: resolvers, 
    graphiql: configs.graphiql
  }));
  app.listen(4000);
  console.log('running...');
}

