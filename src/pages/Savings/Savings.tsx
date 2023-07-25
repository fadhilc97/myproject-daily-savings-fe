import { useState } from "react";

interface ISaving {
  date: string;
  amount: number;
}

function Savings() {
  const [] = useState();

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Hello world</h2>
        <button type="button">Tambah Data</button>
      </div>
      <table className="mt-5">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">01-01-2023</td>
            <td className="text-right">Rp100,000</td>
          </tr>
          <tr>
            <td className="text-center">02-01-2023</td>
            <td className="text-right">Rp25,000</td>
          </tr>
          <tr>
            <td className="text-center font-bold">Total</td>
            <td className="text-right font-bold">Rp125,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Savings;
