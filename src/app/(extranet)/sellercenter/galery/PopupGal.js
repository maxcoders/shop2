import set from "@/api/set";
import Place from "./Place";
const get = async function (d) {
  const t = await fetch(
    set.postdata + `?a=sellercenterListGal&cky=${set.cky}`,
    { cache: "force-cache" }
  );
  return await t.json();
};
export default async function F({ mediafiles, size, inputname }) {
  const gal = await get();
  return (
    <>
      <Place
        gal={gal}
        mediafiles={mediafiles}
        size={size}
        inputname={inputname}
      />
    </>
  );
}
