// import {test,expect} from "../src/fixtures/pagefixtures.js";

// test.beforeEach(async ({loginPage})=>
// {    
//         await loginPage.goToLoginPage();
//         await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
// })

// test("Verify Search Header Functionality Test", async({homepage, searchResultsPage})=>
// {
//    await homepage.doSearch("macbook");  
//    let searchHeader:string=await searchResultsPage.getSearchResultsPageHeader();

//    expect(searchHeader).toContain("macbook");

// })

// test("Verify Search Functionality Count Test", async({homepage, searchResultsPage})=>
// {
//    await homepage.doSearch("samsung");
//    let searchCount:number=await searchResultsPage.getSearchResultsCount();

//    expect(searchCount).toBeGreaterThan(0);

// })

// test("Verify Click Product Functionality Test @sanity", async({homepage, searchResultsPage,page})=>
// {
//    await homepage.doSearch("macbook");  
//    await searchResultsPage.selectAndClickOnProduct("MacBook Air");

//    expect(page).toHaveTitle("MacBook Air");

// })