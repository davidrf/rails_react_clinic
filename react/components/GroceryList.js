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
