
Feature: Unsplash Page
    As a user,
    I want to verify the current location of user

    Scenario Outline: Verify the location is display correctly
        Given I open the home page
        And I input username is "<username>"
        And I click on view profile button
        When I click on edit profile button
        Then the location "<location>" is display correctly
        Examples:
            | username | location |
            | Tuyen Le | Vietnam  |


