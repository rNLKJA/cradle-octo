require("dotenv").config();

const logAppStartInformation = () => {
  console.log(
    "======================================================================",
  );
  console.log("Project Cradle start：");
  console.log(`Listening at PORT：${process.env.PORT || 3000}`);
  console.log(
    "======================================================================",
  );
};

module.exports = logAppStartInformation;
