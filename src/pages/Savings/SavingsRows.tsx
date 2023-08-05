import useSavings from "../../hooks/savings/useSavings";
import SavingsRow from "./SavingsRow";
import SavingsRowTotal from "./SavingsRowTotal";

function SavingsRows() {
  const { savings, savingsTotal } = useSavings();

  return savings.length > 0 ? (
    <>
      {savings.map((row) => (
        <SavingsRow key={row.id} date={row.date} amount={row.amount} />
      ))}
      <SavingsRowTotal total={savingsTotal} />
    </>
  ) : (
    <tr>
      <td colSpan={2} className="text-center">
        Data tidak ada
      </td>
    </tr>
  );
}

export default SavingsRows;
