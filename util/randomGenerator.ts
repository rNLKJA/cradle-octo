/**
 * Generate a random string
 * This function will generate a random string with a default string length 8
 * @param {int} length
 */
const randomStringGenerator = async (length = 8) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// exports defined modules
module.exports = { randomStringGenerator };
