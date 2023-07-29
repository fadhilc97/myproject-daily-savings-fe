import { useQuery } from "react-query";

function useSavingsTotal() {
  const savingsTotalQuery = useQuery<IResponse<ISavingTotal>>(
    "savingsTotal",
    async () => {
      const res = await fetch("http://localhost:3000/api/v1/savings/total");
      return res.json();
    }
  );

  return savingsTotalQuery.data?.data.total || 0;
}

export default useSavingsTotal;
