var GroceryApp = React.createClass({
  getInitialState: function() {
    return {
      groceries: [],
      name: ''
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'api/groceries.json',
      contentType: 'application/json'
    })
    .done(function(data) {
      this.setState({
        groceries: data.groceries
      });
    }.bind(this))
  },
  handleChange: function(event) {
    var name = event.target.value;
    this.setState({
      name: name
    });
  },
  handleSubmit: function(event) {
    var name = event.target.name.value,
        groceries = this.state.groceries,
        newGrocery,
        newGroceries,
        jsonData;

    event.preventDefault();
    event.target.name.value = '';
    newGrocery = {
      id: Date.now(),
      name: name
    };
    newGroceries = groceries.slice();
    newGroceries.push(newGrocery);

    this.setState({
      groceries: newGroceries,
      name: ''
    });

    jsonData = JSON.stringify({
      grocery: newGrocery
    });

    $.ajax({
      url: 'api/groceries.json',
      method: 'POST',
      contentType: 'application/json',
      data: jsonData
    })
    .done(function(data) {
      newGrocery.id = data.grocery.id;
      this.setState({
        groceries: newGroceries
      });
    }.bind(this))
    .fail(function(data, status, error) {
      this.setState({
        groceries: groceries
      });
    }.bind(this));
  },
  render: function() {
    var groceries = this.state.groceries,
        name = this.state.name;

    return (
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm
          onSubmit={this.handleSubmit}
          name={name}
          onChange={this.handleChange}
        />
        <GroceryList groceries={groceries} />
      </div>
    );
  }
});
