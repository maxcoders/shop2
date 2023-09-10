import Empty from "./Empty";
import List from "./List";
import set from "@/api/set";
const getFetch = async function (d) {
  const t = await fetch(
    set.postdata + `?a=sellercenterProductsList&cky=${set.cky}`,
    {
      cache: "no-store",
    }
  );
  return await t.json();
};
export default async function F() {
  const products = await getFetch();
  if (products.length > 0) {
    return <div>{products && <List products={products} />}</div>;
  }
  return <Empty />;
}
