const menu = {  
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
   
  get appetizers() {
  return this._appetizers;
  },
  set appetizers(appetizersIn) {
    this._appetizers = appetizersIn;
  },
  
  get mains() {
  return this._mains;
  },
  set mains(mainsIn) {
    this._mains = mainsIn
  },
  
  get desserts() {
  return this._desserts;
  },
  set desserts(dessertsIn) {
    this._desserts = dessertsIn
  },
 },
  
  get courses() {
    return {
      appetizers: this._course.appetizers,
      mains: this._course.mains,
      desserts: this._course.desserts
    };
  },
  
  //=======================================//
   
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`
  }
};

  //=======================================//

//Appetizers
menu.addDishToCourse('appetizers', 'Beef Wellington', 10.99);
menu.addDishToCourse('appetizers', 'Garlic Bread', 5.99);
menu.addDishToCourse('appetizers', 'French Onion Soup', 7.99);
//Mains
menu.addDishToCourse('mains', 'Ribeye Steak', 26.99);
menu.addDishToCourse('mains', 'Crispy Chicken Burger', 18.99);
menu.addDishToCourse('mains', 'Lamb Shank', 16.99);
//Desserts
menu.addDishToCourse('desserts', 'Ice Cream', 6.99);
menu.addDishToCourse('desserts', 'Chocolate Fondue', 22.99);
menu.addDishToCourse('desserts', 'Tiramisu', 12.99);


let meal = menu.generateRandomMeal();
console.log(meal);