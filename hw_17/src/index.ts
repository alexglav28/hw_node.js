import {
  calculateTotal,
  displayId,
  filterOrdersByStatus,
  updateStock,
  type Order,
  type OrderStatus,
  type Inventory,
} from './homework17.js';

//Задание 1
console.log('Z1:', calculateTotal(100, 2));      // 200
console.log('Z1:', calculateTotal(100, 2, 10));  // 180

//Задание 2
console.log('Z2:', displayId('abc-123')); // "ID: ABC-123"
console.log('Z2:', displayId(7));         // "ID: 70"

//Задание 3
const orders: Order[] = [
  { orderId: 'A1', amount: 120, status: 'pending' },
  { orderId: 'B2', amount: 80,  status: 'shipped' },
  { orderId: 'C3', amount: 50,  status: 'delivered' },
  { orderId: 'D4', amount: 30,  status: 'pending' },
];

const onlyPending = filterOrdersByStatus(orders, 'pending');
console.log('Z3 (pending):', onlyPending);

//Задание 4
let inventory: Inventory = { 'iPhone 15': 5, 'AirPods Pro': 10 };

inventory = updateStock(inventory, ['iPhone 15', 999, +3]);   // прибавим 3
inventory = updateStock(inventory, ['MacBook Air', 1299, 2]); // новый товар
inventory = updateStock(inventory, ['AirPods Pro', 249, -4]); // списали 4

console.log('Z4 inventory:', inventory);
