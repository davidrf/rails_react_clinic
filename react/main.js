$(function() {
  var groceryListDiv = document.getElementById('grocery-list');

  if (groceryListDiv) {
    ReactDOM.render(<GroceryApp />, groceryListDiv);
  }
});
