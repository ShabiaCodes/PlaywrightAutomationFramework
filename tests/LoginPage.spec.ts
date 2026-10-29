import { LoginPage } from "src/pages/LoginPage.js";
import {test,expect} from "../src/fixtures/pagefixtures.js"
import {CsvHelper} from "../src/utils/CSV_utils.js"


test.beforeEach(async({loginPage})=>
{
    
    await loginPage.goToLoginPage();
       
})

test("Login page Title @sanity",async({loginPage})=>{

    
    let title=await loginPage.getLoginPAgeTitle();
    expect(title).toBe("Account Login");


})
test("Forgot password link exists test",async({loginPage})=>{

   

    let result=await loginPage.isForgotPwdLinkAvailable();
    
    expect(result).toBe(true);

    
})

test("Login functionLITY @sanity",async({loginPage,homepage})=>{

   

    await loginPage.DoLogin(process.env.USER_NAME!, process.env.PASSWORD!);
   
let flag=await homepage.isLogoutlinkavailable();
await expect(flag).toBeTruthy();
})
    //Reading multiple data from CSV for negative testing

    let testData: Record<string, string>[]=CsvHelper.readCsv("src/testData/loginData.csv")

for (let data of testData)
{
     test(`Negative Login Test wiht username : ${data.username} and ${data.password}`, async({loginPage})=>{
        await loginPage.DoLogin(data.username,data.password);
        let errormessage= await loginPage.getPageErrorMEssage();
        await expect(errormessage).toContain(" Warning: No match for E-Mail Address and/or Password.");
})
}


