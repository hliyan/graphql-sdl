// index module implements a simple GraphQL server that serves data from a MongoDB
// database. GraphQL schema is defined using the GraphQL SDL.
const fs = require('fs').promises;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { configs, loadConfigs } = require('./configs');
const { loadSchema } = require('./schema');

// application starting point
startServer({ 
  dbUrl: configs.dbUrl, 
  dbName: configs.dbName 
});

// startServer starts the graphql server
async function startServer({dbUrl, dbName}) {
  loadConfigs();

  let {err, schema} = await loadSchema();
  if (err) {
    console.log('Failed to load schema file');
    console.log(err);
    return;
  }

  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: configs.graphiql
  }));
  app.listen(4000);
  console.log('running...');
}

