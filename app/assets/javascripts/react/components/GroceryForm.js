var GroceryForm = React.createClass({
  displayName: "GroceryForm",

  render: function () {
    var onSubmit = this.props.onSubmit,
        onChange = this.props.onChange,
        name = this.props.name;

    return React.createElement(
      "form",
      { onSubmit: onSubmit },
      React.createElement("input", {
        type: "text",
        name: "name",
        value: name,
        onChange: onChange
      }),
      React.createElement(
        "button",
        { type: "submit", className: "button" },
        "Add Grocery"
      )
    );
  }
});