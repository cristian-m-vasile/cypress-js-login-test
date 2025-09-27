Feature: Unsuccessful login

  Background:
    Given I am on the login page

  Scenario: Invalid email triggers validation
    When I attempt to sign in with an invalid email
    Then I should remain on the login page
    Then I should see an invalid email error

  Scenario: Empty email triggers validation
    When I attempt to sign in with an empty email
    Then I should remain on the login page
    And I should see an empty email error

  Scenario: Empty password triggers validation
    When I attempt to sign in with a valid email
    And an empty password
    Then I should remain on the login page
    And I should see an empty password error

  Scenario: Email password mismatch triggers error
    When I attempt to sign in with a valid email
    And the wrong password
    Then I should remain on the login page
    And I should see an email password mismatch error
    