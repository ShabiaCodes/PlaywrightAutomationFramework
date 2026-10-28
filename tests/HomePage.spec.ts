import {test,expect} from "../src/fixtures/pagefixtures.js"




test.beforeEach("Login",async({loginPage})=>
{
    
    await loginPage.goToLoginPage();
    await loginPage.DoLogin(process.env.USER_NAME!, process.env.PASSWORD!);

    

})


test("Home page title test", async({homepage})=>{

    let homeTitle=await homepage.getHomePageTitle();
    expect(homeTitle).toBe("My Account");

})

test("Logout test", async({homepage})=>{

    let islogout=await homepage.isLogoutlinkavailable();
    expect(islogout).toBe(true);
    
})

test("Home Page Headers Test", async({homepage})=>
{
    let headers=await homepage.getHomePageHeaders();
    expect(headers).toHaveLength(3);
    expect.soft(headers).toEqual(["My Orders","My Affiliate Account","Newsletter"]);
})