// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// needed to properly emulate hover functionality
import 'cypress-real-events';

// needed to allow cross-origin navigation
Cypress.on('uncaught:exception', (err) => {
    const msg = err?.message || '';

    // Known noisy error when using cross-origin testing
    const nullPostMessage = msg.includes("Cannot read properties of null (reading 'postMessage')");

    if (nullPostMessage) {
        // return false tells Cypress: "don't fail the test for this one"
        return false;
    }
    // Let Cypress fail on everything else
});