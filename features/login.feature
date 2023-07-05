Feature: lv.com test

  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |

  Scenario Outline: As a user, I Can go to lv.com and validate the welcome page texts

    Given I am on the lvHome page
    Then I click Accept Cookies button
    Then I should see LV= Insurance, Life, Investments, Pensions & Retirement as the Page Title
    Then I should see Banner Header text as <bannerHeader>
    Then I should see Banner Body text as <bannerBody>

    Examples:
      | bannerHeader   | bannerBody                                              |
      | Welcome to LV= | Looking after what you love in life, today and tomorrow |

  Scenario Outline: Scrolling the page down, as the page is lazy loading

    Then I scroll the page down to 1000 pixels
    
  Scenario Outline: Validate all the links in the page

    Then I should see <products> link

    Examples:
      | products                |
      | Car Insurance           |
      | Life Insurance          |
      | Home Insurance          |
      | Multi Cover Insurance   |
      | Pensions & Retirement   |
      | I'm a Financial Adviser |
  
  Scenario Outline: As a user, I want to go to lv.com/life and validate the below scenarios

    Given I am on the lvlife page
    Then I click Accept Cookies button
    Then I should see Life, Investments, Pensions & Equity Release | LV= as the Page Title
    Then I should see Header Paragraph text as <headerPara>

    Examples:
      | headerPara |
      | We know a thing or two about protecting your future, your family and your finances |