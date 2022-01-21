const loginStatusCode = require("./login.status.code.json");

interface statusCodeInterface {
  status: boolean;
  message: string;
  csc: number;
}

/**
 * This function will search the status code from
 * the pre-defined status code json file
 * @param {Number} statusCode
 * @return {statusCodeInterface} object
 */
const login = (statusCode: Number) => {
  return loginStatusCode.filter(
    (code: statusCodeInterface) => code.csc === statusCode,
  );
};

const user = (statusCode: Number) => {};

const invitation = (statusCode: Number) => {};

module.exports = {
  login,
  user,
  invitation,
};
