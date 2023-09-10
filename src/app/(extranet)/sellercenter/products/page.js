import Link from "next/link";
import Dash from "./Dash";
export default function F() {
  return (
    <>
      <div className="fr g10 p10 jb">
        <div>Manage Products</div>
        <Link
          className="btn"
          prefetch={false}
          href="/sellercenter/products/add"
        >
          Add new
        </Link>
      </div>
      <Dash />
    </>
  );
}
