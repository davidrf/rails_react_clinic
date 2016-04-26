var Grocery = React.createClass({
  render: function() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    );
  }
});

var GroceryList = React.createClass({
  render: function() {
    var groceries = this.props.groceries.map(function(grocery) {
      return <Grocery name={grocery.name} />;
    });

    return (
      <ul>
        {groceries}
      </ul>
    );
  }
});

var GroceryForm = React.createClass({
  render: function() {
    return (
      <form>
        <input id="grocery_name" type="text"/>
        <input type="submit" value="Add Grocery" />
      </form>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 id="react-app-awesomeness">React Grocery List</h1>
        <GroceryForm />
        <GroceryList groceries={this.props.initialData} />
      </div>
    );
  }
});

$(function() {
  var initialData = document.getElementById('initial-data');
  initialData = JSON.parse(initialData.text)
  ReactDOM.render(<App initialData={initialData} />, document.getElementById('grocery-list'));
});
