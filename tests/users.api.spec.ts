import{test,expect} from "@playwright/test"

let AUTH_TOKEN={'Authorization' : 'Bearer 9cb3a74cdb4cc0764320d653d3b5e6b45fa37d37283b9bb8424785fcfb8a38ab'};

test("Fetch a single user",async({request})=>{

    let response=await request.get("https://gorest.co.in/public/v2/users/8680371",{headers:AUTH_TOKEN});
   // console.log(response);
    let response_body=await response.json();
    console.log(response_body);
    console.log("Response code is :" +response.status());
    console.log("Response message is : " +response.statusText());

});
test("Fetch all users",async({request})=>{

    let response=await request.get("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN});
   // console.log(response);
    let response_body=await response.json();
    console.log(response_body);
    console.log("Response code is :" +response.status());
    console.log("Response message is : " +response.statusText());
     expect(response.status).toBe(200);
});
test("Create a single user",async({request})=>{


    let userdata= { 
        "name": "Shanisha",
        "email": "shanisha@gibson.test",
        "gender": "female",
        "status": "active"
    }
    let response=await request.post("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN, data:userdata});
   // console.log(response);
    let response_body=await response.json();
    console.log(response_body);
    console.log("Response code is :" +response.status());
    console.log("Response message is : " +response.statusText());
         expect(response.status).toBe(201);

});

test("Update resource",async({request})=>{


    let userdata= { 
        "name": "Shanisha",
        "email": "shanisha@gmail.test",
        "gender": "female",
        "status": "active"
    }
    let response=await request.put("https://gorest.co.in/public/v2/users/8678573",{headers:AUTH_TOKEN, data:userdata});
   // console.log(response);
    let response_body=await response.json();
    console.log(response_body);
    console.log("Response code is :" +response.status());
    console.log("Response message is : " +response.statusText());
         //expect(response.status).toBe(201);

});

test("Delete resource",async({request})=>{


   
    let response=await request.delete("https://gorest.co.in/public/v2/users/8678573",{headers:AUTH_TOKEN});
   // console.log(response);
    
    console.log("Response code is :" +response.status());
    console.log("Response message is : " +response.statusText());
         //expect(response.status).toBe(201);

});