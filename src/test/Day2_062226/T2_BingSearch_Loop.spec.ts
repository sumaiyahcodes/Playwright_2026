import { test } from '@playwright/test';

test('Bing Searches with multiple keywords', async ({ page }) => {
  //declare the array list
  let sports: string[] = [];
  sports.push('soccer');
  sports.push('golf');
  sports.push('tennis');

  for (let i = 0; i < sports.length; i++) {
    //navigate to bing.com
    await page.goto('https://www.bing.com/')

    //enter a keyword on the search field. .fill is same as sendkeys in selenium
    await page.locator("//*[@name='q']").fill(sports[i]!)

    await page.waitForTimeout(2000)

    // submit with keyboard enter
    await page.keyboard.press('Enter')

    //wait few seconds
    await page.waitForTimeout(3000)

    //capture the search result text
    let results = await page.locator("//*[@class='sb_count']").textContent()
    console.log(results)
    let arrayReslts = results?.split(' ')
    console.log("Search number for " + sports[i]! + " is : " + arrayReslts?.[1])
  }
});