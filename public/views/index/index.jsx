const React = require("react");

function Index({ name }) {
  return (
    <div>
      <h1>Hello: {name}</h1>
      <img src="/img/nachoneko.jpg" alt="amashiro mama" />
    </div>
  );
}

module.exports = Index;
