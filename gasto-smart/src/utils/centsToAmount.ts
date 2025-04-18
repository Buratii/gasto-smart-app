interface FormatNumberOptions {
  decimalCount?: number;
  decimal?: string;
  thousands?: string;
}

export const centsToAmount = (
  amount: number | string,
  decimalCount: number = 2,
  decimal: string = ",",
  thousands: string = "."
): string => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  let i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  ).toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    (j ? i.substr(0, j) + thousands : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(Number(amount) - parseInt(i))
          .toFixed(decimalCount)
          .slice(2)
      : "")
  );
};
