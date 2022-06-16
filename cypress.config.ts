import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  },

  e2e: {
    baseUrl: 'http://localhost:3000/algo-visualiser',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
