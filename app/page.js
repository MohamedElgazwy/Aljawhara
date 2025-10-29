export default function Home() {
  return (
    <main className="min-h-screen text-center py-20 bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        مرحبًا بكم في الجوهرة للتسوق 🌿
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        كل احتياجاتك الغذائية في مكان واحد، بأفضل الأسعار والعروض اليومية!
      </p>
      <a
        href="/products"
        className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
      >
        تصفح المنتجات
      </a>
    </main>
  );
}
