Feature: New Simulation

    Scenario Outline: Login to Grid Website & Create new project & Create new simulation

        Given User is at the login page
        When User enters username as '<email>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        When User clicks on Navigation Bar
        And User clicks on Projects button
        And the user opens Newly added project
        When the user clicks on New simulation
        And the user enters Simulation name as '<configuration_name>' and Simulation description as '<simulation_description>'
        Then the user clicks on Next button
        And the user adds the models to the simulation by saving it
        # When User clicks on Navigation Bar
        And User clicks on Projects button
        Then the user verifies is Newly added simulation is visible in the Projects screen
        Then the user deletes the created project from projects screen
    
        Examples:
            | email                | password    | configuration_name   | simulation_description                      |
            | shriga1990@gmail.com | GridTest@12 | Interview Simulation | Simulation Description entered successfully |

