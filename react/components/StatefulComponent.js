var StatefulComponent = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },

  componentDidMount() {
    setInterval(function() {
      var nextCount = this.state.count + 1;
      this.setState({ count: nextCount });
    }.bind(this), 1000);

  },

  nextCount: function() {
  },

  render: function() {
    return (
      <div onClick={this.nextCount}>
        <h1>{this.props.hello}</h1>
        <span>{this.state.count}</span>
      </div>
    );
  }
});
