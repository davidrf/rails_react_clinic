var App = React.createClass({
  displayName: "App",

  getInitialState: function () {
    return {
      groceries: this.props.initialData,
      groceryName: ''
    };
  },
  componentDidMount: function () {
    setInterval(function () {
      $.ajax({
        method: "GET",
        url: "/api/groceries.json",
        contentType: 'json'
      }).done(function (data) {
        var currentGroceries = data["groceries"];
        this.setState({ groceries: currentGroceries });
      }.bind(this));
    }.bind(this), 100);
  },
  handleGroceryNameChange: function (event) {
    var nextGroceryName = event.target.value;
    this.setState({ groceryName: nextGroceryName });
  },
  handleGroceryAdd: function (event) {
    event.preventDefault();
    var grocery = { id: 1234, name: this.state.groceryName };
    var nextGroceries = this.state.groceries;
    nextGroceries.push(grocery);
    this.setState({ groceries: nextGroceries, groceryName: '' });

    var data = JSON.stringify({ grocery: { name: this.state.groceryName } });
    $.ajax({
      method: "POST",
      url: "/api/groceries.json",
      contentType: 'application/json',
      data: data
    });
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { id: "react-app-awesomeness" },
        "React Grocery List"
      ),
      React.createElement(GroceryForm, {
        groceryName: this.state.groceryName,
        onGroceryAdd: this.handleGroceryAdd,
        onGroceryNameChange: this.handleGroceryNameChange
      }),
      React.createElement(GroceryList, { groceries: this.state.groceries })
    );
  }
});