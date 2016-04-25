var GroceryForm = React.createClass({
  render: function() {
    var onSubmit = this.props.onSubmit,
        onChange = this.props.onChange,
        name = this.props.name;

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <button type="submit" className="button">Add Grocery</button>
      </form>
    );
  }
});
