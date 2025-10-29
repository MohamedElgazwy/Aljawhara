"use client";

import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function SpicesPage() {
  const { addToCart } = useCart();

  const spices = [
    {
      name: "كمون مطحون 100 جم",
      price: "2.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "فلفل أسود مطحون",
      price: "3.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "كركم 100 جم",
      price: "2.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "بهارات مشكلة",
      price: "4.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🧂 قسم التوابل والبهارات
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {spices.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
