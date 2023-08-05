import { useQueries } from "react-query";

function useSavings() {
  async function getSavings(): Promise<IResponse<ISaving[]>> {
    const res = await fetch("http://localhost:3000/api/v1/savings");
    return res.json();
  }

  async function getSavingsTotal(): Promise<IResponse<ISavingTotal>> {
    const res = await fetch("http://localhost:3000/api/v1/savings/total");
    return res.json();
  }

  const savingsQueries = useQueries([
    { queryKey: ["savings"], queryFn: getSavings },
    { queryKey: ["savingsTotal"], queryFn: getSavingsTotal },
  ]);

  const savingsQuery = savingsQueries[0];
  const savingsTotalQuery = savingsQueries[1];

  return {
    savings: savingsQuery.data?.data || [],
    savingsTotal: savingsTotalQuery.data?.data?.total || 0,
  };
}

export default useSavings;
