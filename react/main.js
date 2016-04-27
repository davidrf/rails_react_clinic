$(function() {
  var initialData = document.getElementById('initial-data');
  initialData = JSON.parse(initialData.text)
  ReactDOM.render(<App initialData={initialData} />, document.getElementById('grocery-list'));
  // ReactDOM.render(<StatefulComponent hello="hi" />, document.getElementById('grocery-list'));
});
