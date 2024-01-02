//   const mergedResponse = [
//     {
//       "userId": 1,
//       "userName": "Alice",
//       "orders": [
//         { "orderId": 101, "name": "Product A", "price": 10 },
//         { "orderId": 102, "name": "Product B", "price": 20 }
//       ]
//     },
//     {
//       "userId": 2,
//       "userName": "Bob",
//       "orders": [
//         { "orderId": 103, "name": "Product C", "price": 15 }
//       ]
//     },
//     {
//       "userId": 3,
//       "userName": "Charlie",
//       "orders": []
//     }
//   ]

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const orders = [
  { userId: 1, id: 101, name: "Product A", price: 10 },
  { userId: 1, id: 102, name: "Product B", price: 20 },
  { userId: 2, id: 103, name: "Product C", price: 15 },
];

let mergeProduct = [];
for (let i = 0; i < users.length; i++) {
  let mergeObject = { id: users[i].id, naming: users[i].name, order: [] };

  for (let j = 0; j < orders.length; j++) {
    if (users[i].id == orders[j].userId) {
      mergeObject.order.push({
        userId: orders[j].userId,
        productId: orders[j].id,
        productName: orders[j].name,
        price: orders[j].price,
      });
    }
  }

  mergeProduct.push(JSON.stringify(mergeObject));
}
console.log(mergeProduct);
