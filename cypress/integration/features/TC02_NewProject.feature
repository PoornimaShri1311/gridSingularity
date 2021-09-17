Feature: New Project

    Scenario Outline: Login to Grid Website & Create new project

        Given User is at the login page
        When User enters username as '<email>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        When User clicks on Navigation Bar
        And User clicks on Projects button
        Then the user verifies if the project screen is opened
        When the user clicks on New Project button
        And the user Enters Project name as '<Project_name>' and Project Description as '<Project_Description>'
        When the user clicks on Add button
        Then the user verifies the newly created project is visible in the project screen
        Examples:
            | email                | password    | Project_name | Project_Description                                  |
            | shriga1990@gmail.com | GridTest@12 | TestProject  | GridSingularity Interview project added successfully |

