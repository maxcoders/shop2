"use client";
import set from "@/api/set";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdSend } from "react-icons/md";
export default function Place({ gal, mediafiles, size, inputname }) {
  const [select, setselect] = useState(mediafiles);
  const selectgaleryimage = (e) => {
    if ([...select].includes(e)) {
      const n = select.filter((i) => i !== e);
      setselect(n);
    } else {
      if (select.length < size) {
        setselect([...select, e]);
      }
    }
  };
  const [open, setopen] = useState(false);
  return (
    <div className="productimagepath grid100 p0">
      {open && (
        <div className="wh-screen pf xy0 bg1 z10">
          <div className="main fc">
            <div className="header bg9 fr jb ac">
              <div className="n2 p10">Galery</div>
              <div onClick={() => setopen(!open)} className="btn p10">
                <AiOutlineClose size={24} className="cp" />
              </div>
            </div>
            <div
              className="main f1 pr bgw autox"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <div className="grid100">
                {gal &&
                  gal.map((e, key) => (
                    <div
                      key={key}
                      className={`mh100 oh fc jc ac bg2 r5 oh cp ${
                        [...select].includes(e) ? "b" : ""
                      }`}
                      onClick={() => selectgaleryimage(e)}
                    >
                      <img src={set.host + e} alt={key} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="footer bg9 p10 f1">
              <div className="fr ac">
                <div className="fr">
                  {select.length < 1 && <div>Please Select image</div>}
                  {select.length > 0 &&
                    select.map((e, key) => (
                      <div
                        key={key}
                        className="wh50 cp"
                        onClick={() => selectgaleryimage(e)}
                      >
                        <img src={set.host + e} alt={key} />
                      </div>
                    ))}
                </div>
                <div>
                  {select.length > 0 && (
                    <div
                      className="btnblue"
                      onClick={() => {
                        setopen(false);
                      }}
                    >
                      <MdSend />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {select?.length > 0 &&
        select.map((e, key) => {
          if (e == "") return;
          return (
            <div
              key={key}
              className="mh100 oh fc jc ac bg2 r5 oh cp"
              onClick={() => selectgaleryimage(e)}
            >
              <div className="pr">
                <img src={set.host + e} alt={key} />
                <input name={inputname} defaultValue={e} />
              </div>
            </div>
          );
        })}
      {select?.length < size && (
        <div
          className="loadipic"
          onClick={(e) => {
            setopen(true);
            console.log("first");
          }}
        >
          <span className="fs20">+</span>
        </div>
      )}
    </div>
  );
}
