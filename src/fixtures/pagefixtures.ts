import { test as baseTest } from "@playwright/test"

import { LoginPage } from "../pages/LoginPage.js"
import { HomePage } from "../pages/Homepage.js"

//Defining types for page fixture

type pageFixtures = {

    loginPage: LoginPage;
    homepage: HomePage;
}


export let test = baseTest.extend<pageFixtures>(
    {

        loginPage: async ({ page }, use) => {
            let loginPage = new LoginPage(page);
            await use(loginPage);


        },
        homepage: async ({ page }, use) => {
            let homepage = new HomePage(page);
            await use(homepage);

        }



    })

    export {expect} from "@playwright/test"