import { test } from "@playwright/test";

test('Bing search test', async ({ page }) => {

   //navigate to bing.com
   await page.goto('https://www.bing.com/')

   //enter a keyword on the search field. .fill is same as sendkeys in selenium
   await page.locator("//*[@name='q']").fill('Playwright')

   await page.waitForTimeout(2000)

   // submit with keyboard enter
   await page.keyboard.press('Enter')

   //wait few seconds
   await page.waitForTimeout(3000)

   //capture the search result text
   let results = await page.locator("//*[@class='sb_count']").textContent()
   console.log(results)
   let arrayReslts = results?.split(' ')
   console.log("Search number is : " + arrayReslts?.[0])
    
});