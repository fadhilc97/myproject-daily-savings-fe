import { formattedNumber } from "../../@utils/number";

type Props = {
  total: number;
};

function SavingsRowTotal({ total }: Props) {
  return (
    <tr>
      <td className="text-center font-bold">Total</td>
      <td className="text-right font-bold">
        Rp
        {formattedNumber(total)}
      </td>
    </tr>
  );
}

export default SavingsRowTotal;
