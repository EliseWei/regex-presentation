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

module.exports = {
    PetProduct: PetProduct
}