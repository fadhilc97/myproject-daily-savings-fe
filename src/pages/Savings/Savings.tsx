import SavingsRows from "./SavingsRows";

function Savings() {
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
          <SavingsRows />
        </tbody>
      </table>
    </div>
  );
}

export default Savings;
