"use client";

import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function SweetsPage() {
  const { addToCart } = useCart();

  const sweets = [
    {
      name: "شوكولاتة مارس",
      price: "3.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "ويفر كيت كات",
      price: "2.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "بسكويت أولكر",
      price: "4.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "علكة بازر",
      price: "1.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🍫 قسم الحلويات والشوكولاتة
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sweets.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
