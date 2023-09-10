"use client";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import TableComponent from "./TableComponent";
export default function A({ product }) {
  const [variants, setvariants] = useState([]);
  const createvariable = (e) => {
    if (variants.length < 2)
      setvariants([...variants, { vName: "", vValue: [] }]);
  };

  useEffect(() => {
    const v0 = { vName: product?.var0, vValue: [] };
    const v1 = { vName: product?.var1, vValue: [] };
    if (product?.v?.length > 0) {
      product?.v?.forEach((e) => {
        if (!v0.vValue.includes(e.v0)) v0.vValue.push(e.v0);
        if (!v1.vValue.includes(e.v1)) v1.vValue.push(e.v1);
      });
      if (v0.vName && v1.vName) {
        setvariants([v0, v1]);
      } else if (v0.vName) {
        setvariants([v0]);
      } else if (v1.vName) {
        setvariants([v1]);
      }
    }
  }, [product]);

  const removeVariant = (i) => {
    const n = variants.filter((e) => e !== variants[i]);
    setvariants(n);
  };
  const changeVname = (i, n) => {
    const u = [...variants];
    u[i].vName = n;
    setvariants(u);
  };

  const addnewVvalue = (i) => {
    const k = variants[i].vValue.length;
    const n = document.getElementById(`ref${i}`).value;
    const u = [...variants];
    u[i].vValue[k] = n;
    setvariants(u);
    document.getElementById(`ref${i}`).value = "";
  };
  const changeVvalue = (e, i, k, n) => {
    const u = [...variants];
    n = n.trim();
    if (n !== "") {
      if (k < 0) {
        e.target.value = "";
        k = u[i].vValue.length;
      }
    } else {
      console.log("bos");
    }
    u[i].vValue[k] = n;
    setvariants(u);
  };

  const removeVvalue = (i, k) => {
    const u = [...variants];
    const z = k - 1;
    u[i].vValue.splice(z, 1);
    setvariants(u);
  };
  return (
    <div className="fc g10">
      {variants.length > 0 &&
        variants.map((e, i) => {
          return (
            <div key={i} className="bg2 p1 r5 pr fc g10">
              <div>
                <p>Variant{i + 1} Name</p>
                <input
                  type="text"
                  name={`var${i}`}
                  onChange={(e) => changeVname(i, e.target.value)}
                  defaultValue={variants[i]?.vName}
                />
              </div>
              <div className="fc g10">
                <p>Total Variants</p>
                {variants[i].vValue.length > 0 &&
                  variants[i].vValue.map((e, key) => (
                    <div key={key} className="bgw fr p10 g10 r5 border pr">
                      <div>
                        <input
                          type="text"
                          defaultValue={variants[i].vValue[key]}
                          placeholder="Write variant value"
                          onKeyUp={(e) =>
                            changeVvalue(e, i, key, e.target.value)
                          }
                        />
                      </div>
                      <RiDeleteBin5Line
                        onClick={(e) => removeVvalue(i, key)}
                        color="#999"
                        size={24}
                        className="part15 p5 cp"
                      />
                    </div>
                  ))}

                <div className="addnewvariantwalue   bgw fr p10 g10 dashed r5">
                  <div className="fr">
                    <input id={`ref${i}`} placeholder="Write variant value" />
                    <div onClick={() => addnewVvalue(i)} className="btn bg1">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <RiDeleteBin5Line
                onClick={(e) => removeVariant(i)}
                color="#999"
                size={24}
                className="part15 p5 cp"
              />
            </div>
          );
        })}
      <div>
        {variants.length < 2 && (
          <div onClick={(e) => createvariable(e)} className="btn p12">
            Add variant ( {variants.length}/2 )
          </div>
        )}
      </div>

      <div className="PriceStocktable fc g10 p10 bg2 r">
        <div className="n3">Price & Stock</div>
        <TableComponent variants={variants} product={product} />
      </div>
    </div>
  );
}
