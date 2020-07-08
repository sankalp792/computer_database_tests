Feature: As a tester, I wand to test computer sample application
  to verify add, update and delete computer

  Background:
    Given I am on the home page

  Scenario: Add new computer
    When  I click the Add a new computer button
    And I enter "Test 1" in computer name
    And I enter "2014-01-02" in introduced date field
    And I enter "2018-01-02" in discontinued date field
    And I choose company as "IBM"
    And I click the Create this computer button
    Then I see message as "Done! Computer Test 1 has been created"

  Scenario: Edit a computer
    When I search for "Test 1"
    And I click on the first result
    And I wait
    And I enter "Test Update" in computer name
    And I click the Save this computer button
    Then I search for "Test Update"
    And I should see a list of search results

  Scenario: Delete a computer
    When I search for "Test Update"
    And I click on the first result
    And I click the Delete this computer button
    And I search for "Test Update"
    Then I see error as "Nothing to display"



