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

    //wait for the results page to finish loading
    await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {})

    //capture the search result text from the visible page text
    const bodyText = await page.locator('body').textContent() ?? '';
    const match = bodyText.match(/about\s+([0-9,]+)\s+results/i);

    if (!match?.[1]) {
      throw new Error(`Could not find result count for ${sports[i]!}`);
    }

    console.log(`Search number for ${sports[i]!} is : ${match[1]}`);
  }
});