
Feature: Unsplash Page
    As a user,
    I want to check the removed photo from the existed collection.

    Scenario Outline: Check the removed photo from the existed collection.
        Given I create the collection with API
        And I add 2 photos "<photo_id_1>" and "<photo_id_2>" to collection
        And I open the home page
        And I input username is "<username>"
        And I remove photo "<photo_id_2>" from collection
        And I click on view profile button


        Examples:
        | username | photo_id_1  | photo_id_2  |
        | Tuyen Le | Fg0z0GBydqQ | oVMeQqMsgVA |