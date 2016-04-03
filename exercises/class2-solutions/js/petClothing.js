var $ = require('jquery');
var petProductModule = require('./petProduct.js');

// The constructor function
function PetClothing(name, category, price, inventory, size) {
    petProductModule.PetProduct.call(this, name, category, price, inventory);
    this.size = size;
}

// Extending the petProductModule.PetProduct object
PetClothing.prototype = Object.create(petProductModule.PetProduct.prototype);

petProductModule.PetProduct.prototype.displayOnWebsite = function() {
    var $productInfo = $('<p></p>');
    $productInfo.text('You are buying a ' + this.name);

    var $container = $('.kittenshop-container');
    $container.append($productInfo);
};

module.exports = {
    PetClothing: PetClothing
}
