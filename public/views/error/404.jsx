const React = require("react");
import DefaultLayout from "../layout/default";

const Error404 = ({ errorMessage }) => {
  return (
    <DefaultLayout title={"404 Page Not Found"}>
      <link rel="stylesheet" href={`./css/error/error.css`} />
      <div className={"container"}>
        <div className={"gridItem"}>
          <h1>404 ：随便の后端技术堆积站</h1>
          <h3>当前页面不存在，请检查访问连接是否正确</h3>
        </div>

        <div className={"gridItem"}>
          <h1>404: Current Page Doesn't Exist</h1>
          <h3>Please check the access URL is valid</h3>
        </div>
      </div>
    </DefaultLayout>
  );
};

module.exports = Error404;
