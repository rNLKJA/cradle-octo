require("dotenv").config();

const logAppStartInformation = () => {
  console.log("=======================================");
  console.log("Project start    ：随便の后端技术堆积站");
  console.log(`Listening at PORT：${process.env.PORT || 3000}`);
  console.log("---------------------------------------");
  console.log("开始运行：随便の后端技术堆积站");
  console.log(`端口    ：${process.env.PORT || 3000}`);
  console.log("=======================================");
};

module.exports = logAppStartInformation;
