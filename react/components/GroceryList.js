var GroceryList = React.createClass({
  render: function() {
    var groceries = this.props.groceries,
        groceryComponents;

    groceryComponents = groceries.map(function(grocery) {
      var id = grocery.id,
          name = grocery.name;

      return <Grocery key={id} id={id} name={name} />;
    });

    return (
      <ul>
        {groceryComponents}
      </ul>
    );
  }
});
