/**
 * Log current message and information on developer console with timestamp
 * @param {String} action
 * @param {String} content
 */
const printLog = (
  action: String = "NO ACTION SPECIFIED",
  content: String = "NO CONTENT PROVIDED",
) => {
  const now = new Date();
  console.log(`
	${now.toISOString()}        ${action}
	${content}
	`);
};

// export functions
module.exports = { printLog };
