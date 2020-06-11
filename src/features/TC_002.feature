
Feature: Unsplash Page
    As a user,
    I want to check all related tags of a photo are correct

    Scenario Outline: Check all related tags of a photo are correct
        Given I get a random photo with API
        And I open the home page
        And I input username is "<username>"
        When I open the random photo url
        Then all related tags are display correctly

        Examples:
        | username |
        | Tuyen Le |
