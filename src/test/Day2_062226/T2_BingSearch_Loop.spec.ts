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

    // wait for the results page to finish loading and ensure results count is visible
    await page.waitForLoadState('networkidle')
    const resultsLocator = page.locator("//*[contains(@class,'sb_count')]")
    await resultsLocator.waitFor({ state: 'visible', timeout: 10000 })

    const resultsText = (await resultsLocator.textContent())?.trim() ?? ''
    console.log(`raw results for ${sports[i]!}:`, resultsText)

    const numberStr = resultsText.match(/[\d,]+/)?.[0] ?? '0'
    const resultsNumber = parseInt(numberStr.replace(/,/g, ''), 10)
    console.log(`Search number for ${sports[i]!} is : ${resultsNumber}`)
  }
});