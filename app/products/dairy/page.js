"use client";

import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function DairyPage() {
  const { addToCart } = useCart();

  const dairy = [
    {
      name: "حليب المراعي 1 لتر",
      price: "5.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "لبن زبادي صغير",
      price: "1.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "عصير برتقال طبيعي",
      price: "4.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "جبنة مثلثات 8 قطع",
      price: "6.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🥛 قسم الألبان والعصائر
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dairy.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
