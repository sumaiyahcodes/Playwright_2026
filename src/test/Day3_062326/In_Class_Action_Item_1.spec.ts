import { test } from '@playwright/test';

test('Wikipedia Search', async ({ page }) => {

    //visit Wikipedia home page
    await page.goto('https://www.wikipedia.org/');

    //wait 2-3 seconds
    await page.waitForTimeout(3000);

    //type a keyword in the search field
    await page.locator("//*[@id='searchInput']").fill('Playwright');

    //click the search button
    await page.locator("//button[@type='submit']").click();

    //wait 2-3 seconds
    await page.waitForTimeout(3000);

    //capture the page heading
    const heading = await page.locator("//*[@id='firstHeading']").textContent();

    // print the heading
    console.log("The page heading is " + heading);

});