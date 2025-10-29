"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="min-h-screen py-12 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        🛒 عربة التسوق
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">العربة فارغة حاليًا</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-green-600 font-bold">{item.price} د.ل</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
