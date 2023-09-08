import List from "./List";
import set from "@/api/set";
const getFetch = async function (d) {
  const t = await fetch(set.postdata + "?" + d, {
    cache: "no-store",
    //next: { revalidate: 0 },
  });
  const z = await t.json();
  return z;
};
export default async function F() {
  const companies = await getFetch("a=maxcoderGetCompanies");
  if (companies)
    return <div>{companies && <List companies={companies} />}</div>;
  if (!companies) return <div>{companies && <Empty />}</div>;
}
