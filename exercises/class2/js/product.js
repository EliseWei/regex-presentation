function Product(name, category, price) {
  this.name = name;
  this.category = category;
  this.price = price;
}

Product.prototype.addToCart = function(quantity) {
  var plurality = '';
  if (quantity > 1) {
    plurality = 's';
  }
  var message = 'You added ' + quantity + ' ' + this.name + plurality + ' to your cart.';
  console.log(message);
  document.write('<h1>' + message + '</h1>');
}

module.exports = {
  Product: Product
}