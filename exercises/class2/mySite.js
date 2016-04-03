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

var kittenProduct = new Product('Catnip', 'Cats', 5)
kittenProduct.addToCart(5);

var puppyProduct = new Product('Chew toy', 'Dogs', 10);

function PetProduct(name, category, price, inventory) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.inventory = inventory;
}

PetProduct.prototype.buy = function(quantity) {
    this.inventory = this.inventory - quantity;
    var plurality = '';
    if (quantity > 1) {
      plurality = 's';
    }
    document.write('You bought ' + quantity + ' ' + this.name + plurality);
    }

var kittenProduct = new PetProduct('Catnip', 'Cats', 5, 100);
kittenProduct.buy(5);

var puppyProduct = new PetProduct('Chew toy', 'Dogs', 15, 100);
puppyProduct.buy(5);


// The constructor function
function PetClothing(name, category, price, inventory, size) {
    PetProduct.call(this, name, category, price, inventory);
    this.size = size;
}
// Extending the PetProduct object
PetClothing.prototype = Object.create(PetProduct.prototype);

var doggySweater = new PetClothing('doggy sweater', 'dog clothings', 30, 100, 'medium');
doggySweater.buy(1);

PetProduct.prototype.displayOnWebsite = function() {
    var $productInfo = $('<p></p>');
    $productInfo.text('You are buying a ' + this.name);

    var $container = $('.kittenshop-container');
    $container.append($productInfo);
};

doggySweater.displayOnWebsite();

var $quantity = $('#quantity').val();
console.log ($quantity);

var $submitButton = $('#buy-catnip');
$submitButton.click( function(event) {
    event.preventDefault();
    var $quantity = $('#quantity').val();
    console.log ('jq' + $quantity);
});