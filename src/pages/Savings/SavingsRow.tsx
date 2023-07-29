import moment from "moment";
import { formattedNumber } from "../../@utils/number";

type Props = {
  date: string;
  amount: number;
};

function SavingsRow({ date, amount }: Props) {
  return (
    <tr>
      <td className="text-center">{moment(date).format("DD-MM-YYYY")}</td>
      <td className="text-right">
        Rp
        {formattedNumber(amount)}
      </td>
    </tr>
  );
}

export default SavingsRow;
