import { apiCall, formattedAadhar } from "./utilities";

export function* doSign (action) {
    try {
        const { firstName,lastName,dateOfBirth,email,gender,phoneNumber,aadharNumber,panNumber } = action?.payload;
  const updatedAadhar = formattedAadhar(aadharNumber);
   console.log("sagas data", firstName,lastName,dateOfBirth,email,gender,phoneNumber,updatedAadhar,aadharNumber,panNumber);
  const response = yield apiCall({
    method: "post",
    url: "http://localhost:8080/api/register-user",
    body: { firstName,lastName,dateOfBirth,email,phoneNumber,aadharNumber:updatedAadhar,panNumber },
    headers: {
      Authorization: "Bearer YOUR_TOKEN_HERE",
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Axios - YourApp/1.0.0",
      "Cache-Control": "no-cache",
      "Accept-Encoding": "gzip, deflate",
      "X-Custom-Header": "customValue",
    },
  });
    } catch (error) {
        console.log(error);
    }
}
