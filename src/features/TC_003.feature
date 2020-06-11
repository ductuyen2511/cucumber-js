
Feature: Unsplash Page
    As a user,
    I want to check that the user can create a new collection and add a photo into it.

    Scenario Outline: Create a new collection and add a photo into it.
        Given I create the collection with API
        And I add a photo "<photo_id>" to collection
        And I open the home page
        And I input username is "<username>"
        And I click on view profile button
        And I click on collection tab
        Then the collection_id is display correctly
        And the photo_id "<photo_id>" is display correctly
        

        Examples:
        | username | photo_id    |  
        | Tuyen Le | Fg0z0GBydqQ |