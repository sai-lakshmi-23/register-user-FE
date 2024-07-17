import axios from "axios"

 export const apiCall =async ({method="get", url="", body=null, headers={}}) =>{
    return await axios({method, url, body, headers});
}