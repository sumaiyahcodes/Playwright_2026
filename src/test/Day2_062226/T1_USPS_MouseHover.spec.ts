import test from "playwright/test";

test('USPS Mouse Hover Test', async ({ page }) => {

    //navigate to usps home page
    await page.goto('https://www.usps.com/');

    //hover over quick tools menu
    await page.locator("//*[text()='Quick Tools']").hover();

    //click on track a package link
    await page.locator('text=Track a Package').click();

});