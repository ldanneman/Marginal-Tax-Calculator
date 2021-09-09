Feature: Main
    Scenario: See the Home Page
        Given I navigate to the home page
        When the home page has loaded
        Then I see the home page