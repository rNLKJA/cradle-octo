const React = require("react");

function Index({ name }) {
  return (
    <main>
      <h1>Hello: {name}</h1>
      <img src="/img/nachoneko.jpg" alt="amashiro mama" />
    </main>
  );
}

module.exports = Index;
