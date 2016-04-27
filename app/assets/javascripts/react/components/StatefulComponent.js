var StatefulComponent = React.createClass({
  displayName: "StatefulComponent",

  getInitialState: function () {
    return { count: 0 };
  },

  componentDidMount() {
    setInterval(function () {
      var nextCount = this.state.count + 1;
      this.setState({ count: nextCount });
    }.bind(this), 1000);
  },

  nextCount: function () {},

  render: function () {
    return React.createElement(
      "div",
      { onClick: this.nextCount },
      React.createElement(
        "h1",
        null,
        this.props.hello
      ),
      React.createElement(
        "span",
        null,
        this.state.count
      )
    );
  }
});