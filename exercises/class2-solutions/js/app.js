var productModule = require('./product.js');
var petProductModule = require('./petProduct.js');
var petClothingModule = require('./petClothing.js');

var hat = new productModule.Product('Hat', 'Clothing', 15)
hat.addToCart(5);

var kittenProduct = new petProductModule.PetProduct('Catnip', 'Cats', 5, 100);
kittenProduct.buy(5);

var puppyProduct = new petProductModule.PetProduct('Chew toy', 'Dogs', 15, 100);
puppyProduct.buy(5);


var doggySweater = new petClothingModule.PetClothing('doggy sweater', 'dog clothings', 30, 100, 'medium');
doggySweater.buy(1);
doggySweater.displayOnWebsite();
