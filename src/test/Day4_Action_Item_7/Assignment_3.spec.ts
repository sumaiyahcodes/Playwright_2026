import { test } from '@playwright/test'

test('Disney Search Test', async ({ page }) => {

   //set a standard explicit desktop window size to prevent mobile layout shifts
   await page.setViewportSize({ width: 1280, height: 800 });

   //navigate to home page
   await page.goto('https://www.disney.com/');

   //wait for the homepage to settle completely
   await page.waitForLoadState('networkidle');
   await page.waitForTimeout(3000);

   //hover over quick tools menu to initially open it
   await page.locator('//*[@id="Movies-dropdown"]').hover();
   await page.waitForTimeout(2000);

   //click on the movie link
   await page.locator("//*[@id='Movies-region-desktop']//a[@href='https://movies.disney.com/all-movies']").click();

   //wait for the movies listing page to load completely
   await page.waitForLoadState('networkidle');
   await page.waitForTimeout(4000);

   //click directly on the image element of the poster
   await page.locator("//img[@alt='Gatto']").first().click();

   //wait for the movie details page to load
   await page.waitForLoadState('networkidle');
   await page.waitForTimeout(3000);

   //click on watch teaser
   await page.locator("//a[@data-title='WATCH TEASER']").click();

   //wait for teaser section to open
   await page.waitForTimeout(4000);

   //capture the text string
   let rawResults = await page.locator("//div[contains(@class, 'video-info')]//p[@class='title']").textContent();
   
   //clean it up: split at the pipe character "|" and extract only the first item, then trim spaces
   let cleanTitle = rawResults ? rawResults.split('|')[0].trim() : '';

   console.log("The movie title is : " + cleanTitle);
    
});