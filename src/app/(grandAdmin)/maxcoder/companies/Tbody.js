import set from "@/api/set";
import Link from "next/link";
export default function Tbody({ companies }) {
  const syncCompany = (ky) => {
    fetch(set.postdata + "?" + `a=maxcoderCompanySync&cky=` + ky);
    console.log(set.postdata + "?" + `a=maxcoderCompanySync&cky=` + ky);
  };
  const deleteCompany = (ky) => {
    fetch(set.postdata + "?" + `a=maxcoderCompanydelete&cky=` + ky, {
      next: { revalidate: 0 },
    });
    console.log(set.postdata + "?" + `a=maxcoderCompanydelete&cky=` + ky);
  };

  return (
    <>
      {companies &&
        companies.map((c) => {
          return (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.ky}</td>
              <td className="frw g4">
                <button className="btn" onClick={() => deleteCompany(c.ky)}>
                  delete
                </button>
                <button className="btn">edit</button>
                <button className="btn">update</button>
                <button
                  className="btn"
                  onClick={(e) => {
                    syncCompany(c.ky);
                  }}
                >
                  sync
                </button>
                <Link className="btn" href={``}>
                  View
                </Link>
              </td>
            </tr>
          );
        })}
    </>
  );
}
