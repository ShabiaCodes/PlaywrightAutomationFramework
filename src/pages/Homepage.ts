import {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage.js'

export class HomePage extends BasePage
{

readonly headers:Locator
 private readonly logoutlink:Locator
 private readonly searchicon:Locator
 private readonly searchBar:Locator



 constructor(page:Page)
 {
    super(page);
this.headers=page.locator("//h2")
this.logoutlink=page.locator("(//a[text()='Logout'])[2]")
this.searchicon=page.locator("//button[type='submit']")
this.searchBar=page.getByPlaceholder("Search")

 }

async getHomePageTitle():Promise<string>
{
    return await this.page.title();
}

async getHomePageHeaders():Promise<string[]>
{
    let headerList:string[]=await this.headers.allInnerTexts();

    return headerList;
}

async isLogoutlinkavailable():Promise<boolean>
{
    return await this.logoutlink.isVisible();
}
}