Feature: Login

    Scenario Outline: Login to GridSingularity  Website

        Given User is at the login page
        When User enters username as '<email>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | email | password |
            | shriga1990@gmail.com    | GridTest@12 | 
    