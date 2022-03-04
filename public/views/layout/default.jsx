var React = require("react");

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <meta name="author" content="rNLKJA" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{props.title}</title>

        <link rel="stylesheet" href="./css/layout/defaultLayout.css" />
      </head>
      <body>{props.children}</body>
      <footer>
        @
        <a
          href="https://github.com/chuangyu-hscy"
          alt="author github page"
          className=""
        >
          rNLKJA
        </a>
      </footer>
    </html>
  );
}

module.exports = DefaultLayout;
