var GroceryForm = React.createClass({
  displayName: "GroceryForm",

  render: function () {
    return React.createElement(
      "form",
      { onSubmit: this.props.onGroceryAdd },
      React.createElement("input", {
        onChange: this.props.onGroceryNameChange,
        id: "grocery_name",
        value: this.props.groceryName,
        type: "text"
      }),
      React.createElement("input", { type: "submit", value: "Add Grocery" })
    );
  }
});