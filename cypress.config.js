const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k4eprr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
