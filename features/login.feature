Feature: automate a booking
    In order to automate a booking up to a declined payment
    As a user
    I want to get a declined payment error

    Scenario: In order to automate a booking up to a declined payment
        Given I go to "https://www.ryanair.com/ie/en"
        When I click One way
        Then I set "Dublin" as the departure 
        Then I set "Berlin Schönefeld" as the destination
        Then I set the date to "2020-03-31"
        Then I add 2 Adults and 1 Children
        Then I click Search
        Then I select my flight
        Then I select the fare type
        Then I click on login
        Then I login as "shekleton.bryan@gmail.com" with password "Ryanair01:P"
        Then I fill out Title "Mr" Name "Joe" Surname "Blogs" position 1
        Then I select saved person "Mary"
        Then I fill out Name "Baby" Surname "Blogs" position 1
        Then I click continue
        Then I click on Okay, got it.
        Then I select row 28 seat 1
        Then I select row 28 seat 2
        Then I select row 28 seat 3
        Then I click on continue
        Then I say no thanks to fast track 
        Then I select small bags
        Then I select continue 
        Then I say No, Thanks to extra bags
        Then I click continue to next
        Then I click on total
        Then I click checkout
        Then I fill out the text fields
        Then I fill out the checkbox fields
        Then I fill out the dropdown fields
        Then I click Pay now
        Then I should get payment declined message
        











