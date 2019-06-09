const { routes } = require('./src/routes');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  Object.keys(routes).forEach(route => createPage(routes[route]));
};
