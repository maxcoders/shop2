"use client";
import set from "@/api/set";
//import PopupGal from "../../galery/PopupGal";
import Variants from "./Variants";
export default function Form({ product }) {
  const form = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("cky", set.cky);
    fetch(set.postdata, {
      method: "POST",
      body: formData,
    });
  };
  return "";
  return (
    <form className="fc f1 g1 p1" onSubmit={(e) => form(e)}>
      <div className="n1">{product?.ky ? "Edit Product" : "Add product"}</div>
      <input
        type="hidden"
        name="a"
        defaultValue={
          product.ky ? "sellercenterProductEdit" : "sellercenterProductAdd"
        }
      />
      {product?.ky && (
        <input type="hidden" name="ky" defaultValue={product?.ky} />
      )}

      <section className="bgw br5 border fc p1 g10">
        <div className="n2">Product Images</div>
        <p>
          This is the main image of your product page. Multiple images can be
          uploaded at once. Maximum 8 images. Size between 330x330 and 5000x5000
          px. Max file size: 3 MB. Obscene image is strictly prohibited.
        </p>

        {/* <PopupGal mediafiles={product?.gal} size={8} inputname="images[]" /> */}
        <label>
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            defaultValue={product?.name}
            required
          />
        </label>
        <label>
          <p>Product Category</p>
          <input type="text" name="cat" defaultValue={product?.cat} required />
        </label>
      </section>

      <section className="bgw br5 border fc p1 g10">
        <div className="n2">Price, Stock & Variants</div>
        <p>
          You can add variants to a product that has more than one option, such
          as size or color.
        </p>
        <Variants product={product} />
      </section>
      <section className="bgw br5 border fc p1 g10">
        <div className="n2">Description</div>

        <input name="des" defaultValue={product.ky ? product?.des : ""} />
      </section>

      <input className="btn" type="submit" />
    </form>
  );
}
