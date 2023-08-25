const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gorest.co.in/public/v2/users',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
