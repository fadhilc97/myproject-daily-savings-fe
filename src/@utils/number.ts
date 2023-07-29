import numbro from "numbro";

export function formattedNumber(value: number) {
  return numbro(value).format("0,0.00");
}
