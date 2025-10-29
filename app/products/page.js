import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    { name: "🧴 المنظفات", path: "/products/detergents" },
    { name: "🫒 الزيوت والسمن", path: "/products/oils" },
    { name: "🍫 الحلويات والشوكولاتة", path: "/products/sweets" },
    { name: "🥛 الألبان والعصائر", path: "/products/dairy" },
    { name: "🥫 المعلبات", path: "/products/canned" },
    { name: "🧂 التوابل والبهارات", path: "/products/spices" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">🛍️ الأقسام</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto px-4">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={cat.path}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 font-semibold text-lg hover:text-green-700 transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
