$(function () {
  var groceryListDiv = document.getElementById('grocery-list');

  if (groceryListDiv) {
    ReactDOM.render(React.createElement(GroceryApp, null), groceryListDiv);
  }
});