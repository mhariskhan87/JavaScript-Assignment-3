var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];

//---------------------------------------------
// 1. Find a Product by ID
// Write a program that takes a product ID and prints the product object.
// Output:
// {
//   "id": 102,
//   "title": "Mobile",
//   "varations": [...],
//   "reviews": [...]
// }

// let input = prompt("Product id");
//   for (var i = 0; i < products.length; i++){
//     if (products[i].id = input) {
//   console.log("id :" + products[i].id);
//   console.log("title:" + products[i].title);
//   console.log("variations:" + products[i].variations);
//   console.log("reviews:" + products[i].reviews);
  
// }
// }


//-------------------------------------------------

// 2. List All Product Titles
// Write a program that prints all product titles.
// Output:
// Sony LED 40 inch
// Mobile
// Bike


// for (var i = 0; i < products.length; i++){
 
//   console.log(products[i].title);
// }


//------------------------------------------------

// 3. Find Available Colors of a Product
// Given a product ID, print all available colors.
// Output:
// black
// red
// silver


// let input = prompt("write product id:")
// for (var i = 0; i < products.length; i++){
//   if (input == products[i].id) {
//     for (var j = 0; j < products[i].variations.length; j++){
//       console.log(products[i].variations[j].color);
//     }
//   }
// }

//---------------------------------------------------

// 4. Get Total Quantity of a Product
// Write a program that calculates and prints the total quantity of all variations of a given product.
// Output:
// Total Quantity: 14

// let input = prompt("write product id:")
// for (var i = 0; i < products.length; i++){
//   if (input == products[i].id) {
//     var sum = 0;
//     for (var j = 0; j < products[i].variations.length; j++){
//       sum = sum + products[i].variations[j].quantity;
//     }
//     console.log("Total Quantity:" + sum);
//   }
// }

//------------------------------------------------------------


// 5. Filter Products with Low Stock
// Write a program that prints products where at least one variation has a quantity of less than 2
// Output:
// Sony LED 40 inch
// Mobile
// Bike

// for (var i = 0; i < products.length; i++){
//   for (var j = 0; j < products[i].variations.length; j++){
//     if (products[i].variations[j].quantity < 2) {
//       console.log(products[i].title);
//     }
//   }
// }
//------------------------------------------------------------

// 6. Find the Highest Rated Product
// Write a program that prints the product with the highest rating.
// Output:
// Highest Rated Product: Mobile




//--------------------------------------------------------------


// 7. Filter Active Reviews for a Product
// Modify the given logic to display only approved (status: true) reviews.
// Output:
// {"user": "Ahmad", "rating": 4.0, ...}
// {"user": "Ali", "rating": 5.0, ...}

// let input = prompt("write product id:")
// for (var i = 0; i < products.length; i++){
//   if (input == products[i].id) {
//     for (var j = 0; j < products[i].reviews.length; j++){
//       if (products[i].reviews[j].status == true) {
//          console.log(products[i].reviews[j]);

//        }
//  }
// }
// }
//--------------------------------------------------------------

// 8. Find the Most Expensive Variation of Each Product
// Write a program that prints the most expensive variation for each product.
// Output:
// Product 101 = Sony LED 40 inch - Silver (55000)
// Product 102 = Mobile - Silver (55000)
// Product 103 = Bike - Black (55000)


// for (var i = 0; i < products.length; i++){
//   var max = products[i].variations[0].price;
//   var color = products[i].variations[0].color;
//   for (var j = 0; j < products[i].variations.length; j++){
//     if (products[i].variations[j].price > max) {
//       max = products[i].variations[j].price;
//       color = products[i].variations[j].color;
//     }
//   }
//   console.log("Product " + products[i].id + " = " + products[i].title + " - " + color + "(" + max + ")");
// }	
//--------------------------------------------------------------

// 9. Calculate Total Stock Value
// Calculate and print the total value of all products in stock (sum of price * quantity for all variations).
// Output:
// Total Stock Value: 1020000

// let sum = 0;
// for (var i = 0; i < products.length; i++){
//   for (var j = 0; j < products[i].variations.length; j++){
//     sum = sum + (products[i].variations[j].price * products[i].variations[j].quantity);
//   }
// }
// console.log("Total Stock Value:" + sum);
//--------------------------------------------------------------

