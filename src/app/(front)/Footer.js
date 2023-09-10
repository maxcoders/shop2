import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg10 fr g10 p10 cw">
      <Link href="/">Shop</Link>
      <Link href="/sellercenter">extranet</Link>
      <Link href="/maxcoder">maxcoder</Link>
    </footer>
  );
}
