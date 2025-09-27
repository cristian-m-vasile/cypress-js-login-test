Feature: Successful login

  Scenario: Login from login page
    Given I am on the login page
    When I sign in with valid credentials
    Then I should land on the user homepage

  Scenario: Login from landing page
    Given I am on the landing page
    Then the navbar should not show my user
    When I click login on the navbar
    And I sign in with valid credentials
    Then I should land on the user homepage
    And the navbar should show my user

