import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg10 fr g10 p10 cw">
      <Link href="/">Home</Link>
      <Link href="/products">products</Link>
      <Link href="/cart">cart</Link>
      <Link href="/orders">orders</Link>
      <Link href="/myaccount">myaccount</Link>
      <Link href="/messages">noti</Link>
    </header>
  );
}
