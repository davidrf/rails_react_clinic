var Grocery = React.createClass({
  displayName: "Grocery",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "li",
        null,
        this.props.name
      )
    );
  }
});