"use client";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="font-semibold mb-2">{product.name}</h4>
        <p className="text-green-600 font-bold text-lg mb-3">{product.price}</p>
        <button
          onClick={onAddToCart}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          🛒 أضف إلى العربة
        </button>
      </div>
    </div>
  );
}
