var Grocery = React.createClass({
  displayName: "Grocery",

  render: function () {
    var name = this.props.name;
    return React.createElement(
      "li",
      null,
      name
    );
  }
});