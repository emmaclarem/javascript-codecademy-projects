// OBJECTIVE: Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

function groceries(shoppingList) {
    let items = []
    shoppingList.forEach(obj => {
      items.push(obj.item);
    });
    if (items.length > 1) {
    lastItem = items.pop()
  
    let str = (items.join(', '));
    let str2 = str.concat(' and ', lastItem);
  
    return str2;
    } 
    else {
      return items.toString();
    }
  };
  
// The lines below will test the function
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries( [{item: 'Bread'}, {item: 'Butter'}] );  
groceries( [{item: 'Cheese Balls'}] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
  