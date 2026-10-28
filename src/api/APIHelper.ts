import{APIRequestContext} from "@playwright/test"

export class APIHelper
{
    private readonly request:APIRequestContext;
    private readonly baseUrl:string;

    constructor(request:APIRequestContext, baseUrl:string)
    {
        this.request=request;
        this.baseUrl=baseUrl;
    }


    //Public resusable HTTP methods
    async getRequest(endpoint:string, requestHeaders?:Record<string,string>)
    {
        let response=await this.request.get(`${this.baseUrl}${endpoint}`, {headers:requestHeaders});

        return {
            statusCode:response.status(),
            responseBody:await response.json()
        }
        }
         async postRequest(endpoint:string,bodyData:object, requestHeaders?:Record<string,string>)
    {
        let response=await this.request.post(`this.baseUrl${endpoint}`, {headers:requestHeaders, data:bodyData});

        return {
            statusCode:response.status(),
            responseBody:await response.json()
            
        }
    }

       async UpdateRequest(endpoint:string,bodyData:object, requestHeaders?:Record<string,string>)
    {
        let response=await this.request.put(`this.baseUrl${endpoint}`, {headers:requestHeaders, data:bodyData});

        return {
            statusCode:response.status(),
            responseBody:await response.json()
        }
    }
     async DeleteRequest(endpoint:string,requestHeaders?:Record<string,string>)
    {
        let response=await this.request.delete(`this.baseUrl${endpoint}`, {headers:requestHeaders});

        return {
            statusCode:response.status(),
            statusText:response.statusText()
        }
    }
}

