// OBJECTIVE: A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) { //check if the new meal is a string
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },

    set price(priceToCheck) { //check if the new price is a number
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },

    get todaysSpecial() { //get a string with today's special
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for $${this._price}!`
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  //set today's menu, we're having brunch
  menu.meal = 'pancakes';
  menu.price = 9;
  
  //log today's special
  console.log(menu.todaysSpecial);
