import { formattedNumber } from "../../@utils/number";
import useSavingsTotal from "../../hooks/savings/useSavingsTotal";

function SavingsRowTotal() {
  const savingsTotal = useSavingsTotal();
  return (
    <tr>
      <td className="text-center font-bold">Total</td>
      <td className="text-right font-bold">
        Rp
        {formattedNumber(savingsTotal)}
      </td>
    </tr>
  );
}

export default SavingsRowTotal;
