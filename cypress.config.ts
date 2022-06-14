const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "testFiles": "**/*.spec.{js,ts,jsx,tsx}",
  "componentFolder": "src"
})
