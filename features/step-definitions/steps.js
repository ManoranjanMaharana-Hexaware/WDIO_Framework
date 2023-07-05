import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
// import WDIOMethods from '../commonFunctions/wdioMethods.js';
import LVHome from '../pageobjects/lvHome.js';
import LVLife from '../pageobjects/lvLife.js';


let currentPage = ""
const pages = {
    login: LoginPage,
    lvHome: LVHome,
    lvlife: LVLife
}


// Browser related operations
/* Goto URL */
Given(/^I am on the (\w+) page$/, async (page) => {
    currentPage = page
    await browser.maximizeWindow()
    await browser.url(pages[currentPage].getURL())
});

/* Page Title */
Then(/^I should see (.*) as the Page Title$/, async (pageTitle) => {
    await expect(browser).toHaveTitle(pageTitle);
});

/* Page Scrolling */
Then(/^I scroll the page down to (.*) pixels$/, async (pixelcount) => {
    await browser.scroll(0, parseInt(pixelcount))
});







When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should see (.*) text as (.*)$/, async (where, what) => {
    await expect(await pages[currentPage].getTextFromComponent(where)).toHaveText(what)
});

Then(/^I should see (.*) link$/, async (productTitles) => {
    await expect(pages[currentPage].getLinks(productTitles)).toHaveText(productTitles)
});

Then(/^I click (.*) button$/, async (buttonName) => {
    let button = pages[currentPage].getButton(buttonName)
    if(await button.isExisting())
        await button.click()
});