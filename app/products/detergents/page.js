"use client";

import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function DetergentsPage() {
  const { addToCart } = useCart();

  const detergents = [
    {
      name: "برسيل جل 2 لتر",
      price: "18.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "فيري منظف أطباق",
      price: "9.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "صابون غسيل بودرة 3 كجم",
      price: "22.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "مطهر كلور 1 لتر",
      price: "6.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🧴 قسم المنظفات
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {detergents.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
