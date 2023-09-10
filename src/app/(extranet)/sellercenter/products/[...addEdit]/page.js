import set from "@/api/set";
import Form from "./Form";
import Products from "@/app/(front)/product/page";
const get = async function (ky) {
  const t = await fetch(
    set.postdata + `?a=sellercenterGetProduct&cky=${set.cky}&ky=${ky}`,
    {
      cache: "no-store",
    }
  );
  return await t.json();
};
export default async function F({ params }) {
  if (params.addEdit[0] === "edit") {
    const product = await get(params.addEdit[1]);
    return <Form product={product} />;
  } else {
    const product = {};
    return <Form product={product} />;
  }
}
