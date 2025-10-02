// ЗАДАНИЕ 1

export function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const safeDiscount = Math.min(Math.max(discount, 0), 100);
  const subtotal = price * quantity;
  const total = subtotal * (1 - safeDiscount / 100);
  return Number(total.toFixed(2));
}

// ЗАДАНИЕ 2

export type Id = string | number;

export function displayId(id: Id): string {
  if (typeof id === "string") {
    return `ID: ${id.toUpperCase()}`;
  }

  return `ID: ${id * 10}`;
}

// ЗАДАНИЕ 3

export type OrderStatus = "pending" | "shipped" | "delivered";

export interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

export function filterOrdersByStatus(
  orders: Order[],
  status: OrderStatus
): Order[] {
  return orders.filter((o) => o.status === status);
}

// ЗАДАНИЕ 4

export type ProductInfo = [name: string, price: number, deltaInStock: number];

export type Inventory = Record<string, number>;

export function updateStock(
  inventory: Inventory,
  productInfo: ProductInfo
): Inventory {
  const [name, _price, delta] = productInfo;
  const current = inventory[name] ?? 0;
  return {
    ...inventory,
    [name]: current + delta,
  };
}
