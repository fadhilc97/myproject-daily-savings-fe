import useSavings from "../../hooks/savings/useSavings";
import useSavingsTotal from "../../hooks/savings/useSavingsTotal";

function Savings() {
  const savings = useSavings();
  const savingsTotal = useSavingsTotal();

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
          {savings.length > 0 ? (
            <>
              {savings.map((row) => (
                <tr key={`savings-${row.id}`}>
                  <td className="text-center">{row.date}</td>
                  <td className="text-right">Rp{row.amount}</td>
                </tr>
              ))}
              <tr>
                <td className="text-center font-bold">Total</td>
                <td className="text-right font-bold">Rp{savingsTotal}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td colSpan={2} className="text-center">
                Data tidak ada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Savings;
