import Empty from "./Empty";
import List from "./List";
import set from "@/api/set";
const getFetch = async function (d) {
  const t = await fetch(set.postdata + `?a=maxcoderGetCompanies`, {
    cache: "no-store",
    //next: { revalidate: 0 },
  });
  const z = await t.json();
  return "";
};
export default async function F() {
  const companies = await getFetch();
  if (companies)
    return <div>{companies && <List companies={companies} />}</div>;
  if (!companies) return <div>{companies && <Empty />}</div>;
}
