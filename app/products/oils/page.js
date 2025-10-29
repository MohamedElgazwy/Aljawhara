"use client";

import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function OilsPage() {
  const { addToCart } = useCart();

  const oils = [
    {
      name: "زيت دوار الشمس 1 لتر",
      price: "9.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "زيت زيتون ليبي 750 مل",
      price: "25.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "سمن نباتي 1 كجم",
      price: "11.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "زيت ذرة 1 لتر",
      price: "10.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🫒 قسم الزيوت والسمن
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {oils.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
