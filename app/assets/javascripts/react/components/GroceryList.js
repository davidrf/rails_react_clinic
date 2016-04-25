var GroceryList = React.createClass({
  displayName: "GroceryList",

  render: function () {
    var groceries = this.props.groceries,
        groceryComponents;

    groceryComponents = groceries.map(function (grocery) {
      var id = grocery.id,
          name = grocery.name;

      return React.createElement(Grocery, { key: id, id: id, name: name });
    });

    return React.createElement(
      "ul",
      null,
      groceryComponents
    );
  }
});