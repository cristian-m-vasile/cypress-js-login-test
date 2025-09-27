const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://www.hudl.com",
        specPattern: "cypress/e2e/**/*.feature",
        supportFile: "cypress/support/e2e.js",
        async setupNodeEvents(on, config) {
            // Set up the cucumber preprocessor plugin
            await addCucumberPreprocessorPlugin(on, config);

            // Use esbuild to preprocess .feature files
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
    },
});
