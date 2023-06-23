import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import WDIOMethods from '../commonFunctions/wdioMethods.js';

import LVHome from '../pageobjects/lvHome.js';

const pages = {
    login: LoginPage,
    lvHome: LVHome
}
let currentPage = ""

Given(/^I am on the (\w+) page$/, async (page) => {
    currentPage = page
    await WDIOMethods.open(pages[currentPage].getURL())
});

Then(/^I should see (.*) as the Page Title$/, async (pageTitle) => {
    await expect(browser).toHaveTitle(pageTitle);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should see banner header as (.*)$/, async (message) => {
    await pages[currentPage].validateBannerHeader(message)
});

Then(/^I should see banner body as (.*)$/, async (message) => {
    await pages[currentPage].validateBannerBody(message)
});

Then(/^I should see (.*) link$/, async (productTitles) => {
    await pages[currentPage].validateLinks(productTitles)
});

Then(/^I click (.*) button$/, async (buttonName) => {
    await pages[currentPage].clickButton(buttonName)
});

Then(/^I scroll the page down to (.*) pixels$/, async (pixelcount) => {
    await browser.scroll(0, parseInt(pixelcount))
});