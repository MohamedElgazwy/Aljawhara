"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <header className="bg-green-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">الجوهرة للتسوق</h1>
        <nav>
          <ul className="flex gap-5 text-sm md:text-base">
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/products">المنتجات</Link>
            </li>
            <li>
              <Link href="/offers">العروض</Link>
            </li>
            <li>
              <Link href="/contact">اتصل بنا</Link>
            </li>
            <li className="relative">
              <Link href="/cart">🛒 السلة</Link>
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
