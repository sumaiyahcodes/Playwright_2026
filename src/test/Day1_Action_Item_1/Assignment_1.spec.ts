import { test } from "@playwright/test";

test('Assignment 1', async ({ page }) => {

    //visit brave search home page
    await page.goto('https://search.brave.com/');

    //put 2-3 seconds to wait
    await page.waitForTimeout(3000);

    //type a keyword on the brave search field
    await page.locator("//*[@id='searchbox']").fill('Samsung Fridge');

    //click on ask next to the search field
    await page.locator("//*[@id='submit-llm-button']").click();

    //wait 2-3 seconds
    await page.waitForTimeout(3000);

    //capture full text and store it in a string variable
    const result = await page.locator("//*[@class='message assistant llm-output svelte-t22puq first']").textContent();

    //print out the entire text
    console.log("The result is " + result);

});