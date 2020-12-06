const hello = () => {
  return 'Hello world...';
};

const goodbye = () => {
  return 'Goodbye';
};

const properties = () => {
  return [{id: '1', address: '1 Broadway, NY'}];
};

module.exports = {
  Query: {
    hello,
    goodbye,
    properties
  },
  Property: {
    id(property) { return property.id },
    address(property) { return property.address + ', USA' }
  }
};
