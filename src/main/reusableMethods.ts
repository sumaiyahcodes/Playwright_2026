//method to type on an element
export async function typeOnElement(page: any, xpath: string, value: string){
    await page.locator(xpath).fill(value);
}

//method to submit on an element
export async function submitOnElement(page: any, xpath: string){
    await page.locator(xpath).press('Enter');
}

//method to click on an element
export async function clickOnElement(page: any, xpath: string){
    await page.locator(xpath).first().click();
}

//method to click on an element by index
export async function clickOnElementByIndex(page: any, xpath: string, index: number){
    await page.locator(xpath).nth(index).click();
}

//method to hover on an element
export async function hoverOnElement(page: any, xpath: string){
    await page.locator(xpath).first().hover();
}

//method to capture text from an element
export async function captureTextFromElement(page: any, xpath: string){
    return await page.locator(xpath).textContent();
}

//method to visit a page
export async function visitPage(page: any, url: string){
    await page.goto(url);
}

//method for hard wait
export async function wait(page: any, timeout: number){
    await page.waitForTimeout(timeout );
}