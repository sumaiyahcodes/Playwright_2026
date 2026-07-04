import { test } from '@playwright/test'
import { captureTextFromElement, submitOnElement, typeOnElement, visitPage, wait } from '../../main/reusableMethods';

test('Bing search test', async ({ page }) => {

   //navigate to bing.com
   await visitPage(page, 'https://www.bing.com/')

   //enter a keyword on the search field. .fill is same as sendkeys in selenium
   await typeOnElement(page, "//*[@name='q']", 'automation')

   await wait(page, 2000)

   // submit the element
   await submitOnElement(page, "//*[@name='q']")

   //wait few seconds
   await wait(page, 2000)

   //capture the search result text
   let results = await captureTextFromElement(page, "//*[@class='sb_count']");
   console.log(results)
   let arrayReslts = results?.split(' ')
   console.log("Search number is : " + arrayReslts?.[1])
    
});