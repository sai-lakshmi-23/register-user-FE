import axios from "axios";

export const apiCall = async ({
  method = "get",
  url = "",
  body = null,
  headers = {},
}) => {
  return await axios({ method, url, data: body, headers });
};
export function formattedAadhar(aadharNumber) {
  const aadhar = aadharNumber.split(" ");
  return aadhar.join("");
}
