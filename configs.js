// configs module provides all environment specific configs to the application

const configs = {};

// defaultConfigs acts as both config defintions and default values
const defaultConfigs = {
  dbUrl: 'mongodb://localhost:27017',
  dbName: 'test',
  graphiql: true
};

// loadConfigs loads all application configs from environment, or uses defaults
function loadConfigs() {
  for (let name in defaultConfigs) {
    configs[name] = (name in process.env) ? process.env[name] : defaultConfigs[name];
  }
}

module.exports = { configs, loadConfigs };
