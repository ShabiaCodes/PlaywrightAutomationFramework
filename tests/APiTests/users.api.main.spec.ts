import { test,expect} from "../../src/fixtures/apiFixtures.js"

const TOKEN = process.env.API_TOKEN;
let userid:number;
let AUTH_TOKEN={Authorization: `Bearer ${TOKEN}`};


test.describe.serial("End to End users API test cases",()=>
{



test("Get all users API test",async({apiHelper})=>{
    let response=await apiHelper.getRequest("/public/v2/users",AUTH_TOKEN);
    console.log("Response body is : " +response.responseBody);
    expect(response.statusCode).toBe(200);

})


test("Create a fresh users API test",async({apiHelper})=>{
   
   let userdata= { 
        "name": "Shanisha",
        "email": "shanisha@gibson.test",
        "gender": "female",
        "status": "active"
    }
    let response=await apiHelper.postRequest("/public/v2/users",userdata,AUTH_TOKEN);
    console.log("Response body is : " +response.responseBody);
    expect(response.statusCode).toBe(201);
        expect(response.responseBody.name).toBe(userdata.name);
      userid=response.responseBody.id;
      console.log("User is is " +userid);

    
})

test("Update API test",async({apiHelper})=>{
   
   let userdata= { 
        "name": "Shanisha",
        "email": "shanisha@gibson.test",
        "gender": "female",
        "status": "active"
    }
    let response=await apiHelper.UpdateRequest(`/public/v2/users/${userid}`,userdata,AUTH_TOKEN);
    console.log("Response body is : " +response.responseBody);
    expect(response.statusCode).toBe(200);
        expect(response.responseBody.name).toBe(userdata.name);
     expect(response.responseBody.status).toBe(userdata.status);
      
    
})
test("Delete API test",async({apiHelper})=>{
   
   
    let response=await apiHelper.DeleteRequest(`/public/v2/users/${userid}`,AUTH_TOKEN);
    //console.log("Response body is : " +response.responseBody);
    expect(response.statusCode).toBe(204);
    expect(response.statusText).toBe("No Content");
     
      
    
})

})
