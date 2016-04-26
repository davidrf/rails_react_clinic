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

var GroceryForm = React.createClass({
  displayName: "GroceryForm",

  render: function () {
    return React.createElement(
      "form",
      null,
      React.createElement("input", { id: "grocery_name", type: "text" }),
      React.createElement("input", { type: "submit", value: "Add Grocery" })
    );
  }
});

var App = React.createClass({
  displayName: "App",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { id: "react-app-awesomeness" },
        "React Grocery List"
      ),
      React.createElement(GroceryForm, null),
      React.createElement(GroceryList, { groceries: this.props.initialData })
    );
  }
});

$(function () {
  var initialData = document.getElementById('initial-data');
  initialData = JSON.parse(initialData.text);
  ReactDOM.render(React.createElement(App, { initialData: initialData }), document.getElementById('grocery-list'));
});
