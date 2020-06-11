
Feature: Unsplash Page
    As a user,
    I want to check like a random photo

    Scenario Outline: Check like a random photo
        Given I get a random photo with API
        And I have the number of like before i like
        And I open the home page
        And I input username is "<username>"
        And I open the random photo url
        When I like a photo
        Then the number of likes are display correctly

        Examples:
        | username | photo_id    |  
        | Tuyen Le | Fg0z0GBydqQ |