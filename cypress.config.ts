const { defineConfig } = require('cypress')

module.exports = defineconfig({
  "testFiles": "**/*.spec.{js,ts,jsx,tsx}",
  "componentFolder": "src"
})
