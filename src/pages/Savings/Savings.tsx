import { NavLink } from "react-router-dom";
import SavingsRows from "./SavingsRows";

function Savings() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Daftar Tabungan</h3>
        <NavLink to="/savings/create">
          <button type="button" className="btn-success">
            Tambah Data
          </button>
        </NavLink>
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
