import { useQuery } from "react-query";

function Savings() {
  const { data } = useQuery<IResponse<ISaving[]>>("savings", async () => {
    const res = await fetch("http://localhost:3000/api/v1/savings");
    return res.json();
  });

  const savings: ISaving[] = data?.data || [];

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
          {savings.map((row) => (
            <tr key={`savings-${row.id}`}>
              <td className="text-center">{row.date}</td>
              <td className="text-right">Rp{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Savings;
