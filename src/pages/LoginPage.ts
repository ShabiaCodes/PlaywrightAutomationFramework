import {Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage.js'

export class LoginPage extends BasePage
{

 private readonly emailID:Locator
 private readonly password:Locator
 private readonly loginBtn:Locator
 private readonly forgotPwdLink:Locator
 private readonly logo:Locator
 private readonly pageErrorMEssage:Locator


 constructor(page:Page)
 {

    super(page)
    this.emailID=page.locator("#input-email")
    this.password=page.locator("#input-password")
    this.loginBtn=page.locator("//button[text()='Login']")
    this.forgotPwdLink = page.locator("(//a[text()='Forgotten Password'])[1]")

    this.logo=page.locator("//img")
    this.pageErrorMEssage=page.locator(".alert.alert-danger.alert-dismissible");
 }

 
  async goToLoginPage():Promise<void>
  {
    await this.page.goto("/en-gb?route=account/login");
  }


 async getLoginPAgeTitle():Promise<string>
 {
    return await  this.page.title();

 }

 async isForgotPwdLinkAvailable():Promise<boolean>
 {
    return await this.forgotPwdLink.isVisible();
 }


 async DoLogin(username:string, password:string)
{
 await this.emailID.fill(username);
await this.password.fill(password);
await this.loginBtn.click();
await this.page.waitForTimeout(4000);



}

async getPageErrorMEssage():Promise<string>
{
   return await this.pageErrorMEssage.innerText();
}
}
