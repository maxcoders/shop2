"use client";
import set from "@/api/set";
import Link from "next/link";
import { useState } from "react";
export default function Tbody({ products }) {
  const [list, setlist] = useState(products);
  const pclone = async (ky) => {
    const t = await fetch(
      set.postdata + "?" + `a=sellercenterProductClone&ky=${ky}&cky=${set.cky}`,
      {
        cache: "no-store",
      }
    );
    setlist([await t.json(), ...list]);
  };

  const pdelete = (ky, i) => {
    const n = list.filter((e) => e !== list[i]);
    setlist(n);
    fetch(
      set.postdata +
        "?" +
        `a=sellercenterProductDelete&ky=${ky}&cky=${set.cky}`,
      {
        cache: "no-store",
      }
    );
  };
  return (
    <>
      {list &&
        list.map((c, i) => {
          return (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.ky}</td>
              <td className="frw g4">
                <Link
                  prefetch={false}
                  className="btn"
                  href={`/sellercenter/products/edit/${c.ky}`}
                >
                  edit
                </Link>
                <button className="btn" onClick={() => pdelete(c.ky, i)}>
                  delete
                </button>
                <button
                  className="btn"
                  onClick={(e) => {
                    pclone(c.ky);
                  }}
                >
                  clone
                </button>
              </td>
            </tr>
          );
        })}
    </>
  );
}
