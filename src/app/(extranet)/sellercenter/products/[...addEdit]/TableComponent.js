//import AdminPopupGaley from "../../../galery/AdminPopupGaley";
export default function VariableTable({ variants, product }) {
  const v1 = variants[0]?.vValue;
  const v2 = variants[1]?.vValue;
  const combinations = [];
  if (v1?.length > 0 && v2?.length > 0) {
    v1.forEach((v1) => {
      v2.forEach((v2) => {
        combinations.push({ v1, v2 });
      });
    });
  } else if (v1?.length > 0) {
    v1.forEach((v1) => {
      combinations.push({ v1 });
    });
  } else if (v2?.length > 0) {
    v2.forEach((v2) => {
      combinations.push({ v2 });
    });
  }
  return (
    <table>
      <thead>
        <tr className="al">
          {variants.length > 0 && <th>Media</th>}
          {variants[0]?.vName && <th>{variants[0].vName}</th>}
          {variants[1]?.vName && <th>{variants[1].vName}</th>}
          <th>Price</th>
          <th>Stock</th>
          <th>Sku</th>
          <th>Av</th>
        </tr>
      </thead>
      <tbody>
        {combinations.length < 1 && (
          <tr>
            <td>
              <input
                className="w80"
                name="price[]"
                defaultValue={product?.ky && product?.v[0]?.price}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="stock[]"
                defaultValue={product?.ky && product?.v[0]?.stock}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="sku[]"
                defaultValue={product?.ky && product?.v[0]?.sku}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="availability[]"
                defaultValue={product?.ky && product?.v[0]?.availability}
                required
              />
              <input
                name="vky[]"
                defaultValue={
                  product?.ky ? product?.v[0]?.ky : Date.now() + Math.random()
                }
              />
            </td>
          </tr>
        )}
        {combinations.map((item, key) => (
          <tr key={key}>
            {variants.length > 0 && (
              <td>
                {/* <AdminPopupGaley
                  className="maxwh40 pr"
                  mediafiles={""}
                  size={1}
                  inputname="pic[]"
                /> */}
              </td>
            )}
            {item["v1"] && (
              <td>
                {item["v1"]}
                <input type="hidden" name="v0[]" defaultValue={item["v1"]} />
              </td>
            )}
            {item["v2"] && (
              <td>
                {item["v2"]}
                <input type="hidden" name="v1[]" defaultValue={item["v2"]} />
              </td>
            )}
            <td>
              <input
                className="w80"
                name="price[]"
                defaultValue={product?.ky && product?.v[key]?.price}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="stock[]"
                defaultValue={product?.ky && product?.v[key]?.stock}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="sku[]"
                defaultValue={product?.ky && product?.v[key]?.sku}
                required
              />
            </td>
            <td>
              <input
                className="w80"
                name="availability[]"
                defaultValue={product?.ky && product?.v[key]?.availability}
                required
              />
              <input
                name="vky[]"
                defaultValue={
                  product?.ky && product?.v[key]?.ky
                    ? product?.v[key]?.ky
                    : Date.now() + Math.random()
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
