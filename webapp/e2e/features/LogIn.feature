Feature: Loggin user

Scenario: A user logs in
  Given A logged out user
  When The user logs in
  Then User goes to friendlist