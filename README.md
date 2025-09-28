# Login Automation Framework
[![E2E (Cypress)](https://github.com/cristian-m-vasile/cypress-js-login-test/actions/workflows/cypress.yml/badge.svg)](https://github.com/cristian-m-vasile/cypress-js-login-test/actions/workflows/cypress.yml)

This project is a **Cypress** automation framework for testing login functionality.  
It uses **BDD with Cucumber** and the **Page Object Model (POM)** to ensure maintainability and readability.

## Features

- **Page Object Model (POM)** with clean separation of locators and actions
- **BDD with Cucumber** (`.feature` + step definitions)
- **Login flow coverage**:
    - Successful login
    - Logout
    - Invalid credentials (wrong password, invalid email)
    - Empty fields (email, password)
- **Cross-origin navigation handling**
- **Hover actions** using [`cypress-real-events`](https://github.com/dmtrKovalenko/cypress-real-events)
- **Targeted exception handling** for noisy `postMessage` errors during cross-origin login
- **CI integration with GitHub Actions** (screenshots/videos uploaded as artifacts)


## Tech Stack

- [Cypress](https://www.cypress.io/) `^15.3.0`
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [ESBuild](https://esbuild.github.io/) (fast preprocessing)
- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events)

## Pre-requisites

1. install node & npm: `https://nodejs.org/en/download/package-manager`

## How to run

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `cypress.env.json` file in the project root with your secure credentials:

```json
{
  "USER_EMAIL": "user@example.com",
  "USER_PASSWORD": "YourSecurePassword"
}
```

### 3. Open Cypress runner
```bash
npx cypress open
```
If you're new to Cypress, select 'Continue' on the 'What's new' menu, then 'E2E testing', then 'Chrome', then select
each feature file one by one.

### 4. Run tests headless
```bash
npx cypress run
```


## CI/CD with GitHub Actions

The workflow is defined in `.github/workflows/cypress.yml`.  
It runs Cypress tests on **Node 20 + Chrome**, and uploads videos/screenshots as artifacts.
The secrets are already set up in Github Actions.

## Notes and potential bugs
1. When I am in the account settings, if I click on 'Cancel', nothing happens. This lack of feedback makes the user wonder 
if their actions were registered. I would suggest to be redirected to the Home Screen upon clicking 'Cancel'. This is
something I would normally chat to the product owner about.
2. Once I change my name in the profile settings and click on 'Save Changes', I get a success message. However, the
profile name in the dop right corner doesn’t change. My expectation is that 'Save Changes' triggers the name to refresh. 
I would talk to the product owner about this.
3. There are two elements on the user home page with `data-qa-id="webnav-usermenu-logout"`. I had to use a slightly
hacky `.first()` selector to get around this, but normally I would have a chat with the developers, as having two elements
with the same ID defeats the purpose.
4. Minor note: Throughout the HTML, the email field is referred to as `username` in all IDs except for the invalid email 
error, which is `error-cs-email-invalid`. I recommend it be renamed to `error-cs-username-invalid` for consistency and 
to avoid unexpected behaviour when refactoring.

## Future Improvements

The exercise was timeboxed to 2-3 hours. If I had more time, this is what I would have improved:
- Add **TypeScript** for stronger type safety
- Add **custom Cypress commands** for common flows (e.g., login/logout)
- Add **test tags** (`@smoke`, `@regression`) for selective runs
- Extend with **API-level tests** for faster feedback
- Improve reporting (e.g., Mochawesome or Allure)
- Test resetting the password using a secret that’s continuously reset in GitHub actions
- Run basic security checks like testing SQL injection / XSS attempts (not attempted as I only have access to the
production environment)
