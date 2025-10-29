"use client";
import ProductCard from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

export default function CannedPage() {
  const { addToCart } = useCart();

  const canned = [
    {
      name: "تونة صن شاين",
      price: "6.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "صلصة طماطم 400 جم",
      price: "3.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "فول معلب 450 جم",
      price: "3.5 د.ل",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "ذرة حلوة 400 جم",
      price: "4.0 د.ل",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
        🥫 قسم المعلبات
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {canned.map((p, i) => (
          <ProductCard key={i} product={p} onAddToCart={() => addToCart(p)} />
        ))}
      </div>
    </main>
  );
}
