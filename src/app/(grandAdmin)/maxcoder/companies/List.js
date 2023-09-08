"use client";
import Tbody from "./Tbody";
export default function List({ companies }) {
  return (
    <div>
      {companies && (
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
            <Tbody companies={companies} />
          </tbody>
        </table>
      )}
    </div>
  );
}
