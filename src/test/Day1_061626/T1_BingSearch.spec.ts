import { test } from "@playwright/test";

test('Bing search test', async ({ page }) => {

   // navigate to bing.com
   await page.goto('https://www.bing.com/')

   // enter a keyword on the search field
   await page.locator("//*[@name='q']").fill('Playwright')

   // submit with keyboard enter and wait for network to be idle
   await Promise.all([
      page.waitForLoadState('networkidle'),
      page.keyboard.press('Enter')
   ])

   // wait for the results count element to appear
   const resultsLocator = page.locator("//*[contains(@class,'sb_count')]")
   await resultsLocator.waitFor({ state: 'visible', timeout: 10000 })

   // get text safely and parse number
   const resultsText = (await resultsLocator.textContent())?.trim() ?? ''
   console.log('raw results text:', resultsText)

   const numberStr = resultsText.match(/[\d,]+/)?.[0] ?? '0'
   const resultsNumber = parseInt(numberStr.replace(/,/g, ''), 10)
   console.log('Search number is : ' + resultsNumber)

});