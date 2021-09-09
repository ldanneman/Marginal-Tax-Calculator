Feature: Calculator Operation
    Scenario Outline: Calculates Marginal Tax Rate
        Given I am on the home page
        When I enter a <salary> amount as input
        And I click Submit
        Then The <result> should be displayed

        Examples:
            | salary  | result |
            | 100000  | 18021  |
            | 25000   | 2801   |
            | 91000   | 15861  |
            | 61259   | 9225   |
            | 5003    | 500    |
            | 1000000 | 334072 |
            | 400651  | 114772 |
            | 38041   | 4366   |
            | 86324   | 14740  |
            | 725694  | 232579 |