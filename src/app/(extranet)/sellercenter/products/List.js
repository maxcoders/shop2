"use client";
import Tbody from "./Tbody";
export default function List({ products }) {
  return (
    <div>
      {products && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mail</th>
              <th>Password</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <Tbody products={products} />
          </tbody>
        </table>
      )}
    </div>
  );
}
