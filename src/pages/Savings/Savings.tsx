import { NavLink } from "react-router-dom";
import SavingsRows from "./SavingsRows";
import Button from "../../components/Button";

function Savings() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Daftar Tabungan</h3>
        <NavLink to="/savings/create">
          <Button variant="success">Tambah Data</Button>
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
