import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg10 fr g10 p10 cw">
      <Link href="http://localhost:3000">Shop</Link>
      <Link href="http://localhost:3000/sellercenter">extranet</Link>
      <Link href="http://localhost:3000/maxcoder">maxcoder</Link>
    </footer>
  );
}
