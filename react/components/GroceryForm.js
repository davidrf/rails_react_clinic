var GroceryForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.onGroceryAdd}>
        <input
          onChange={this.props.onGroceryNameChange}
          id="grocery_name"
          value={this.props.groceryName}
          type="text"
        />
        <input type="submit" value="Add Grocery" />
      </form>
    );
  }
});
