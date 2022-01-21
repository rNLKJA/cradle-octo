// import required status code json file
const loginStatusCode = require("./login.status.code.json");
const userStatusCode = require("./user.status.code.json");
const invitationStatusCode = require("./invitation.status.code.json");

interface statusCodeInterface {
  status: boolean;
  message: string;
  csc: number;
}

/**
 * This function will search the status code from
 * the pre-defined status code json file for login related functions
 * @param {Number} statusCode
 * @return {statusCodeInterface} object
 */
const login = (statusCode: Number) => {
  return loginStatusCode.filter(
    (code: statusCodeInterface) => code.csc === statusCode,
  )[0];
};

/**
 * This function will search the status code from
 * the pre-defined status code json file for user related functions
 * @param {Number} statusCode
 * @return {statusCodeInterface} object
 */
const user = (statusCode: Number) => {
  return userStatusCode.filter(
    (code: statusCodeInterface) => code.csc === statusCode,
  )[0];
};

/**
 * This function will search the status code from
 * the pre-defined status code json file for user related functions
 * @param {Number} statusCode
 * @return {statusCodeInterface} object
 */
const invitation = (statusCode: Number) => {
  return invitationStatusCode.filter(
    (code: statusCodeInterface) => code.csc === statusCode,
  )[0];
};

module.exports = {
  login,
  user,
  invitation,
};
