var GroceryList = React.createClass({
  displayName: "GroceryList",

  render: function () {
    var groceries = this.props.groceries.map(function (grocery) {
      return React.createElement(Grocery, { name: grocery.name });
    });

    return React.createElement(
      "ul",
      null,
      groceries
    );
  }
});