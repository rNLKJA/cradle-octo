/**
 * Log current message and information on developer console with timestamp
 * @param {String} content
 */
const printLog = (content: String) => {
  const now = new Date();
  console.log(`
	${now.toISOString()}
	${content}
	`);
};

// export functions
module.exports = { printLog };
