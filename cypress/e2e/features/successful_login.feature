Feature: Successful login

  Scenario: Login from login page
    Given I am on the login page
    When I sign in with valid credentials
    Then I should land on the user homepage
